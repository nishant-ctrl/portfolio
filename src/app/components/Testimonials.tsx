
import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials';
import { testimonials } from '../../../data/testimonials';

function Testimonials() {
  return (
      <section id="testimonials">
          <h1 className="text-3xl lg:text-4xl font-bold text-center py-5 bg-gradient-to-r bg-neutral-300 to neutral-500 text-transparent bg-clip-text">
              Testimonials
          </h1>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true}/>
      </section>
  );
}

export default Testimonials