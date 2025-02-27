import { Suspense, useEffect, useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const LazySpline = ({ sceneUrl, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const splineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleLoad = (splineApp) => {
    splineRef.current = splineApp;
    
    // ✅ Disable user interactions
    splineApp.emitEvent('mouseDown', 'Camera'); // Prevents dragging
    splineApp.emitEvent('mouseUp', 'Camera');   // Ensures no unexpected resizing

  };

  return (
    <div ref={ref} className={className}>
      {isVisible ? (
        <Suspense fallback={<div className="animate-pulse h-40 w-40 bg-gray-800 rounded-lg" />}>
          <Spline scene={sceneUrl} onLoad={handleLoad} />
        </Suspense>
      ) : (
        <div className="animate-pulse h-40 w-40 bg-gray-800 rounded-lg" />
      )}
    </div>
  );
};

export function Flower() {
  return <LazySpline sceneUrl="https://prod.spline.design/VB4JACo0UAQ2vCNj/scene.splinecode" />;
}

export function Girl() {
  return <LazySpline sceneUrl="https://prod.spline.design/YRoRkcnfFm1xeeX5/scene.splinecode" />;
}

