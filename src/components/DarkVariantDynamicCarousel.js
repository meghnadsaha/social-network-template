


//     import React, { useState } from "react";
// import { Carousel } from "react-bootstrap";

// function DarkVariantDynamicCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setActiveIndex(selectedIndex);
//     console.log(`Selected slide: ${selectedIndex}`);
//   };

//   // Array of slide data (this could come from an API, etc.)
//   const slides = [
//     {
//       imgSrc: "https://social.webestica.com/assets/images/post/3by2/01.jpg",
//       altText: "First slide",
//       title: "First slide label",
//       description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
//     },
//     {
//       imgSrc: "https://social.webestica.com/assets/images/post/3by2/02.jpg",
//       altText: "Second slide",
//       title: "Second slide label",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       imgSrc: "https://social.webestica.com/assets/images/post/3by2/03.jpg",
//       altText: "Third slide",
//       title: "Third slide label",
//       description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
//     },
//   ];

//   return (
//     <Carousel
//       activeIndex={activeIndex}        // Tracks current slide
//       onSelect={handleSelect}           // Updates activeIndex on manual slide change
//       interval={1000}                   // Auto-transition every 1000ms (1 second)
//       controls={true}                   // Shows prev/next buttons for navigation
//       indicators={true}                 // Displays slide position dots
//       pause="hover"                     // Pauses on hover
//       wrap={true}                       // Loops the carousel (returns to first slide after the last)
//       touch={true}                      // Enables swipe navigation on touch devices
//       fade={false}                      // Uses sliding transition (not fade)
//       slide={true}                      // Default slide transition effect
//       prevIcon={<span>prevIcon</span>}  // Custom prev icon
//       nextIcon={<span>next</span>}      // Custom next icon
//       prevLabel="Go Back"              // Accessibility label for prev button
//       nextLabel="Next Slide"           // Accessibility label for next button
//       data-bs-theme="light"            // Light color theme
//       defaultActiveIndex={0}           // Starts at first slide
//       as="section"
//       className="custom-carousel-item" // Custom element type for CarouselItem (as="section")
//     >
//       {/* Dynamically render carousel items */}
//       {slides.map((slide, index) => (
//         <Carousel.Item key={index}>
//           <img
//             className="d-block w-100 carousel-height"
//             src={slide.imgSrc}
//             alt={slide.altText}
//           />
//           <Carousel.Caption>
//             <h5>{slide.title}</h5>
//             <p>{slide.description}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default DarkVariantDynamicCarousel;
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function DarkVariantDynamicCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
    console.log(`Selected slide: ${selectedIndex}`);
  };

  // Array of slide data
  const slides = [
    {
      imgSrc: "https://social.webestica.com/assets/images/post/3by2/01.jpg",
      altText: "First slide",
      title: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      imgSrc: "https://social.webestica.com/assets/images/post/3by2/02.jpg",
      altText: "Second slide",
      title: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imgSrc: "https://social.webestica.com/assets/images/post/3by2/03.jpg",
      altText: "Third slide",
      title: "Third slide label",
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      interval={1000}
      controls={true}
      indicators={true}
      pause="hover"
      wrap={true}
      touch={true}
      fade={false}
      slide={true}
      prevIcon={<span>prevIcon</span>}
      nextIcon={<span>next</span>}
      prevLabel="Go Back"
      nextLabel="Next Slide"
      data-bs-theme="light"
      defaultActiveIndex={0}
      as="section"
      className="custom-carousel-item"
    >
      {/* Dynamically render carousel items */}
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-height"
            src={slide.imgSrc}
            alt={slide.altText}
          />
          <Carousel.Caption>
            <h5>{slide.title}</h5>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DarkVariantDynamicCarousel;
