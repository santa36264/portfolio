import { ref, onMounted, onUnmounted } from 'vue';

export function useAccessibility() {
  const isReducedMotion = ref(false);
  const isHighContrast = ref(false);
  const fontSize = ref('normal');

  const updatePreferences = () => {
    // Check for reduced motion preference
    isReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for high contrast preference
    isHighContrast.value = window.matchMedia('(prefers-contrast: high)').matches;
    
    // Check for font size preferences
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    fontSize.value = rootFontSize > 16 ? 'large' : 'normal';
  };

  // Focus management
  const trapFocus = (element) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
      
      // Close on Escape
      if (e.key === 'Escape') {
        element.dispatchEvent(new CustomEvent('close-modal'));
      }
    };

    element.addEventListener('keydown', handleTabKey);
    firstElement.focus();

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  };

  // Announce to screen readers
  const announceToScreenReader = (message, priority = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Skip links functionality
  const addSkipLinks = () => {
    const skipLinks = document.createElement('div');
    skipLinks.className = 'skip-links';
    skipLinks.innerHTML = `
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <a href="#navigation" class="skip-link">Skip to navigation</a>
    `;
    
    document.body.insertBefore(skipLinks, document.body.firstChild);
  };

  // Keyboard navigation helpers
  const handleArrowNavigation = (items, currentIndex, direction) => {
    let newIndex;
    
    switch (direction) {
      case 'up':
      case 'left':
        newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        break;
      case 'down':
      case 'right':
        newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'home':
        newIndex = 0;
        break;
      case 'end':
        newIndex = items.length - 1;
        break;
      default:
        return currentIndex;
    }
    
    return newIndex;
  };

  // Color contrast checker
  const checkColorContrast = (foreground, background) => {
    // Simple contrast ratio calculation
    const getLuminance = (color) => {
      const rgb = parseInt(color.replace('#', ''), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      
      const sRGB = [r, g, b].map(c => {
        c = c / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      });
      
      return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
    };
    
    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    
    return {
      ratio,
      isAACompliant: ratio >= 4.5,
      isAAACompliant: ratio >= 7
    };
  };

  onMounted(() => {
    updatePreferences();
    addSkipLinks();
    
    // Listen for changes in user preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    motionQuery.addListener(updatePreferences);
    contrastQuery.addListener(updatePreferences);
  });

  return {
    isReducedMotion,
    isHighContrast,
    fontSize,
    trapFocus,
    announceToScreenReader,
    handleArrowNavigation,
    checkColorContrast,
    updatePreferences
  };
}

// Focus visible utility
export function useFocusVisible() {
  const isKeyboardUser = ref(false);

  const handleMouseDown = () => {
    isKeyboardUser.value = false;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      isKeyboardUser.value = true;
    }
  };

  onMounted(() => {
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);
  });

  onUnmounted(() => {
    document.removeEventListener('mousedown', handleMouseDown);
    document.removeEventListener('keydown', handleKeyDown);
  });

  return {
    isKeyboardUser
  };
}

// Screen reader utilities
export function useScreenReader() {
  const announcements = ref([]);

  const announce = (message, priority = 'polite') => {
    const id = Date.now();
    announcements.value.push({ id, message, priority });
    
    setTimeout(() => {
      announcements.value = announcements.value.filter(a => a.id !== id);
    }, 1000);
  };

  const clear = () => {
    announcements.value = [];
  };

  return {
    announcements,
    announce,
    clear
  };
}