'use client'
import HomeHeart from "@/components/HomeHeart";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 sm:p-12 bg-rose-200">
      <HomeHeart/>
    </main>
  );
}
