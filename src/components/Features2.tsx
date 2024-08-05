import styles from "./styles/Features.module.scss";

export interface IFeaturesProps {
  className?: string;
}

const Features = ({ className, ...props }: IFeaturesProps): JSX.Element => {
  return (
    <div className={styles.features2} key="features2">
      <div className={styles["features-content"]}>
        <h2>
          Have an intelligent co-worker to plan your day ahead with forecasts
          and calculations.
        </h2>
        <p>
          Discover how FoxTRK's AI assistant can help you make tough decisions
          and calculations empowering to meet the goals you have set. And, with
          the forecasts feature riders can plan ahead the surprises to smooth
          their rides.
        </p>
        <div className={styles["features-row"]}>
          <div className={styles["features-row-item"]}>
            <img src="/media/experience-efficiency.svg" />
            <h3>Experience efficiency</h3>
            <small>
              Let FoxTRK AI co-work with you to streamline your decision-making.
            </small>
          </div>
          <div className={styles["features-row-item"]}>
            <img src="/media/optimize-your-area.svg" />
            <h3>Optimize your area</h3>
            <small>
              Make informed decisions about your work. Plan your routes based on
              forecasts and calculations to avoid delays and improve efficiency.
            </small>
          </div>
        </div>
        <div className={styles["features-row"]}>
          <div className={styles["features-row-item"]}>
            <img src="/media/stay-prepared.svg" />
            <h3>Stay prepared</h3>
            <small>
              Get real-time updates about what's happen around you or your run
              area to ensure a seamless and efficient experience.
            </small>
          </div>
          <div className={styles["features-row-item"]}>
            <img src="/media/improve-performance.svg" />
            <h3>Improve performance</h3>
            <small>
              Maximize efficiency and profitability with our AI-powered
              co-working feature.
            </small>
          </div>
        </div>
      </div>
      <div className={styles["features-image"]}>
        <img src="/media/deliveroo-bag.jpg" alt="" />
        <div className={styles["features-image-widgets"]}>
          <img src="/media/rate-widget.svg" alt="" />
          <img src="/media/income-widget.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
