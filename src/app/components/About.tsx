import Image from 'next/image'
import React from 'react'

function About() {
  return (
      <section id="about" className="my-20 mt-40">
          <h1 className="text-3xl lg:text-4xl font-bold text-center py-5 bg-gradient-to-r bg-neutral-300 to neutral-500 text-transparent bg-clip-text">
              About Me
          </h1>
          <div className="grid gap-4 items-center md:[grid-template-columns:1fr_1.5fr]">
              <div>
                  <Image
                      src="/images/about-image.png"
                      alt="about-image"
                      width={500}
                      height={500}
                      className="w-full h-125 md:h-120 object-cover rounded-lg"
                  />
              </div>
              <div className="md:text-xl text-neutral-600 dark:text-neutral-300 md:mx-5">
                  <p className='mb-3'>
                      {" "}
                      Hi, I&apos;m Nishant — a Full Stack Developer specializing
                      in the MERN stack and Next.js. I&apos;m passionate about
                      turning ideas into clean, scalable, and responsive digital
                      experiences. I love combining modern tools and frameworks
                      to build user-friendly interfaces and powerful backends
                      that work seamlessly together. For me, web development
                      isn&apos;t just about writing code—it&apos;s about
                      crafting intuitive, engaging, and future-ready
                      applications that feel natural on any device.
                  </p>
                  <p>
                      Driven by curiosity, I&apos;m always exploring new tools
                      and technologies to keep growing. Whether it&apos;s
                      building a personal project, contributing to open-source,
                      or learning about the latest trends in web development,
                      I&apos;m constantly seeking opportunities to expand my
                      skill set and stay ahead in this ever-evolving field.
                  </p>
              </div>
          </div>
      </section>
  );
}

export default About