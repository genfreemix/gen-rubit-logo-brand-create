import Image from 'next/image';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { brandAssets, brandCopy } from '@/content/brandAssets';

export default function SubBrandsSection() {
  const { subbrands } = brandCopy;

  return (
    <Section id="subbrands" divider>
      <Container className="flex flex-col gap-16">

        {/* Заголовочный блок */}
        <div className="flex flex-col gap-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-light">
            {subbrands.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-neutral-900">
            {subbrands.title}
          </h2>
          <p className="text-sm md:text-base text-neutral-500 max-w-lg leading-relaxed font-light">
            {subbrands.body}
          </p>
        </div>

        {/* Сетка суббрендов */}
        <div className="w-full">
          <Image
            src={brandAssets.subbrands}
            alt="GEN RUBIT — суббренды: Design, Marketing, Records, Publishing"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

      </Container>
    </Section>
  );
}
