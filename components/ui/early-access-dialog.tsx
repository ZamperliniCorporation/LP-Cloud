"use client";

import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";

interface EarlyAccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  forceLightMode?: boolean;
}

export function EarlyAccessDialog({ isOpen, onClose, forceLightMode }: EarlyAccessDialogProps) {
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
      <DialogContent
        className={`sm:max-w-[500px] ${forceLightMode ? "bg-white text-gray-900" : ""}`}
        style={forceLightMode ? { backgroundColor: "#fff", color: "#222" } : {}}
      >
        <DialogHeader>
          <DialogTitle className={`text-2xl font-bold ${forceLightMode ? "text-hywork-blue" : "text-hywork-blue dark:text-blue-300"}`}>
            {t("earlyAccess.title")}
          </DialogTitle>
          <DialogDescription className={`mt-2 ${forceLightMode ? "text-gray-600" : "text-gray-600 dark:text-gray-400"}`}>
            {t("earlyAccess.subtitle")}
          </DialogDescription>
        </DialogHeader>
        <div id="hubspot-form-container" className="mt-4 max-h-[60vh] overflow-y-auto pr-2" />
      </DialogContent>
    </Dialog>
  );
}
