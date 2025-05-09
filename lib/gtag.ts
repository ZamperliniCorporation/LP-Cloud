declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface GtagEvent {
  event_category: string;
  event_label: string;
  location: string;
}

export function trackEarlyAccessClick(location: string): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    const eventData: GtagEvent = {
      event_category: "engagement",
      event_label: location,
      location,
    };
    window.gtag("event", "early_access_click", eventData);
  }
}
