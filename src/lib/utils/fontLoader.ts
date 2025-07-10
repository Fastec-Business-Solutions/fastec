// Font Loading Optimization Utility

interface FontFace {
  family: string;
  weight: number;
  style: string;
  src: string;
}

// Critical fonts that should be loaded first
const criticalFonts: FontFace[] = [
  {
    family: 'Plus Jakarta Sans',
    weight: 400,
    style: 'normal',
    src: '/src/assets/fonts/plus_jakarta_sans/PlusJakartaSans-Regular.ttf'
  },
  {
    family: 'Plus Jakarta Sans',
    weight: 500,
    style: 'normal',
    src: '/src/assets/fonts/plus_jakarta_sans/PlusJakartaSans-Medium.ttf'
  },
  {
    family: 'Inter',
    weight: 400,
    style: 'normal',
    src: '/src/assets/fonts/inter/Inter-Regular.ttf'
  }
];

// Non-critical fonts that can be loaded after
const nonCriticalFonts: FontFace[] = [
  {
    family: 'Plus Jakarta Sans',
    weight: 600,
    style: 'normal',
    src: '/src/assets/fonts/plus_jakarta_sans/PlusJakartaSans-SemiBold.ttf'
  },
  {
    family: 'Plus Jakarta Sans',
    weight: 700,
    style: 'normal',
    src: '/src/assets/fonts/plus_jakarta_sans/PlusJakartaSans-Bold.ttf'
  },
  {
    family: 'Plus Jakarta Sans',
    weight: 800,
    style: 'normal',
    src: '/src/assets/fonts/plus_jakarta_sans/PlusJakartaSans-ExtraBold.ttf'
  },
  {
    family: 'Inter',
    weight: 600,
    style: 'normal',
    src: '/src/assets/fonts/inter/Inter-SemiBold.ttf'
  },
  {
    family: 'Inter',
    weight: 700,
    style: 'normal',
    src: '/src/assets/fonts/inter/Inter-Bold.ttf'
  }
];

// Load critical fonts immediately
export const loadCriticalFonts = (): Promise<void[]> => {
  const promises = criticalFonts.map(font => {
    return new Promise<void>((resolve) => {
      const fontFace = new FontFace(font.family, `url(${font.src})`, {
        weight: font.weight.toString(),
        style: font.style,
        display: 'swap'
      });

      fontFace.load().then(() => {
        document.fonts.add(fontFace);
        resolve();
      }).catch(() => {
        // Fallback to system fonts if loading fails
        resolve();
      });
    });
  });

  return Promise.all(promises);
};

// Load non-critical fonts after page load
export const loadNonCriticalFonts = (): void => {
  // Use requestIdleCallback for non-critical fonts
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      nonCriticalFonts.forEach(font => {
        const fontFace = new FontFace(font.family, `url(${font.src})`, {
          weight: font.weight.toString(),
          style: font.style,
          display: 'swap'
        });

        fontFace.load().then(() => {
          document.fonts.add(fontFace);
        }).catch(() => {
          // Silently fail for non-critical fonts
        });
      });
    });
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(() => {
      nonCriticalFonts.forEach(font => {
        const fontFace = new FontFace(font.family, `url(${font.src})`, {
          weight: font.weight.toString(),
          style: font.style,
          display: 'swap'
        });

        fontFace.load().then(() => {
          document.fonts.add(fontFace);
        }).catch(() => {
          // Silently fail for non-critical fonts
        });
      });
    }, 1000);
  }
};

// Check if fonts are loaded
export const areFontsLoaded = (): boolean => {
  return document.fonts.check('1em Plus Jakarta Sans') && 
         document.fonts.check('1em Inter');
};

// Wait for fonts to be ready
export const waitForFonts = (): Promise<void> => {
  return new Promise((resolve) => {
    if (areFontsLoaded()) {
      resolve();
    } else {
      document.fonts.ready.then(() => {
        resolve();
      });
    }
  });
};

// Initialize font loading
export const initializeFonts = async (): Promise<void> => {
  try {
    // Load critical fonts first
    await loadCriticalFonts();
    
    // Load non-critical fonts after
    loadNonCriticalFonts();
  } catch (error) {
    console.warn('Font loading failed:', error);
  }
}; 