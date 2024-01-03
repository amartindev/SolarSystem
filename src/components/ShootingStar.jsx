
export const ShootingStar = ({ number }) => {
  const shootingStars = [];

  for (let i = 0; i < number; i++) {
    shootingStars.push(<div key={i} className="shooting_star"></div>);
  }

  return (
    <div className="night">
      {shootingStars}
    </div>
  );
};
