import React from 'react';

const OrientationWarning = () => {
  const checkOrientation = () => {
    const isLandscape = window.screen.orientation.type.includes('landscape');
    if (!isLandscape) {
      alert('Please rotate your device for a better experience.');
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
