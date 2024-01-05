const Statistics = ({ good, neutral, bad, total, percentOfPositive }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percentOfPositive}%</p>
    </>
  );
};

export default Statistics;
