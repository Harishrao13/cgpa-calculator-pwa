"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";
import { useState } from "react";

export default function InstallButton() { 
  const { isInstallable, isInstalled, promptInstall } = useInstallPrompt();
  const [isInstalling, setIsInstalling] = useState(false);

  const handleInstall = async () => {
    setIsInstalling(true);
    
    try {
      await promptInstall();
    } catch (error) {
      console.error('Error installing app:', error);
    } finally {
      setIsInstalling(false);
    }
  };

  if (isInstalled) {
    return null;
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
      className="flex items-center space-x-1 bg-white  text-black text-xs"
    >
      <Download className="w-3 h-3" />
      <span>{isInstalling ? 'Installing...' : 'Install'}</span>
    </Button>
  );
}
