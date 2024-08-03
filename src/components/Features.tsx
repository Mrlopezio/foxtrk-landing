import styles from "./styles/Features.module.css";
// import intuitiveDashboard from '/media/intuitive-dashboard.svg'
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
                // src={intuitiveDashboard}
                src="/media/intuitive-dashboard.svg"
              />
              <div className={styles.intuitiveDashboard}>
                Intuitive Dashboard{" "}
              </div>
              <div className={styles.textFeature1}>
                Gain clear, real-time insights into your income with an
                intuitive dashboard.{" "}
              </div>
            </div>
            <div className={styles.frame5}>
              <img className={styles.lucideSplit} src="/media/data-driven-decisions.svg" />
              <div className={styles.dataDrivenDecisions}>
                Data-driven decisions{" "}
              </div>
              <div className={styles.textFeature1}>
                Make informed decisions about your work.{" "}
              </div>
            </div>
          </div>
          <div className={styles.frame42}>
            <div className={styles.frame4}>
              <img className={styles.lucideGoal} src="/media/set-goals.svg" />
              <div className={styles.setGoals}>Set goals </div>
              <div className={styles.textFeature1}>
                Set goals to achieve milestones and improve your work-life
                balance and financial health.{" "}
              </div>
            </div>
            <div className={styles.frame5}>
              <img
                className={styles.lucideRectangleEllipsis}
                src="/media/track-progress.svg"
              />
              <div className={styles.trackProgress}>Track progress </div>
              <div className={styles.textFeature1}>
                Track your progress and stay motivated by monitoring your
                earnings and work performance.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;