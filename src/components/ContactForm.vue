<template>
  <div class="contact-form-container">
    <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
      <!-- Form Header -->
      <div class="form-header">
        <h3 class="form-title">Let's Work Together</h3>
        <p class="form-description">
          Ready to bring your ideas to life? Fill out the form below and I'll get back to you within 24 hours.
        </p>
      </div>

      <!-- Success Message -->
      <div v-if="showSuccess" class="alert alert-success" role="alert">
        <svg class="alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <div>
          <h4>Message Sent Successfully!</h4>
          <p>{{ successMessage }}</p>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="showError" class="alert alert-error" role="alert">
        <svg class="alert-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h4>Oops! Something went wrong</h4>
          <p>{{ errorMessage }}</p>
        </div>
      </div>

      <!-- Form Fields -->
      <div class="form-grid">
        <!-- Name Field -->
        <div class="form-group">
          <label for="name" class="form-label">
            Full Name *
          </label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            class="form-input"
            :class="{ 'error': getFieldError('name') }"
            placeholder="Enter your full name"
            @blur="setFieldTouched('name')"
            @input="debouncedValidate('name', $event.target.value, validationSchema.name)"
            :disabled="isSubmitting"
            autocomplete="name"
            required
            aria-describedby="name-error"
          />
          <span v-if="getFieldError('name')" id="name-error" class="error-message" role="alert">
            {{ getFieldError('name') }}
          </span>
        </div>

        <!-- Email Field -->
        <div class="form-group">
          <label for="email" class="form-label">
            Email Address *
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="form-input"
            :class="{ 'error': getFieldError('email') }"
            placeholder="your.email@example.com"
            @blur="setFieldTouched('email')"
            @input="debouncedValidate('email', $event.target.value, validationSchema.email)"
            :disabled="isSubmitting"
            autocomplete="email"
            required
            aria-describedby="email-error"
          />
          <span v-if="getFieldError('email')" id="email-error" class="error-message" role="alert">
            {{ getFieldError('email') }}
          </span>
        </div>

        <!-- Phone Field -->
        <div class="form-group">
          <label for="phone" class="form-label">
            Phone Number
          </label>
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            class="form-input"
            :class="{ 'error': getFieldError('phone') }"
            placeholder="+1 (555) 123-4567"
            @blur="setFieldTouched('phone')"
            @input="debouncedValidate('phone', $event.target.value, validationSchema.phone)"
            :disabled="isSubmitting"
            autocomplete="tel"
            aria-describedby="phone-error"
          />
          <span v-if="getFieldError('phone')" id="phone-error" class="error-message" role="alert">
            {{ getFieldError('phone') }}
          </span>
        </div>

        <!-- Company Field -->
        <div class="form-group">
          <label for="company" class="form-label">
            Company/Organization
          </label>
          <input
            id="company"
            v-model="formData.company"
            type="text"
            class="form-input"
            placeholder="Your company name"
            :disabled="isSubmitting"
            autocomplete="organization"
          />
        </div>
      </div>

      <!-- Project Type -->
      <div class="form-group">
        <label for="projectType" class="form-label">
          Project Type *
        </label>
        <select
          id="projectType"
          v-model="formData.projectType"
          class="form-select"
          :class="{ 'error': getFieldError('projectType') }"
          @change="setFieldTouched('projectType')"
          :disabled="isSubmitting"
          required
          aria-describedby="projectType-error"
        >
          <option value="">Select a project type</option>
          <option value="web-development">Web Development</option>
          <option value="mobile-app">Mobile App Development</option>
          <option value="full-stack">Full-Stack Application</option>
          <option value="api-development">API Development</option>
          <option value="consultation">Technical Consultation</option>
          <option value="maintenance">Website Maintenance</option>
          <option value="other">Other</option>
        </select>
        <span v-if="getFieldError('projectType')" id="projectType-error" class="error-message" role="alert">
          {{ getFieldError('projectType') }}
        </span>
      </div>

      <!-- Budget and Timeline -->
      <div class="form-grid">
        <div class="form-group">
          <label for="budget" class="form-label">
            Budget Range
          </label>
          <select
            id="budget"
            v-model="formData.budget"
            class="form-select"
            :disabled="isSubmitting"
          >
            <option value="">Select budget range</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 - $15,000</option>
            <option value="15k-30k">$15,000 - $30,000</option>
            <option value="30k-50k">$30,000 - $50,000</option>
            <option value="over-50k">Over $50,000</option>
            <option value="discuss">Let's Discuss</option>
          </select>
        </div>

        <div class="form-group">
          <label for="timeline" class="form-label">
            Timeline
          </label>
          <select
            id="timeline"
            v-model="formData.timeline"
            class="form-select"
            :disabled="isSubmitting"
          >
            <option value="">Select timeline</option>
            <option value="asap">ASAP</option>
            <option value="1-month">Within 1 month</option>
            <option value="2-3-months">2-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      <!-- Message Field -->
      <div class="form-group">
        <label for="message" class="form-label">
          Project Details *
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          class="form-textarea"
          :class="{ 'error': getFieldError('message') }"
          rows="5"
          placeholder="Tell me about your project, goals, and any specific requirements..."
          @blur="setFieldTouched('message')"
          @input="debouncedValidate('message', $event.target.value, validationSchema.message)"
          :disabled="isSubmitting"
          required
          aria-describedby="message-error"
        ></textarea>
        <div class="character-count">
          <span :class="{ 'text-red-500': formData.message.length > 1000 }">
            {{ formData.message.length }}/1000 characters
          </span>
        </div>
        <span v-if="getFieldError('message')" id="message-error" class="error-message" role="alert">
          {{ getFieldError('message') }}
        </span>
      </div>

      <!-- Privacy Policy Agreement -->
      <div class="form-group">
        <label class="checkbox-label">
          <input
            v-model="formData.agreeToPrivacy"
            type="checkbox"
            class="form-checkbox"
            :disabled="isSubmitting"
            required
          />
          <span class="checkmark"></span>
          I agree to the processing of my personal data for the purpose of responding to my inquiry. *
        </label>
      </div>

      <!-- Submit Button -->
      <div class="form-actions">
        <button
          type="submit"
          class="submit-button"
          :disabled="isSubmitting || hasErrors || !isFormValid"
          :class="{ 'loading': isSubmitting }"
        >
          <span v-if="!isSubmitting">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            Send Message
          </span>
          <span v-else class="flex items-center">
            <svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        </button>
      </div>
    </form>

    <!-- Contact Info Sidebar -->
    <div class="contact-info">
      <h4 class="contact-info-title">Other Ways to Reach Me</h4>
      
      <div class="contact-methods">
        <a href="mailto:semredemssie36@gmail.com" class="contact-method">
          <svg class="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <div>
            <span class="method-title">Email</span>
            <span class="method-value">semredemssie36@gmail.com</span>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/semre-demssie-9728b73a8/" target="_blank" rel="noopener noreferrer" class="contact-method">
          <svg class="contact-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <div>
            <span class="method-title">LinkedIn</span>
            <span class="method-value">Connect with me</span>
          </div>
        </a>

        <a href="https://github.com/santa36264" target="_blank" rel="noopener noreferrer" class="contact-method">
          <svg class="contact-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <div>
            <span class="method-title">GitHub</span>
            <span class="method-value">View my work</span>
          </div>
        </a>
      </div>

      <div class="response-time">
        <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Typical response time: <strong>24 hours</strong></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useFormValidation, useDebouncedValidation } from '../composables/useFormValidation.js';
import { useLoading } from '../composables/useLoading.js';
import { emailService } from '../services/emailService.js';

export default {
  name: 'ContactForm',
  setup() {
    const { 
      errors, 
      validate, 
      validateForm, 
      setFieldTouched, 
      clearErrors, 
      hasErrors, 
      getFieldError 
    } = useFormValidation();

    const { executeWithLoading } = useLoading();

    // Form data
    const formData = ref({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: '',
      agreeToPrivacy: false
    });

    // Form state
    const isSubmitting = ref(false);
    const showSuccess = ref(false);
    const showError = ref(false);
    const successMessage = ref('');
    const errorMessage = ref('');

    // Validation schema
    const validationSchema = {
      name: ['required', { rule: 'minLength', params: [2] }],
      email: ['required', 'email'],
      phone: ['phone'],
      projectType: ['required'],
      message: ['required', { rule: 'minLength', params: [10] }, { rule: 'maxLength', params: [1000] }]
    };

    // Debounced validation
    const { debouncedValidate } = useDebouncedValidation(validate);

    // Form validation
    const isFormValid = computed(() => {
      return formData.value.name && 
             formData.value.email && 
             formData.value.projectType && 
             formData.value.message && 
             formData.value.agreeToPrivacy &&
             !hasErrors.value;
    });

    // Submit handler
    const handleSubmit = async () => {
      // Clear previous messages
      showSuccess.value = false;
      showError.value = false;

      // Validate entire form
      const isValid = validateForm(formData.value, validationSchema);
      
      if (!isValid || !formData.value.agreeToPrivacy) {
        errorMessage.value = 'Please correct the errors above and agree to the privacy policy.';
        showError.value = true;
        return;
      }

      try {
        isSubmitting.value = true;
        
        const result = await emailService.sendEmail(formData.value);
        
        if (result.success) {
          showSuccess.value = true;
          successMessage.value = result.message;
          resetForm();
        } else {
          showError.value = true;
          errorMessage.value = result.message;
        }
      } catch (error) {
        console.error('Form submission error:', error);
        showError.value = true;
        errorMessage.value = 'An unexpected error occurred. Please try again.';
      } finally {
        isSubmitting.value = false;
      }
    };

    // Reset form
    const resetForm = () => {
      formData.value = {
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        agreeToPrivacy: false
      };
      clearErrors();
    };

    onMounted(() => {
      // Focus first input for accessibility
      const firstInput = document.querySelector('#name');
      if (firstInput) {
        firstInput.focus();
      }
    });

    return {
      formData,
      isSubmitting,
      showSuccess,
      showError,
      successMessage,
      errorMessage,
      validationSchema,
      isFormValid,
      hasErrors,
      handleSubmit,
      setFieldTouched,
      getFieldError,
      debouncedValidate
    };
  }
};
</script>

<style scoped>
.contact-form-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .contact-form-container {
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  }
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.dark .contact-form {
  background: #1f2937;
  border-color: #374151;
}

.form-header {
  margin-bottom: 2rem;
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.dark .form-title {
  color: #f9fafb;
}

.form-description {
  color: #6b7280;
  line-height: 1.6;
}

.dark .form-description {
  color: #9ca3af;
}

.alert {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.alert-success {
  background: #ecfdf5;
  border: 1px solid #10b981;
  color: #065f46;
}

.dark .alert-success {
  background: #064e3b;
  border-color: #10b981;
  color: #6ee7b7;
}

.alert-error {
  background: #fef2f2;
  border: 1px solid #ef4444;
  color: #991b1b;
}

.dark .alert-error {
  background: #7f1d1d;
  border-color: #ef4444;
  color: #fca5a5;
}

.alert-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.alert h4 {
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.alert p {
  margin: 0;
  font-size: 0.875rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.dark .form-label {
  color: #d1d5db;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.15s ease;
  background: white;
  color: #1f2937;
}

.dark .form-input,
.dark .form-select,
.dark .form-textarea {
  background: #374151;
  border-color: #4b5563;
  color: #f9fafb;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  ring: 2px;
  ring-color: #3b82f6;
  border-color: #3b82f6;
}

.form-input.error,
.form-select.error,
.form-textarea.error {
  border-color: #ef4444;
  ring-color: #ef4444;
}

.form-input:disabled,
.form-select:disabled,
.form-textarea:disabled {
  background-color: #f9fafb;
  color: #9ca3af;
  cursor: not-allowed;
}

.dark .form-input:disabled,
.dark .form-select:disabled,
.dark .form-textarea:disabled {
  background-color: #2d3748;
  color: #6b7280;
}

.error-message {
  display: block;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.character-count {
  margin-top: 0.25rem;
  text-align: right;
  font-size: 0.75rem;
  color: #6b7280;
}

.dark .character-count {
  color: #9ca3af;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.5;
}

.form-checkbox {
  margin: 0;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

.form-actions {
  margin-top: 2rem;
}

.submit-button {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-button:hover:not(:disabled) {
  background: linear-gradient(135deg, #2563eb, #1e40af);
  transform: translateY(-1px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

.submit-button:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.contact-info {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  height: fit-content;
}

.dark .contact-info {
  background: #1f2937;
  border-color: #374151;
}

.contact-info-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.dark .contact-info-title {
  color: #f9fafb;
}

.contact-methods {
  space-y: 1rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.15s ease;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e5e7eb;
}

.dark .contact-method {
  border-color: #374151;
}

.contact-method:hover {
  background: #f9fafb;
  border-color: #3b82f6;
}

.dark .contact-method:hover {
  background: #374151;
}

.contact-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  color: #3b82f6;
}

.method-title {
  display: block;
  font-weight: 600;
  font-size: 0.875rem;
  color: #1f2937;
}

.dark .method-title {
  color: #f9fafb;
}

.method-value {
  display: block;
  font-size: 0.875rem;
  color: #6b7280;
}

.dark .method-value {
  color: #9ca3af;
}

.response-time {
  margin-top: 2rem;
  padding: 1rem;
  background: #f0fdf4;
  border: 1px solid #22c55e;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #166534;
}

.dark .response-time {
  background: #052e16;
  border-color: #22c55e;
  color: #bbf7d0;
}
</style>