import SignUpComponent from "./SignUpComponent";
import styles from "./styles/Hero.module.scss";

export interface IHeroProps {
  className?: string;
}

const HeroComponent = ({ className, ...props }: IHeroProps): JSX.Element => {
  return (
    <div className={styles.hero}>
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
      <div className={styles["hero-image"]}>
        <img
          className={styles["hero-image-bg"]}
          src="/media/uber-rider.jpg"
          alt=""
        />
        <img
          className={styles["hero-image-mockup-1"]}
          src="/media/week-mobile-dashboard-mockup.svg"
          alt=""
        />
        <img
          className={styles["hero-image-mockup-2"]}
          src="/media/tip-mobile-dashboard-mockup.svg"
          alt=""
        />
      </div>
    </div>
  );
};
export default HeroComponent;
