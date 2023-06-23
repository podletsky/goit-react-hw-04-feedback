import React, { useState } from 'react';
import FeedbackOption from '../components/feedback/FeedbackOption';
import Statistic from './statistic/Statistic';
import SectionTitle from './sectionTitle/SectionTitle';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((feedback.good / total) * 100);
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const { good, neutral, bad } = feedback;
  const total = countTotalFeedback();

  return (
    <>
      <FeedbackOption
        options={Object.keys(feedback)}
        onLeaveFeedback={onLeaveFeedback}
      />

      {!total ? (
        <SectionTitle>No feedback yet.</SectionTitle>
      ) : (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          positiveFeedback={countPositiveFeedbackPercentage()}
          total={total}
        />
      )}
    </>
  );
};

export default App;
