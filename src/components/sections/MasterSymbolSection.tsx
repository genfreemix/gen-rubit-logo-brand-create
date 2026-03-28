import Image from 'next/image';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { brandAssets, brandCopy } from '@/content/brandAssets';

export default function MasterSymbolSection() {
  const { masterSymbol } = brandCopy;

  return (
    <Section id="master-symbol" divider>
      <Container className="flex flex-col md:flex-row items-center gap-16 md:gap-20">

        {/* Символ */}
        <div className="w-48 md:w-64 shrink-0">
          <Image
            src={brandAssets.masterSymbol}
            alt="GEN RUBIT — мастер-символ, спираль"
            width={320}
            height={320}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Текстовый блок */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-light">
            {masterSymbol.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-neutral-900">
            {masterSymbol.title}
          </h2>
          <p className="text-sm md:text-base text-neutral-500 max-w-md leading-relaxed font-light">
            {masterSymbol.body}
          </p>
        </div>

      </Container>
    </Section>
  );
}
