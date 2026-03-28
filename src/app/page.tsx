import HeroSection from '@/components/sections/HeroSection';
import StructureExpressionSection from '@/components/sections/StructureExpressionSection';
import SubBrandsSection from '@/components/sections/SubBrandsSection';
import MasterSymbolSection from '@/components/sections/MasterSymbolSection';

// ─────────────────────────────────────────────────────────────────
// Чтобы добавить новую секцию:
// 1. Создай файл в src/components/sections/NazvanieSection.tsx
// 2. Импортируй его выше
// 3. Вставь тег <NazvanieSection /> в нужное место ниже
// ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>

      <HeroSection />

      {/* ↓ МЕСТО ДЛЯ: Philosophy / Манифест */}

      <StructureExpressionSection />

      <SubBrandsSection />

      {/* ↓ МЕСТО ДЛЯ: Logo System / Логосистема */}

      <MasterSymbolSection />

      {/* ↓ МЕСТО ДЛЯ: Graphic Language / Типографика / Цвет / Правила / Применение */}

    </main>
  );
}
