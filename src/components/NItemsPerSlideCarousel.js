import React, { useState } from 'react';
import { Col, Row, Carousel } from 'react-bootstrap';
import carousel1 from "../assets/photos/1.jpg"
import carousel2 from "../assets/photos/2.jpg"
import carousel3 from "../assets/photos/3.jpg"
import carousel4 from "../assets/photos/4.jpg"
import carousel5 from "../assets/photos/5.jpg"
import carousel6 from "../assets/photos/6.jpg"

function NItemsPerSlideCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
    console.log(`Selected slide: ${selectedIndex}`);
  };

  // Array of testimonial data (this could come from an API or props)
  const testimonials = [
    { id: 1, imageUrl: carousel1, text: "This is the first testimonial text." },
    { id: 2, imageUrl: carousel2, text: "This is the second testimonial text." },
    { id: 3, imageUrl: carousel3, text: "This is the third testimonial text." },
    { id: 4, imageUrl: carousel4, text: "This is the fourth testimonial text." },
    { id: 5, imageUrl: carousel5, text: "This is the fifth testimonial text." },
    { id: 6, imageUrl: carousel6, text: "This is the sixth testimonial text." },
  ];
  

  // Helper function to group testimonials (3 items per slide)
  const groupTestimonials = (testimonials, groupSize) => {
    const groups = [];
    for (let i = 0; i < testimonials.length; i += groupSize) {
      groups.push(testimonials.slice(i, i + groupSize));
    }
    return groups;
  };

  const groupedTestimonials = groupTestimonials(testimonials, 4); // Group into sets of 3

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={handleSelect}
      interval={0.1000}
      controls={true}
      indicators={true}
      pause="hover"
      wrap={true}
      touch={true}
      fade={false}
      slide={true}
      prevIcon={<span>Previous</span>}
      nextIcon={<span>Next</span>}
      prevLabel="Go Back"
      nextLabel="Next Slide"
      data-bs-theme="light"
      as="section"
      className="testimonial-carousel"
    >
      {/* Dynamically render carousel items */}
      {groupedTestimonials.map((group, index) => (
        <Carousel.Item key={index}>
          <Row>
            {group.map((testimonial) => (
              <Col md={4} key={testimonial.id}>
                <img
                  className="d-block w-100 carousel-img"
                  src={testimonial.imageUrl}
                  alt={`Testimonial ${testimonial.id}`}
                />
                <Carousel.Caption>
                  <h3>{`Testimonial ${testimonial.id}`}</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default NItemsPerSlideCarousel;
