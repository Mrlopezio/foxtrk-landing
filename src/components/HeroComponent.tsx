import styles from "./styles/Hero.module.scss";

export interface IHeroProps {
  className?: string;
}

const HeroComponent = ({ className, ...props }: IHeroProps): JSX.Element => {
  return (
    <div className={styles.hero + " " + className}>
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
        <form action="">
          <input type="text" />
          <button>Sign Up</button>
        </form>
        <p>
          By clicking Sign up, you're confirming that you agree with our Terms
          and Conditions.
        </p>
      </div>
      <div className={styles["hero-image"]}>This is the hero image</div>
    </div>
  );
};
export default HeroComponent;
