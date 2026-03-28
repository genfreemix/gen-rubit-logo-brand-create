import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import { brandCopy } from '@/content/brandAssets';

export default function StructureExpressionSection() {
  const { structureExpression: s } = brandCopy;

  return (
    <Section id="structure-expression" divider>
      <Container className="flex flex-col gap-14">

        {/* Заголовочный блок — выровнен по левому краю */}
        <div className="flex flex-col gap-4 max-w-xl">
          <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-light">
            {s.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide text-neutral-900">
            {s.title}
          </h2>
          <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-light">
            {s.body}
          </p>
        </div>

        {/* Две колонки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Структура — светлая карточка */}
          <div className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <h3 className="text-lg font-normal tracking-wide text-neutral-900">
              {s.structure.title}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed font-light">
              {s.structure.body}
            </p>
            <ul className="flex flex-col gap-2">
              {s.structure.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-neutral-600 font-light">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-400 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Выражение — тёмная карточка */}
          <div className="flex flex-col gap-6 rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
            <h3 className="text-lg font-normal tracking-wide text-white">
              {s.expression.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              {s.expression.body}
            </p>
            <ul className="flex flex-col gap-2">
              {s.expression.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-neutral-400 font-light">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-500 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </Container>
    </Section>
  );
}
