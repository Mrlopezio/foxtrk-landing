import styles from "./styles/Contact.module.css";

export interface IContactProps {
    className?: string;
}

const Contact = ({
    className,
    ...props
}: IContactProps): JSX.Element => {
    return (
        <div className={styles.contact + " " + className}>
            <div className={styles.featureItem}>
                <div className={styles.frame2}>
                    <div className={styles.frame10}>
                        <div className={styles.joinTheFoxTrkWaitlistToday}>
                            Join the FoxTRK waitlist today{" "}
                        </div>
                        <div
                            className={
                                styles.beTheFirstToExperienceFoxTrkFeaturesAndProvideValuableFeedbackYouWillBeRewardedForSure
                            }
                        >
                            Be the first to experience FoxTRK features and provide valuable
                            feedback, you will be rewarded for sure.{" "}
                        </div>
                    </div>
                    <div className={styles.heroSubscription}>
                        <div className={styles.rectangle7}></div>
                        <div className={styles.frame1}>
                            <div className={styles.signUp}>Sign up </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact