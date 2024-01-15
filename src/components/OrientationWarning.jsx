import React from 'react';

const OrientationWarning = () => {
  const checkOrientation = () => {
    const isLandscape = window.screen.orientation.type.includes('landscape');
    if (!isLandscape) {
      alert('Por favor, gire su dispositivo para una mejor experiencia.');
    }
  };

  React.useEffect(() => {
    checkOrientation();

    const handleOrientationChange = () => {
      checkOrientation();
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div>
    </div>
  );
};

export default OrientationWarning;
