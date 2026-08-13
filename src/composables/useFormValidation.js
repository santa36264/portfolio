import { ref, reactive, computed } from 'vue';

export function useFormValidation() {
  const errors = ref({});
  const touched = ref({});

  // Validation rules
  const rules = {
    required: (value) => {
      if (!value || value.toString().trim() === '') {
        return 'This field is required';
      }
      return null;
    },
    
    email: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
      return null;
    },
    
    minLength: (min) => (value) => {
      if (value && value.length < min) {
        return `This field must be at least ${min} characters long`;
      }
      return null;
    },
    
    maxLength: (max) => (value) => {
      if (value && value.length > max) {
        return `This field must be no more than ${max} characters long`;
      }
      return null;
    },
    
    phone: (value) => {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (value && !phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
        return 'Please enter a valid phone number';
      }
      return null;
    },
    
    url: (value) => {
      try {
        new URL(value);
        return null;
      } catch {
        return 'Please enter a valid URL';
      }
    }
  };

  const validate = (fieldName, value, validationRules = []) => {
    const fieldErrors = [];
    
    for (const rule of validationRules) {
      let error = null;
      
      if (typeof rule === 'string') {
        // Built-in rule
        error = rules[rule] ? rules[rule](value) : null;
      } else if (typeof rule === 'function') {
        // Custom rule
        error = rule(value);
      } else if (typeof rule === 'object' && rule.rule && rule.params) {
        // Rule with parameters
        error = rules[rule.rule] ? rules[rule.rule](...rule.params)(value) : null;
      }
      
      if (error) {
        fieldErrors.push(error);
      }
    }
    
    if (fieldErrors.length > 0) {
      errors.value[fieldName] = fieldErrors[0]; // Show only first error
    } else {
      delete errors.value[fieldName];
    }
    
    return fieldErrors.length === 0;
  };

  const validateForm = (formData, validationSchema) => {
    let isValid = true;
    
    Object.keys(validationSchema).forEach(fieldName => {
      const fieldValue = formData[fieldName];
      const fieldRules = validationSchema[fieldName];
      
      const fieldValid = validate(fieldName, fieldValue, fieldRules);
      if (!fieldValid) {
        isValid = false;
      }
    });
    
    return isValid;
  };

  const setFieldTouched = (fieldName) => {
    touched.value[fieldName] = true;
  };

  const clearErrors = () => {
    errors.value = {};
    touched.value = {};
  };

  const hasErrors = computed(() => {
    return Object.keys(errors.value).length > 0;
  });

  const getFieldError = (fieldName) => {
    return touched.value[fieldName] ? errors.value[fieldName] : null;
  };

  return {
    errors,
    touched,
    validate,
    validateForm,
    setFieldTouched,
    clearErrors,
    hasErrors,
    getFieldError,
    rules
  };
}

// Debounced validation for real-time feedback
export function useDebouncedValidation(validationFn, delay = 300) {
  let timeoutId = null;

  const debouncedValidate = (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      validationFn(...args);
    }, delay);
  };

  return { debouncedValidate };
}