import { useEffect, useRef } from "react";
import SignUpComponent from "./SignUpComponent";
import styles from "./styles/Hero.module.scss";
import { useInView } from "react-intersection-observer";
//@ts-ignore
import { gsap } from "gsap";

export interface IHeroProps {
  className?: string;
}

const HeroComponent = ({ className, ...props }: IHeroProps): JSX.Element => {
  const mockup1 = useRef(null);
  const mockup2 = useRef(null);
  const heroImage = useRef(null);
  const heroImageBg = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    gsap.fromTo(
      mockup1.current,
      { opacity: 0, y: 20, duration: 1.4 },
      { opacity: 1, y: 0, duration: 1, delay: 1.4 },
    );
  }, []);

  useEffect(() => {
    if (inView) {
      gsap.to(mockup1.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.3 });
      gsap.to(mockup2.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 });
    } else {
      gsap.to(mockup1.current, { opacity: 0, y: 10, duration: 1.2 });
      gsap.to(mockup2.current, { opacity: 0, y: 20, duration: 1 });
    }
  }, [inView]);

  return (
    <div className={styles.hero} key="hero" ref={ref}>
      <div className={styles["hero-title"]}>
        <h1>Simplify your work tracking and income management</h1>
        <p>
          Welcome to FoxTRK the spp designed to empower gig economy riders to
          easily track their work and manage their income. Say goodbye to
          endless spreadsheets and juggling multiple apps - FoxTRK brings it all
          together in one place.
        </p>
      </div>
      <div className={styles["hero-subscription"]}>
        <SignUpComponent />
      </div>
      <div className={styles["hero-image"]} ref={heroImage}>
        <img
          className={styles["hero-image-bg"]}
          ref={heroImageBg}
          src="/media/uber-rider.jpg"
          alt=""
        />
        <img
          className={styles["hero-image-mockup-1"]}
          ref={mockup1}
          src="/media/week-mobile-dashboard-mockup.svg"
          alt=""
        />
        <img
          className={styles["hero-image-mockup-2"]}
          ref={mockup2}
          src="/media/tip-mobile-dashboard-mockup.svg"
          alt=""
        />
      </div>
    </div>
  );
};
export default HeroComponent;
