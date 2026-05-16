import React, { useEffect, useState } from "react";

import storygallery1 from "../../assets/ourStory/storygallery1.png";
import storygallery2 from "../../assets/ourStory/storygallery2.jpg";
import storygallery3 from "../../assets/ourStory/storygallery3.png";
import storygallery4 from "../../assets/ourStory/storygallery4.png";
import storygallery5 from "../../assets/ourStory/storygallery5.jpg";
import storygallery6 from "../../assets/ourStory/storygallery6.png";
import storygallery7 from "../../assets/ourStory/storygallery7.jpg";

const images = [
  storygallery1,
  storygallery2,
  storygallery3,
  storygallery4,
  storygallery5,
  storygallery6,
  storygallery7,
];

const StoryGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden pt-10">

      {/* Slides Wrapper */}
      <div
        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >

        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
          >

            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />

          </div>
        ))}

      </div>

    </section>
  );
};

export default StoryGallery;