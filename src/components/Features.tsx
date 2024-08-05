import styles from "./styles/Features.module.scss";
export interface IFeaturesProps {
  className?: string;
}

const Features = ({ className, ...props }: IFeaturesProps): JSX.Element => {
  return (
    <div className={styles.features}>
      <div className={styles["features-image"]}>
        <img src="/media/taxi-driver.jpg" alt="" />
      </div>
      <div className={styles["features-content"]}>
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
