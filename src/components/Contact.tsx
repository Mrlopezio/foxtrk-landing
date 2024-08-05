import SignUpComponent from "./SignUpComponent";
import styles from "./styles/Contact.module.scss";

export interface IContactProps {
  className?: string;
}

const Contact = ({ className, ...props }: IContactProps): JSX.Element => {
  return (
    <div className={styles.contact}>
      <h2>Join the FoxTRK waitlist today </h2>
      <p>
        Be the first to experience FoxTRK features and provide valuable
        feedback, you will be rewarded for sure.
      </p>
      <SignUpComponent />
    </div>
  );
};
export default Contact;
