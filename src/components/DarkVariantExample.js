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
      // Controls the currently active slide. It is controlled by the `activeIndex` state.
      // This allows you to dynamically set which slide should be shown.
      activeIndex={activeIndex}
      // The `onSelect` function is called when the user manually selects a different slide.
      // It updates the `activeIndex` state to show the selected slide.
      onSelect={handleSelect}
      // The `interval` is the time in milliseconds between automatic slide transitions.
      // Here, the carousel will automatically change slides every 1000ms (3 seconds).
      interval={1000}
      // The `controls` prop is set to `true`, meaning the carousel will show the "previous" and "next" buttons (arrows)
      // for manual navigation between slides.
      controls={true}
      // The `indicators` prop is set to `true`, which means the carousel will show dot indicators
      // (small circles) at the bottom to show the current slide position.
      indicators={true}
      // The `pause` prop controls whether the carousel should pause when the user hovers over it.
      // Setting it to "hover" means the carousel will pause on mouse enter and resume on mouse leave.
      pause="hover"
      // The `wrap` prop is set to `true`, meaning that the carousel will loop continuously.
      // When the user reaches the last slide, it will cycle back to the first slide.
      wrap={true}
      // The `touch` prop is set to `true`, enabling swipe interactions on touch-enabled devices (like smartphones or tablets).
      // This allows users to swipe left or right to navigate through slides.
      touch={true}
      // The `fade` prop is set to `false`, meaning the carousel will use the default sliding animation
      // (instead of a crossfade animation between slides).
      fade={false}
      // The `slide` prop is set to `true`, enabling the default slide animation for transitioning between slides.
      slide={true}
      // The `prevIcon` allows you to customize the icon for the "previous" button (the left arrow).
      // In this case, it uses a custom `<span>` with a leftward arrow ("&lt;").
      prevIcon={<span>&lt;</span>}
      // The `nextIcon` allows you to customize the icon for the "next" button (the right arrow).
      // In this case, it uses a custom `<span>` with a rightward arrow ("&gt;").
      nextIcon={<span>&gt;</span>}
      // The `prevLabel` provides an accessible label for the "previous" button, which is used by screen readers.
      // Here, the label is set to "Go Back".
      prevLabel="Go Back"
      // The `nextLabel` provides an accessible label for the "next" button, used by screen readers.
      // Here, the label is set to "Next Slide".
      nextLabel="Next Slide"
      // The `variant` prop controls the color scheme of the carousel.
      // Setting it to "light" changes the color of the control buttons, indicators, and captions to a lighter color scheme.
      data-bs-theme="light"
      // The `defaultActiveIndex` prop is set to `0`, which means the carousel will initially show the first slide
      // when it is first rendered (index 0 corresponds to the first item).
      defaultActiveIndex={0}
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
