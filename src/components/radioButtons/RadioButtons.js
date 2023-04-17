import "./style.css";

const RadioButton = ({ radioValue, setData, data }) => {
  function radioHandler(event) {
    setData((data) => {
      return { ...data, selectedTip: parseInt(event.target.value), customTip: 0 };
    });
  }

  return (
    <>
      <input type="radio" name="tip-radio" value={radioValue} className="radio__tip" id={`tip_${radioValue}`} onChange={radioHandler} />
      <label for={`tip_${radioValue}`} className="radio__label">
        <span className="tip__digit">{`${radioValue}%`}</span>
      </label>
    </>
  );
};

export default RadioButton;
