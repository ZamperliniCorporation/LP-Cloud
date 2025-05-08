"use client";

import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";

interface EarlyAccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EarlyAccessDialog({ isOpen, onClose }: EarlyAccessDialogProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      // Carregar o script do HubSpot
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // @ts-ignore
        if (window.hbspt) {
          // @ts-ignore
          window.hbspt.forms.create({
            portalId: "47486565",
            formId: "b98537d8-f84c-4841-bc3b-9e2a77470823",
            region: "na1",
            target: "#hubspot-form-container",
          });
        }
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-hywork-blue dark:text-blue-300">{t("earlyAccess.title")}</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-400 mt-2">{t("earlyAccess.subtitle")}</DialogDescription>
        </DialogHeader>
        <div id="hubspot-form-container" className="mt-4" />
      </DialogContent>
    </Dialog>
  );
}
