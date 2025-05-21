"use client";
import MainSection from "@/components/MainSection";
import IntroSection from "@/components/IntroSection";
import GallerySection from "@/components/GallerySection";
import CalendarSection from "@/components/CalendarSection";
import MapSection from "@/components/MapSection";
import AccountSection from "@/components/AccountSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-15">
      <MainSection />
      <IntroSection />
      <GallerySection />
      <CalendarSection />
      <MapSection />
      <AccountSection />
    </div>
  );
}
