import styles from './feedback.module.css';

const FeedbackOptions = ({ feedbackOptions, leaveFeedback }) => {
  const feedbackElements = feedbackOptions.map(option => (
    <button
      className={styles.button}
      onClick={() => leaveFeedback(option)}
      key={option}
    >
      {option}
    </button>
  ));
  return feedbackElements;
};

export default FeedbackOptions;
