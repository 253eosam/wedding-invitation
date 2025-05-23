"use client";
import MainSection from "@/components/MainSection";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-15">
      <MainSection />
      <IntroSection />
    </div>
  );
}
