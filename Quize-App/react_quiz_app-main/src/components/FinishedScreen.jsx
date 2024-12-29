import React from "react";

const FinishedScreen = ({
  quizTotalScore,
  studentScore,
  setLoadingState,
  setQuestionIndex,
  setSelectedOption,
  setCorrectOption,
  setStudentScore,
  setUsername
}) => {
  const percentage = (studentScore / quizTotalScore) * 100;
  const username = localStorage.getItem("username")

  let emoji;
  if (percentage == 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "👏";
  if (percentage > 0 && percentage < 50) emoji = "🤔";
  if (percentage == 0) emoji = "🥺";

  function restartQuiz() {
    setLoadingState("ready");
    setQuestionIndex(0)
    setSelectedOption(null)
    setCorrectOption(null)
    setStudentScore(0)
    setUsername("")
    localStorage.removeItem("username")

  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span> Hi{" "}
        <span style={{ textTransform: "uppercase" }}>{username}</span>, you
        scored <strong>{studentScore}</strong> out of {quizTotalScore} (
        {percentage}%)
      </p>
      <p className="highscore">(HighScore: {studentScore} points)</p>

      <button className=" btn btn-ui" onClick={restartQuiz}>Restart Quiz</button>
    </>
  );
};

export default FinishedScreen;
