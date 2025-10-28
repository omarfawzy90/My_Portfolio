/**
 * Analytics utility for tracking user interactions
 * Supports Google Analytics, custom analytics, and fallback tracking
 */

// Track custom events
export const trackEvent = (eventName, eventData = {}) => {
  // Google Analytics 4 (gtag)
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, {
      ...eventData,
      timestamp: new Date().toISOString(),
    });
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Analytics Event:', eventName, eventData);
  }

  // Custom tracking (could send to your own backend)
  sendToCustomAnalytics(eventName, eventData);
};

// Track page views
export const trackPageView = (pageName, additionalData = {}) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...additionalData,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

// Track project views
export const trackProjectView = (projectName, projectUrl) => {
  trackEvent('project_view', {
    project_name: projectName,
    project_url: projectUrl,
  });
};

// Track downloads (resume, files, etc.)
export const trackDownload = (fileName, fileType) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
  });
};

// Track form submissions
export const trackFormSubmission = (formName, formData = {}) => {
  trackEvent('form_submission', {
    form_name: formName,
    ...formData,
  });
};

// Track social media clicks
export const trackSocialClick = (platform, action) => {
  trackEvent('social_click', {
    social_platform: platform,
    social_action: action,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    scroll_percentage: depth,
  });
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds) => {
  trackEvent('time_on_page', {
    duration_seconds: timeInSeconds,
  });
};

// Custom analytics backend (optional)
const sendToCustomAnalytics = async (eventName, eventData) => {
  // Only send in production
  if (process.env.NODE_ENV !== 'production') return;

  try {
    // Example: Send to your own analytics endpoint
    // await fetch('/api/analytics', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     event: eventName,
    //     data: eventData,
    //     timestamp: new Date().toISOString(),
    //     userAgent: navigator.userAgent,
    //   }),
    // });
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

// Initialize scroll tracking
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  let maxScroll = 0;
  const milestones = [25, 50, 75, 100];
  const trackedMilestones = new Set();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    const totalScroll = documentHeight - windowHeight;
    const currentScroll = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
    
    maxScroll = Math.max(maxScroll, currentScroll);

    milestones.forEach(milestone => {
      if (maxScroll >= milestone && !trackedMilestones.has(milestone)) {
        trackedMilestones.add(milestone);
        trackScrollDepth(milestone);
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};

// Initialize time tracking
export const initTimeTracking = () => {
  if (typeof window === 'undefined') return;

  const startTime = Date.now();
  const intervals = [30, 60, 120, 300]; // 30s, 1m, 2m, 5m
  const trackedIntervals = new Set();

  const checkInterval = setInterval(() => {
    const timeOnPage = Math.floor((Date.now() - startTime) / 1000);

    intervals.forEach(interval => {
      if (timeOnPage >= interval && !trackedIntervals.has(interval)) {
        trackedIntervals.add(interval);
        trackTimeOnPage(interval);
      }
    });
  }, 10000); // Check every 10 seconds

  // Track final time on page when leaving
  const handleUnload = () => {
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    trackTimeOnPage(totalTime);
  };

  window.addEventListener('beforeunload', handleUnload);

  return () => {
    clearInterval(checkInterval);
    window.removeEventListener('beforeunload', handleUnload);
  };
};

// Usage examples:
/*
import { trackEvent, trackButtonClick, trackProjectView, trackDownload } from './utils/analytics';

// Track button click
<button onClick={() => trackButtonClick('Contact Me', 'Footer')}>
  Contact
</button>

// Track project view
<a 
  href={project.github} 
  onClick={() => trackProjectView(project.title, project.github)}
>
  View Project
</a>

// Track resume download
<button onClick={() => {
  trackDownload('Omar_Fawzy_Resume.pdf', 'pdf');
  handleResumeDownload();
}}>
  Download Resume
</button>

// Initialize tracking in App.jsx
useEffect(() => {
  const cleanupScroll = initScrollTracking();
  const cleanupTime = initTimeTracking();
  
  return () => {
    cleanupScroll?.();
    cleanupTime?.();
  };
}, []);
*/

export default {
  trackEvent,
  trackPageView,
  trackButtonClick,
  trackProjectView,
  trackDownload,
  trackFormSubmission,
  trackSocialClick,
  trackScrollDepth,
  trackTimeOnPage,
  initScrollTracking,
  initTimeTracking,
};
