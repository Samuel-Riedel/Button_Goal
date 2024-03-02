import styles from "./FancyButton.module.css";

const FancyButton = ({
  text,
  variant = "primary",
  handleClick,
  customClassName,
}) => (
  <button
    className={`${styles.fancyButton} ${
      variant === "primary" ? styles.primaryButton : styles.secondaryButton
    } ${customClassName}`}
    onClick={handleClick}
  >
    {text}
  </button>
);

export default FancyButton;