import styles from "./styles/Essentials.module.scss";

export interface IFeaturesProps {
  className?: string;
}

const Essentials = ({ className, ...props }: IFeaturesProps): JSX.Element => {
  return (
    <div className={styles.essentials}>
      <div className={styles["essentials-info"]}>
        <p className={styles["essentials-info-subtitle"]}>SIMPLIFY </p>
        <h2 className={styles.allYourEssentialRiderFeaturesInOnePlace}>
          All your essential Rider Features in one place
        </h2>
      </div>
      <p>
        Discover the power of FoxTRK, the ultimate app assistant for gig economy
        riders. With features like Mileage tracking, Expenses logging,
        maintenance costs and performance analytics. FoxTRK streamlines your
        work and helps you maximize efficiency and profitability. Stay on top of
        your work and earnings with real-time insights and actionable
        data-driven decisions.{" "}
      </p>
      <div className={styles["essentials-container"]}>
        <div className={styles["essentials-item"]}>
          <img src="/media/mileage-tracking.svg" />
          <h3>Mileage Tracking </h3>
          <small>Effortlessly track your miles for accurate reportiung </small>
        </div>
        <div className={styles["essentials-item"]}>
          <img src="/media/expense-logging.svg" />
          <h3>Expense Logging </h3>
          <small>Keep a record of your expenses for easy reimbursmnent </small>
        </div>
        <div className={styles["essentials-item"]}>
          <img src="/media/maintenance-costs.svg" />
          <h3>Maintenance Costs </h3>
          <small>
            Track your vehicle maintenance expenses to optimize efficiency and
            keep notifications when you need to do services ortaxes payments.{" "}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
