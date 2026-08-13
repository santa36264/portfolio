// Email service for handling contact form submissions
class EmailService {
  constructor() {
    // In a real application, these would come from environment variables
    this.config = {
      // Using EmailJS for client-side email sending (free tier)
      emailjsServiceId: 'service_portfolio',
      emailjsTemplateId: 'template_contact',
      emailjsPublicKey: 'your_emailjs_public_key',
      
      // Alternative: Formspree (form handling service)
      formspreeEndpoint: 'https://formspree.io/f/your_form_id',
      
      // Alternative: Netlify Forms (if hosting on Netlify)
      netlifyForms: true
    };
  }

  // Method 1: EmailJS (Client-side email service)
  async sendEmailWithEmailJS(formData) {
    try {
      // Load EmailJS SDK dynamically
      if (!window.emailjs) {
        await this.loadEmailJSSDK();
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        project_type: formData.projectType || 'General Inquiry',
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        message: formData.message,
        to_email: 'semredemssie36@gmail.com'
      };

      const response = await window.emailjs.send(
        this.config.emailjsServiceId,
        this.config.emailjsTemplateId,
        templateParams,
        this.config.emailjsPublicKey
      );

      return {
        success: true,
        message: 'Email sent successfully!',
        response
      };
    } catch (error) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again.',
        error
      };
    }
  }

  // Method 2: Formspree (Form handling service)
  async sendEmailWithFormspree(formData) {
    try {
      const response = await fetch(this.config.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message
        })
      });

      if (response.ok) {
        return {
          success: true,
          message: 'Message sent successfully! I\'ll get back to you soon.'
        };
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Formspree Error:', error);
      return {
        success: false,
        message: 'Failed to send message. Please try again or contact me directly.'
      };
    }
  }

  // Method 3: Mock email service (for demo purposes)
  async sendEmailMock(formData) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate success/failure (90% success rate)
    const success = Math.random() > 0.1;
    
    if (success) {
      return {
        success: true,
        message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
      };
    } else {
      return {
        success: false,
        message: 'Failed to send message. Please try again or contact me directly at semredemssie36@gmail.com.'
      };
    }
  }

  // Main send method that tries different services
  async sendEmail(formData) {
    console.log('Sending email with form data:', formData);
    
    // For demo purposes, use mock service
    // In production, uncomment the service you want to use:
    
    // return await this.sendEmailWithEmailJS(formData);
    // return await this.sendEmailWithFormspree(formData);
    return await this.sendEmailMock(formData);
  }

  // Load EmailJS SDK dynamically
  async loadEmailJSSDK() {
    return new Promise((resolve, reject) => {
      if (window.emailjs) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.onload = () => {
        window.emailjs.init(this.config.emailjsPublicKey);
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Validate email configuration
  isConfigured() {
    // Check if any email service is properly configured
    return this.config.emailjsPublicKey !== 'your_emailjs_public_key' ||
           this.config.formspreeEndpoint !== 'https://formspree.io/f/your_form_id' ||
           this.config.netlifyForms;
  }
}

export const emailService = new EmailService();