import styles from "./styles/Hero.module.css";

export interface IHeroProps {
  className?: string;
}

const HeroComponent = ({ className, ...props }: IHeroProps): JSX.Element => {
  return (
    <div className={styles.hero + " " + className}>
      <div className={styles.heroTitle}>
        <div className={styles.simplifyYourWorkTrackingAndIncomeManagement}>
          Simplify your work tracking and income management{" "}
        </div>
        <div
          className={
            styles.welcomeToFoxTrkTheSppDesignedToEmpowerGigEconomyRidersToEasilyTrackTheirWorkAndManageTheirIncomeSayGoodbyeToEndlessSpreadsheetsAndJugglingMultipleAppsFoxTrkBringsItAllTogetherInOnePlace
          }
        >
          Welcome to FoxTRK the spp designed to empower gig economy riders to
          easily track their work and manage their income. Say goodbye to
          endless spreadsheets and juggling multiple apps - FoxTRK brings it all
          together in one place.{" "}
        </div>
      </div>
      <div className={styles.heroSubscription}>
        <div className={styles.rectangle7}></div>
        <div className={styles.frame1}>
          <div className={styles.signUp}>Sign up </div>
        </div>
      </div>
      <div
        className={
          styles.byClickingSignUpYouReConfirmingThatYouAgreeWithOurTermsAndConditions
        }
      >
        By clicking Sign up, you're confirming that you agree with our Terms and
        Conditions.{" "}
      </div>
      <div className={styles.rectangle8}></div>
    </div>
  );
};
export default HeroComponent;