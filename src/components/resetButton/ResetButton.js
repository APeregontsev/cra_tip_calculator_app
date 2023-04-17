import "./style.css";

const ResetButton = ({ setData }) => {
  function resetButtonHandler() {
    setData((data) => {
      return { ...data, bill: 0, customTip: 0, selectedTip: 0, numberOfPeople: 0 };
    });
  }

  return (
    <button className="reset" onClick={resetButtonHandler}>
      Reset
    </button>
  );
};

export default ResetButton;
