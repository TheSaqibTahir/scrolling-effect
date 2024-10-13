import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollingAnimation = () => {
  useEffect(() => {
    const canvas = document.getElementById('frames2');
    const context = canvas.getContext('2d');

    const frames = {
      currentIndex: 0,
      maxIndex: 176,
    };

    let imagesLoaded = 0;
    const images = [];

    const preloadImages = () => {
      for (let i = 1; i <= frames.maxIndex; i++) {
        const imageUrl = `./extracted/frame_${i.toString().padStart(4, '0')}.jpg`;
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === frames.maxIndex) {
            loadImage(frames.currentIndex);
            startAnimation();
          }
        };
        images.push(img);
      }
    };

    const loadImage = (index) => {
      if (index >= 0 && index <= frames.maxIndex) {
        const img = images[index];
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;

        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

        frames.currentIndex = index;
      }
    };

    const startAnimation = () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.parent2',
          start: 'top top',
          scrub: true,
        },
      });
      tl.to(frames, {
        currentIndex: frames.maxIndex,
        onUpdate: function () {
          loadImage(Math.floor(frames.currentIndex));
        },
      });
    };

    preloadImages();
  }, []);

  return <canvas id="frames2" className="w-full h-screen"></canvas>;
};

export default ScrollingAnimation;
