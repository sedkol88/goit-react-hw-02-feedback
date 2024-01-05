import styles from './feedback.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
