<template>
  <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 w-full overflow-hidden">
    <div class="max-w-4xl mx-auto w-full">
      <div class="text-center mb-8 sm:mb-12" data-aos="fade-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Professional Resume
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg mb-6">
          Download my comprehensive resume showcasing experience, skills, and achievements
        </p>
        
        <!-- Download Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            @click="downloadPDF"
            :disabled="isGenerating"
            class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg v-if="!isGenerating" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <div v-else class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            {{ isGenerating ? 'Generating PDF...' : 'Download PDF Resume' }}
          </button>
          
          <button
            @click="viewOnline"
            class="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            View Online
          </button>
        </div>
      </div>

      <!-- Resume Preview -->
      <div 
        v-if="showPreview" 
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div id="resume-content" class="p-8 sm:p-12">
          <!-- Header -->
          <div class="text-center border-b border-gray-200 dark:border-gray-700 pb-8 mb-8">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {{ resumeData.personalInfo.name }}
            </h1>
            <p class="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
              {{ resumeData.personalInfo.title }}
            </p>
            <div class="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                {{ resumeData.personalInfo.email }}
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {{ resumeData.personalInfo.location }}
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
                {{ resumeData.personalInfo.website }}
              </span>
            </div>
          </div>

          <!-- Professional Summary -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div class="w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded"></div>
              Professional Summary
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              {{ resumeData.summary }}
            </p>
          </div>

          <!-- Experience -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <div class="w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded"></div>
              Professional Experience
            </h2>
            <div class="space-y-6">
              <div 
                v-for="job in resumeData.experience" 
                :key="job.company"
                class="border-l-2 border-gray-200 dark:border-gray-600 pl-6 relative"
              >
                <div class="absolute w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full -left-2 top-1"></div>
                <div class="mb-2">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ job.title }}</h3>
                  <p class="text-blue-600 dark:text-blue-400 font-medium">{{ job.company }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ job.period }} • {{ job.location }}</p>
                </div>
                <ul class="text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                  <li v-for="responsibility in job.responsibilities" :key="responsibility" class="flex items-start gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    {{ responsibility }}
                  </li>
                </ul>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in job.technologies" 
                    :key="tech"
                    class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <div class="w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded"></div>
              Technical Skills
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(skills, category) in resumeData.skills" :key="category" class="space-y-2">
                <h3 class="font-semibold text-gray-900 dark:text-white capitalize">{{ category.replace(/([A-Z])/g, ' $1') }}</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="skill in skills" 
                    :key="skill"
                    class="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-full"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <div class="w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded"></div>
              Education
            </h2>
            <div v-for="edu in resumeData.education" :key="edu.institution" class="mb-4">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ edu.degree }}</h3>
              <p class="text-blue-600 dark:text-blue-400 font-medium">{{ edu.institution }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">{{ edu.period }} • {{ edu.location }} • GPA: {{ edu.gpa }}</p>
              <ul class="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                <li v-for="achievement in edu.achievements" :key="achievement" class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Key Projects -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <div class="w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded"></div>
              Key Projects
            </h2>
            <div class="space-y-4">
              <div v-for="project in resumeData.projects" :key="project.name" class="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">{{ project.name }}</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm mb-3">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                  >
                    {{ tech }}
                  </span>
                </div>
                <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li v-for="highlight in project.highlights" :key="highlight" class="flex items-start gap-2">
                    <span class="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    {{ highlight }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'
import { resumeData } from '../data/resumeData.js'

export default {
  name: 'Resume',
  setup() {
    const showPreview = ref(true)
    const isGenerating = ref(false)

    const downloadPDF = async () => {
      isGenerating.value = true
      
      try {
        // Create a simplified HTML version for PDF generation
        const resumeHTML = generateResumeHTML()
        
        // Create a new window for PDF generation
        const printWindow = window.open('', '_blank')
        printWindow.document.write(resumeHTML)
        printWindow.document.close()
        
        // Wait for content to load then trigger print
        setTimeout(() => {
          printWindow.print()
          printWindow.close()
        }, 500)
        
      } catch (error) {
        console.error('Error generating PDF:', error)
        alert('Error generating PDF. Please try again.')
      } finally {
        isGenerating.value = false
      }
    }

    const viewOnline = () => {
      showPreview.value = !showPreview.value
    }

    const generateResumeHTML = () => {
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>${resumeData.personalInfo.name} - Resume</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; background: white; }
            .container { max-width: 800px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
            .header h1 { font-size: 32px; color: #1f2937; margin-bottom: 5px; }
            .header .title { font-size: 18px; color: #2563eb; margin-bottom: 15px; }
            .header .contact { font-size: 14px; color: #666; }
            .section { margin-bottom: 30px; }
            .section-title { font-size: 20px; color: #1f2937; margin-bottom: 15px; border-left: 4px solid #2563eb; padding-left: 15px; }
            .job { margin-bottom: 20px; }
            .job h3 { font-size: 16px; color: #1f2937; }
            .job .company { color: #2563eb; font-weight: 600; }
            .job .period { color: #666; font-size: 14px; margin-bottom: 10px; }
            .job ul { margin-left: 20px; }
            .job li { margin-bottom: 5px; font-size: 14px; }
            .skills { display: flex; flex-wrap: wrap; gap: 8px; }
            .skill { background: #f3f4f6; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
            .project { border: 1px solid #e5e7eb; padding: 15px; border-radius: 8px; margin-bottom: 15px; }
            .project h3 { color: #1f2937; margin-bottom: 5px; }
            .project .desc { font-size: 14px; color: #666; margin-bottom: 10px; }
            @media print {
              body { -webkit-print-color-adjust: exact; }
              .container { max-width: none; padding: 0; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${resumeData.personalInfo.name}</h1>
              <div class="title">${resumeData.personalInfo.title}</div>
              <div class="contact">
                ${resumeData.personalInfo.email} • ${resumeData.personalInfo.location} • ${resumeData.personalInfo.website}
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Professional Summary</h2>
              <p>${resumeData.summary}</p>
            </div>

            <div class="section">
              <h2 class="section-title">Professional Experience</h2>
              ${resumeData.experience.map(job => `
                <div class="job">
                  <h3>${job.title}</h3>
                  <div class="company">${job.company}</div>
                  <div class="period">${job.period} • ${job.location}</div>
                  <ul>
                    ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>

            <div class="section">
              <h2 class="section-title">Technical Skills</h2>
              ${Object.entries(resumeData.skills).map(([category, skills]) => `
                <div style="margin-bottom: 15px;">
                  <h3 style="font-size: 14px; margin-bottom: 8px; text-transform: capitalize;">${category.replace(/([A-Z])/g, ' $1')}</h3>
                  <div class="skills">
                    ${skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="section">
              <h2 class="section-title">Education</h2>
              ${resumeData.education.map(edu => `
                <div>
                  <h3>${edu.degree}</h3>
                  <div class="company">${edu.institution}</div>
                  <div class="period">${edu.period} • ${edu.location} • GPA: ${edu.gpa}</div>
                </div>
              `).join('')}
            </div>

            <div class="section">
              <h2 class="section-title">Key Projects</h2>
              ${resumeData.projects.map(project => `
                <div class="project">
                  <h3>${project.name}</h3>
                  <div class="desc">${project.description}</div>
                  <div class="skills">
                    ${project.technologies.map(tech => `<span class="skill">${tech}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </body>
        </html>
      `
    }

    return {
      resumeData,
      showPreview,
      isGenerating,
      downloadPDF,
      viewOnline
    }
  }
}
</script>

<style scoped>
@media print {
  .no-print {
    display: none !important;
  }
}
</style>