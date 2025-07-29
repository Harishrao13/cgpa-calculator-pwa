"use client";

import { Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";
import { useState } from "react";

export default function InstallButton() { 
  const { isInstallable, isInstalled, promptInstall } = useInstallPrompt();
  const [isInstalling, setIsInstalling] = useState(false);


  const handleInstall = async () => {
    console.log('🔄 Install button clicked');
    console.log('📊 Current state:', { isInstallable, isInstalled, isInstalling });
    
    setIsInstalling(true);
    
    try {
      console.log('🚀 Attempting to prompt install...');
      const result = await promptInstall();
      console.log('✅ Install prompt result:', result);
      
      if (result) {
        console.log('🎉 User accepted installation');
      } else {
        console.log('❌ User dismissed installation or prompt failed');
      }
    } catch (error) {
      console.error('💥 Error installing app:', error);
    } finally {
      console.log('🔚 Install process finished');
      setIsInstalling(false);
    }
  };

  if (isInstalled) {
    return (
      <Button variant="outline" disabled className="flex items-center space-x-1 text-xs">
        <Check className="w-3 h-3" />
        <span>Installed</span>
      </Button>
    );
  }

  if (!isInstallable) {
    return (
      <Button 
        variant="outline" 
        disabled 
        className="flex items-center space-x-1 text-xs"
      >
        <Download className="w-3 h-3" />
        <span>Install</span>
      </Button>
    );
  }

  return (
    <Button 
      onClick={handleInstall}
      disabled={isInstalling}
      className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white text-xs"
    >
      <Download className="w-3 h-3" />
      <span>{isInstalling ? 'Installing...' : 'Install'}</span>
    </Button>
  );
}
