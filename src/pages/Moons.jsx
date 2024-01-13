
import { useEffect } from 'react';
import { MoonCard } from '../components/MoonCard';
import anime from "animejs";

export const Moons = () => {

    const searchParams = new URLSearchParams(location.search);
    const moons = searchParams.get('moons') ? JSON.parse(searchParams.get('moons')) : [];
  
    useEffect(() => {
        anime({
            targets: '.staggering-grid .elmoon',
            scale: [
              {value: .5, easing: 'easeOutSine', duration: 100},
              {value: 1, easing: 'easeInOutQuad', duration: 800}
            ],
            delay: anime.stagger(200, {grid: [4, 5], from: 'center'})
          });
    }, [])
    





    return (
      <div className="container_moons staggering-grid">
        {moons.map((moon, index) => (
          <MoonCard key={moon.moon} moon={moon.moon} index={index} />
        ))}
      </div>
    );
  };