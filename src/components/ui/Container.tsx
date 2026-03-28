import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// Базовый контейнер — ограничивает ширину и добавляет горизонтальный паддинг
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-5xl mx-auto px-6 md:px-12 lg:px-16 w-full ${className}`}>
      {children}
    </div>
  );
}
