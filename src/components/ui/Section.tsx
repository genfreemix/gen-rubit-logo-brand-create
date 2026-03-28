import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  divider?: boolean; // тонкая линия-разделитель сверху (кроме Hero)
}

// Реюзабельная обёртка секции — вертикальный ритм + опциональный разделитель
export default function Section({
  id,
  children,
  className = '',
  divider = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${divider ? 'border-t border-neutral-100' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
