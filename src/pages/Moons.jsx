
import { MoonCard } from '../components/MoonCard';

export const Moons = () => {

    const searchParams = new URLSearchParams(location.search);
    const moons = searchParams.get('moons') ? JSON.parse(searchParams.get('moons')) : [];
  
    return (
      <div className="container_moons">
        {moons.map((moon) => (
          <MoonCard key={moon.moon} moon={moon.moon} />
        ))}
      </div>
    );
  };