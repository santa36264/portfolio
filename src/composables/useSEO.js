import { onMounted, watch } from 'vue';

export function useSEO() {
  const updateTitle = (title) => {
    document.title = title;
  };

  const updateMeta = (name, content, property = false) => {
    const attribute = property ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  };

  const updateCanonical = (url) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    
    canonical.setAttribute('href', url);
  };

  const updateStructuredData = (data) => {
    let script = document.querySelector('script[type="application/ld+json"]');
    
    if (script) {
      script.textContent = JSON.stringify(data);
    } else {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    }
  };

  const setPageSEO = ({
    title = 'Semre Demssie - Full-Stack Developer',
    description = 'Experienced Full-Stack Developer specializing in Vue.js, Django, Node.js, Laravel, and Flutter.',
    keywords = 'Full-Stack Developer, Flutter Developer, Vue.js, Django, Node.js, Laravel, Mobile App Development',
    url = 'https://semredemssie.dev',
    image = 'https://semredemssie.dev/profile.jpg',
    type = 'website',
    structuredData = null
  } = {}) => {
    // Update title
    updateTitle(title);
    
    // Update meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    
    // Update Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', url, true);
    updateMeta('og:image', image, true);
    updateMeta('og:type', type, true);
    
    // Update Twitter tags
    updateMeta('twitter:title', title, true);
    updateMeta('twitter:description', description, true);
    updateMeta('twitter:url', url, true);
    updateMeta('twitter:image', image, true);
    
    // Update canonical URL
    updateCanonical(url);
    
    // Update structured data
    if (structuredData) {
      updateStructuredData(structuredData);
    }
  };

  const generateBreadcrumbSchema = (breadcrumbs) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': item.url
      }))
    };
  };

  const generateArticleSchema = (article) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': article.title,
      'description': article.description,
      'author': {
        '@type': 'Person',
        'name': 'Semre Demssie',
        'url': 'https://semredemssie.dev'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Semre Demssie',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://semredemssie.dev/logo.png'
        }
      },
      'datePublished': article.publishDate,
      'dateModified': article.modifyDate || article.publishDate,
      'image': article.image,
      'url': article.url
    };
  };

  const generateProjectSchema = (project) => {
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': project.title,
      'description': project.description,
      'author': {
        '@type': 'Person',
        'name': 'Semre Demssie',
        'url': 'https://semredemssie.dev'
      },
      'programmingLanguage': project.techStack,
      'codeRepository': project.github,
      'applicationCategory': 'WebApplication',
      'operatingSystem': 'Cross-platform',
      'screenshot': project.image,
      'url': project.demo
    };
  };

  // Performance optimized meta updates
  const batchUpdateMeta = (updates) => {
    // Use requestIdleCallback for non-critical meta updates
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        updates.forEach(update => {
          if (update.property) {
            updateMeta(update.name, update.content, true);
          } else {
            updateMeta(update.name, update.content);
          }
        });
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        updates.forEach(update => {
          if (update.property) {
            updateMeta(update.name, update.content, true);
          } else {
            updateMeta(update.name, update.content);
          }
        });
      }, 0);
    }
  };

  return {
    setPageSEO,
    updateTitle,
    updateMeta,
    updateCanonical,
    updateStructuredData,
    generateBreadcrumbSchema,
    generateArticleSchema,
    generateProjectSchema,
    batchUpdateMeta
  };
}