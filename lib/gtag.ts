declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackEarlyAccessClick(location: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "early_access_click", {
      event_category: "engagement",
      event_label: location,
      location,
    });
  }
}
