"use client";

import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export const useInstallPrompt = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    console.log('🔧 useInstallPrompt hook initialized');
    
    // Check if app is already installed
    if (typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches) {
      console.log('📱 App is already installed (standalone mode detected)');
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      console.log('🎯 beforeinstallprompt event fired!', e);
      console.log('📋 Available platforms:', e.platforms);
      
      e.preventDefault();
      setInstallPrompt(e);
      setIsInstallable(true);
      
      console.log('✅ Install prompt saved and isInstallable set to true');
    };

    const handleAppInstalled = () => {
      console.log('🎉 appinstalled event fired - app was successfully installed');
      setIsInstalled(true);
      setIsInstallable(false);
      setInstallPrompt(null);
    };

    if (typeof window !== 'undefined') {
      console.log('🌐 Adding event listeners for install prompt');
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.addEventListener('appinstalled', handleAppInstalled);
      
      // Check if beforeinstallprompt has already fired
      console.log('🔍 Checking if install prompt is available...');
    } else {
      console.log('⚠️ Window is undefined (SSR)');
    }

    return () => {
      if (typeof window !== 'undefined') {
        console.log('🧹 Cleaning up install prompt event listeners');
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.removeEventListener('appinstalled', handleAppInstalled);
      }
    };
  }, []);

  const promptInstall = async () => {
    console.log('🚀 promptInstall function called');
    console.log('📦 Current installPrompt:', installPrompt);
    
    if (!installPrompt) {
      console.log('❌ No install prompt available');
      return false;
    }

    try {
      console.log('📢 Calling installPrompt.prompt()...');
      await installPrompt.prompt();
      
      console.log('⏳ Waiting for user choice...');
      const { outcome } = await installPrompt.userChoice;
      
      console.log('👤 User choice outcome:', outcome);

      if (outcome === 'accepted') {
        console.log('✅ User accepted the install prompt');
        setIsInstallable(false);
        setInstallPrompt(null);
        return true;
      } else {
        console.log('❌ User dismissed the install prompt');
        return false;
      }
    } catch (error) {
      console.error('💥 Error in promptInstall:', error);
      throw error;
    }
  };

  // Log current state whenever it changes
  useEffect(() => {
    console.log('📊 Install state changed:', { isInstallable, isInstalled, hasPrompt: !!installPrompt });
  }, [isInstallable, isInstalled, installPrompt]);

  return {
    isInstallable,
    isInstalled,
    promptInstall
  };
};
