import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GallerySection } from "@/components/gallery-section"
import { RotatingCarousel } from "@/components/rotating-carousel"
import { BlogSection } from "@/components/blog-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9f5]">
      <Header />
      <HeroSection />
      <GallerySection />
      <RotatingCarousel />
      <BlogSection />
    </main>
  )
}
