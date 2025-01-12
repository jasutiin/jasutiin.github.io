import React, { useState, useRef, useEffect } from 'react';
import styles from './ImageCarousel.module.scss';

interface ImageCarouselProps {
  uris: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ uris }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? uris.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === uris.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.carousel} ref={carouselRef}>
      {uris.length > 1 && (
        <button className={styles.button} onClick={handlePrevious}>
          &#8249;
        </button>
      )}
      <img
        className={`${styles.image} ${
          isVisible ? styles.showY : styles.hiddenY
        }`}
        src={uris[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      {uris.length > 1 && (
        <button className={styles.button} onClick={handleNext}>
          &#8250;
        </button>
      )}
    </div>
  );
};

export default ImageCarousel;
