import styles from "./styles/Essentials.module.css";

export interface IFeaturesProps {
  className?: string;
}

const Essentials = ({
  className,
  ...props
}: IFeaturesProps): JSX.Element => {

  return (
    <div className={styles.features + " " + className}>
      <div className={styles.featureItem}>
        <div className={styles.frame7}>
          <div className={styles.frame8}>
            <div className={styles.frame9}>
              <div className={styles.simplify}>SIMPLIFY </div>
              <div className={styles.allYourEssentialRiderFeaturesInOnePlace}>
                All your essential Rider Features in one place{" "}
              </div>
            </div>
            <div
              className={
                styles.discoverThePowerOfFoxTrkTheUltimateAppAssistantForGigEconomyRidersWithFeaturesLikeMileageTrackingExpensesLoggingMaintenanceCostsAndPerformanceAnalyticsFoxTrkStreamlinesYourWorkAndHelpsYouMaximizeEfficiencyAndProfitabilityStayOnTopOfYourWorkAndEarningsWithRealTimeInsightsAndActionableDataDrivenDecisions
              }
            >
              Discover the power of FoxTRK, the ultimate app assistant for gig
              economy riders. With features like Mileage tracking, Expenses
              logging, maintenance costs and performance analytics. FoxTRK
              streamlines your work and helps you maximize efficiency and
              profitability. Stay on top of your work and earnings with
              real-time insights and actionable data-driven decisions.{" "}
            </div>
          </div>
          <div className={styles.frame3}>
            <div className={styles.frame4}>
              <img className={styles.lucideGauge} src="/media/mileage-tracking.svg" />
              <div className={styles.mileageTracking}>Mileage Tracking </div>
              <div className={styles.textFeature1}>
                Effortlessly track your miles for accurate reportiung{" "}
              </div>
            </div>
            <div className={styles.frame5}>
              <img className={styles.lucideCoins} src="/media/expense-logging.svg" />
              <div className={styles.expenseLogging}>Expense Logging </div>
              <div className={styles.textFeature1}>
                Keep a record of your expenses for easy reimbursmnent{" "}
              </div>
            </div>
            <div className={styles.frame6}>
              <img className={styles.lucideWrench} src="/media/maintenance-costs.svg" />
              <div className={styles.maintenanceCosts}>Maintenance Costs </div>
              <div className={styles.textFeature1}>
                Track your vehicle maintenance expenses to optimize efficiency
                and keep notifications when you need to do services ortaxes
                payments.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essentials;