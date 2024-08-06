import styles from "./styles/Features.module.scss";
import { useInView } from "react-intersection-observer";
// @ts-ignore
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useInView);

export interface IFeaturesProps {
  className?: string;
}

const Features = ({ className, ...props }: IFeaturesProps): JSX.Element => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    let imageContainer = imageRef.current;
    let image = imageContainer?.children[0];
    console.log("imageDiv and image", imageContainer, image);
    if (inView) {
      gsap.to(imageContainer, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.3,
      });

      gsap.to(image, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.inOut",
      });

      // gsap.to(contentRef.current, {
      //   opacity: 1,
      //   y: 0,
      //   scale: 1.2,
      //   duration: 0.2,
      // });
    } else {
      gsap.to(imageContainer, { opacity: 0, y: 20, duration: 0.5 });
      gsap.to(image, { scale: 1.2, opacity: 0.5, y: 30, duration: 0.2 });
    }
  }, [inView]);

  return (
    <div className={styles.features} ref={ref}>
      <div
        className={styles["features-image"]}
        ref={imageRef}
        style={{ overflow: "hidden", scale: 1.1 }}
      >
        <img src="/media/taxi-driver.jpg" alt="" />
      </div>
      <div className={styles["features-content"]} ref={contentRef}>
        <h2>
          Real-time work tracking for Riders with an All-in-One solution.{" "}
        </h2>
        <p>
          Riders can easily log their shifts, deliveries, and miles in one
          convenient app. No more spreadsheets or juggling multiple apps.{" "}
        </p>
        <div className={styles["features-row"]}>
          <div className={styles["features-row-item"]}>
            <img src="/media/intuitive-dashboard.svg" />
            <h3>Intuitive Dashboard </h3>
            <small>
              Gain clear, real-time insights into your income with an intuitive
              dashboard.
            </small>
          </div>
          <div className={styles["features-row-item"]}>
            <img src="/media/data-driven-decisions.svg" />
            <h3>Data-driven decisions </h3>
            <small>Make informed decisions about your work. </small>
          </div>
        </div>
        <div className={styles["features-row"]}>
          <div className={styles["features-row-item"]}>
            <img src="/media/set-goals.svg" />
            <h3>Set goals </h3>
            <small>
              Set goals to achieve milestones and improve your work-life balance
              and financial health.{" "}
            </small>
          </div>
          <div className={styles["features-row-item"]}>
            <img src="/media/track-progress.svg" />
            <h3>Track progress </h3>
            <small>
              Track your progress and stay motivated by monitoring your earnings
              and work performance.{" "}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
