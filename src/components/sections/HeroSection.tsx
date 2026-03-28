import Image from 'next/image';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { brandAssets, brandCopy } from '@/content/brandAssets';

export default function HeroSection() {
  const { hero } = brandCopy;

  return (
    <Section id="hero" className="min-h-screen flex items-center">
      <Container className="flex flex-col items-center text-center gap-12">

        {/* Главный логотип */}
        <div className="w-full max-w-xs md:max-w-sm">
          <Image
            src={brandAssets.primaryLogo}
            alt="GEN RUBIT — основной логотип"
            width={480}
            height={240}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* Метка */}
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-light">
            {hero.label}
          </span>

          {/* Главный заголовок */}
          <h1 className="text-6xl md:text-8xl font-thin tracking-[0.2em] uppercase text-neutral-900">
            {hero.title}
          </h1>

          {/* Короткое описание */}
          <p className="text-sm md:text-base text-neutral-500 max-w-sm md:max-w-md leading-relaxed font-light">
            {hero.subtitle}
          </p>
        </div>

      </Container>
    </Section>
  );
}
