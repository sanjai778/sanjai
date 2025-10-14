"use client";

import { useState, useEffect } from 'react';
import styles from './VideoSection.module.css';

interface VideoSectionProps {
  videoId: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoId }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  // Effect to handle body scroll when modal opens/closes
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className={styles.videoSection}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.videoMain}>
              <div className={styles.promoVideo}>
                <div className={styles.wavesBlock}>
                  <div className={styles.wave1}></div>
                  <div className={styles.wave2}></div>
                  <div className={styles.wave3}></div>
                </div>
              </div>
              <button className="btn btn-primary" onClick={openModal} aria-label="Play Video">
                <i className='bx bx-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal} aria-label="Close Video">
              <i className='bx bx-x'></i>
            </button>
            <div className={styles.iframeContainer}>
              <iframe
                src={videoUrl + "?autoplay=1"} // Add autoplay when modal opens
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
