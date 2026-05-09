import { useMemo, useState } from 'react';
import HeroSection from './components/HeroSection';
import TeamSelector from './components/TeamSelector';
import DirectionSelector from './components/DirectionSelector';
import ProductBattleCard from './components/ProductBattleCard';
import MyBattleCard from './components/MyBattleCard';
import BattleLeaderboard from './components/BattleLeaderboard';
import GuestBattle from './components/GuestBattle';
import EducationSection from './components/EducationSection';
import RiskDisclosure from './components/RiskDisclosure';
import StickyMobileCTA from './components/StickyMobileCTA';
import { products } from './data/products';

export default function App() {
  const [team, setTeam] = useState('');
  const [direction, setDirection] = useState('');

  const matchedProducts = useMemo(() => products.filter((p) => p.team === team && p.direction === direction), [team, direction]);

  return (
    <main>
      <HeroSection />
      <TeamSelector selectedTeam={team} onSelect={(value) => { setTeam(value); setDirection(''); }} />
      <DirectionSelector selectedDirection={direction} onSelect={setDirection} disabled={!team} />
      {direction && matchedProducts.map((product) => <ProductBattleCard key={product.code} product={product} />)}
      <div id="my-card"><MyBattleCard product={matchedProducts[0]} team={team} direction={direction} onReset={() => { setTeam(''); setDirection(''); }} /></div>
      <BattleLeaderboard />
      <GuestBattle />
      <EducationSection />
      <RiskDisclosure />
      <StickyMobileCTA team={team} direction={direction} />
    </main>
  );
}
