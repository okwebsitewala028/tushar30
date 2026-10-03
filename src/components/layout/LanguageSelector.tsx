'use client';

import { useEffect } from 'react';

export default function LanguageSelector() {
  useEffect(() => {
    // Prevent multiple injections
    if (document.getElementById('google-translate-script')) return;

    const addScript = document.createElement('script');
    addScript.id = 'google-translate-script';
    addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    addScript.async = true;
    addScript.onerror = (error) => {
      console.error('Failed to load Google Translate script:', error);
    };
    document.body.appendChild(addScript);

    (window as any).googleTranslateElementInit = () => {
      try {
        if ((window as any).google?.translate?.TranslateElement) {
          new (window as any).google.translate.TranslateElement(
            { 
              pageLanguage: 'en',
              layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            },
            'google_translate_element'
          );
        }
      } catch (error) {
        console.error('Error initializing Google Translate element:', error);
      }
    };
  }, []);

  return (
    <div className="language-selector-wrapper">
      <div id="google_translate_element" className="min-h-[30px]" />
    </div>
  );
}
