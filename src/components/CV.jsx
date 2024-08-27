import React from "react";
import ImageGallery from "react-image-gallery";
import "./image-gallery.css"; // Import the CSS for styling

import accounting from "../assets/cv_img/accounting.png";
import cs from "../assets/cv_img/cs.png";
import cotom from "../assets/cv_img/cotom.png";

import { SectionWrapper } from "./hoc";

const CV = () => {
  const images = [
    {
      original: accounting,
      thumbnail: "path-to-your-thumbnail-1.jpg",
    },
    {
      original: cs,
      thumbnail: "path-to-your-thumbnail-2.jpg",
    },
    {
      original: cotom,
      thumbnail: "path-to-your-thumbnail-3.jpg",
    },
  ];

  return (
    <div className="cv-container max-w-[300px]">
      <ImageGallery
        items={images}
        showThumbnails={true}
        showFullscreenButton={true}
        showPlayButton={false}
        slideDuration={450}
        autoPlay={true}
        slideInterval={3000}
        // additionalClass="cool-gallery-animation"
      />
    </div>
  );
};

// // export default SectionWrapper(CV, "cv");
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, EffectFade, Zoom } from "swiper";
// import "swiper/swiper-bundle.min.css"; // Core Swiper styles
// import "swiper/modules/navigation/navigation.min.css"; // Navigation styles
// import "swiper/modules/pagination/pagination.min.css"; // Pagination styles
// import "swiper/modules/effect-fade/effect-fade.min.css"; // Effect fade styles
// import "swiper/modules/zoom/zoom.min.css"; // Zoom styles
// import "./cv.css"; // Import custom styles

// // Install Swiper modules
// SwiperCore.use([Navigation, Pagination, EffectFade, Zoom]);

// const CV = () => {
//   const images = [
//     "path-to-your-image-1.jpg",
//     "path-to-your-image-2.jpg",
//     "path-to-your-image-3.jpg",
//   ];

//   return (
//     <div className="cv-container">
//       <Swiper
//         spaceBetween={30}
//         effect="fade" // Fade effect for smooth transitions
//         navigation // Arrows for navigation
//         pagination={{ clickable: true }} // Pagination dots
//         zoom={{ maxRatio: 2 }} // Zoom on double-click
//         loop // Infinite loop
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div className="swiper-zoom-container">
//               <img src={image} alt={`Slide ${index + 1}`} />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CV;
