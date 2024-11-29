import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function DarkVariantExample() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
    console.log(`Selected slide: ${selectedIndex}`);
  };
  return (
    <Carousel
    activeIndex={activeIndex}        // Tracks current slide
    onSelect={handleSelect}           // Updates activeIndex on manual slide change
    interval={1000}                   // Auto-transition every 1000ms (1 second)
    controls={true}                   // Shows prev/next buttons for navigation
    indicators={true}                 // Displays slide position dots
    pause="hover"                     // Pauses on hover
    wrap={true}                       // Loops the carousel (returns to first slide after the last)
    touch={true}                      // Enables swipe navigation on touch devices
    fade={false}                      // Uses sliding transition (not fade)
    slide={true}                      // Default slide transition effect
    prevIcon={<span>prevIcon</span>}  // Custom prev icon
    nextIcon={<span>next</span>}      // Custom next icon
    prevLabel="Go Back"              // Accessibility label for prev button
    nextLabel="Next Slide"           // Accessibility label for next button
    data-bs-theme="light"            // Light color theme
    defaultActiveIndex={0}           // Starts at first slide

    as="section"
    className="custom-carousel-item" //Custom element type for CarouselItem (as="section")
  >
        {/* First Item */}
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-height"
          src="https://social.webestica.com/assets/images/post/3by2/01.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Item */}
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-height"
          src="https://social.webestica.com/assets/images/post/3by2/02.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Item */}
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-height"
          src="https://social.webestica.com/assets/images/post/3by2/03.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
