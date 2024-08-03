import styles from "./styles/Features.module.css";

export interface IFeaturesProps {
  className?: string;
}

const Features = ({
  className,
  ...props
}: IFeaturesProps): JSX.Element => {
  return (
    <div className={styles.features + " " + className}>
      <div className={styles.featureItem}>
        <div className={styles.rectangle9}></div>
        <div className={styles.frame2}>
          <div
            className={
              styles.realTimeWorkTrackingForRidersWithAnAllInOneSolution
            }
          >
            Real-time work tracking for Riders with an All-in-One solution.{" "}
          </div>
          <div
            className={
              styles.ridersCanEasilyLogTheirShiftsDeliveriesAndMilesInOneConvenientAppNoMoreSpreadsheetsOrJugglingMultipleApps
            }
          >
            Riders can easily log their shifts, deliveries, and miles in one
            convenient app. No more spreadsheets or juggling multiple apps.{" "}
          </div>
          <div className={styles.frame3}>
            <div className={styles.frame4}>
              <img
                className={styles.lucideLayoutDashboard}
                src="../../public/media/experience-efficiency.svg"
              />
              <div className={styles.intuitiveDashboard}>
                Experience efficiency{" "}
              </div>
              <div className={styles.textFeature1}>
                Let FoxTRK AI co-work with you to streamline your decision-making.{" "}
              </div>
            </div>
            <div className={styles.frame5}>
              <img className={styles.lucideSplit} src="../../public/media/optimize-your-area.svg" />
              <div className={styles.dataDrivenDecisions}>
                Optimize your area{" "}
              </div>
              <div className={styles.textFeature1}>
                Plan your routes based on forecasts and calculations to avoid delays and improve efficiency.{" "}
              </div>
            </div>
          </div>
          <div className={styles.frame42}>
            <div className={styles.frame4}>
              <img className={styles.lucideGoal} src="../../public/media/stay-prepared.svg" />
              <div className={styles.setGoals}>Stay prepared </div>
              <div className={styles.textFeature1}>
                Get real-time updates about what’s happen around you or your run area to ensure a seamless and efficient experience.{" "}
              </div>
            </div>
            <div className={styles.frame5}>
              <img
                className={styles.lucideRectangleEllipsis}
                src="../../public/media/improve-performance.svg"
              />
              <div className={styles.trackProgress}>Improve performance</div>
              <div className={styles.textFeature1}>
                Maximize efficiency and profitability with our AI-powered co-working feature.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;