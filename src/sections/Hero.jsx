import { words } from "../constants/index";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.inOut", stagger: 0.2 }
    );
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      aria-label="Hero section introducing Sunly, Full Stack Developer"
    >
      <div className="absolute top-0 left-0 z-10">
        <img
          src="/images/bg.png"
          alt="Abstract background pattern for Sunly's portfolio hero section"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="hero-layout">
        {/* Main Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span
                  className="slide"
                  aria-label="Animated text showcasing development concepts"
                >
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={`${word.text} development icon`}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          loading="lazy"
                          decoding="async"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              I'm a <strong>Computer Science</strong> student specializing in
              Software Engineering
              <br />
              Currently, I'm focused on building{" "}
              <em>
                scalable web applications and modern digital solutions
                <br />
                that deliver exceptional user experiences.
              </em>
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="cta-button"
              text="See My Work"
              targetId="work"
              aria-label="View Sunly's portfolio projects"
            />
          </div>
        </header>

        {/* 3D Model Section */}
        <figure
          className="hero-figure"
          aria-label="Interactive 3D model showcase"
        >
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      {/* <AnimatedCounter /> */}
    </section>
  );
};

export default Hero;
