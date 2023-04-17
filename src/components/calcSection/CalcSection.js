import RadioButton from "../radioButtons/RadioButtons";
import "./style.css";
import { useEffect } from "react";
import minMaxInput from "./../../utils/minMaxInput.js";

const CalcSection = ({ data, setData }) => {
  // Стиль для выделения input'а у которого есть значение
  const outLineStyle = { outline: "2px solid #a0e8df" };

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Обрабатываем Inputs

  function billInputHandler(event) {
    let value = minMaxInput(event);
    setData((data) => {
      return { ...data, bill: parseInt(value) };
    });
  }

  function customInputHandler(event) {
    let value = minMaxInput(event);
    setData((data) => {
      return { ...data, customTip: parseInt(value), selectedTip: 0 };
    });
  }

  function peopleInputHandler(event) {
    let value = minMaxInput(event);
    setData((data) => {
      return { ...data, numberOfPeople: parseInt(value) };
    });
  }

  return (
    <div className="calc-section">
      <div className="bill">
        <h3 className="bill--title">Bill</h3>
        <input
          type="number"
          min="0"
          max="9999"
          placeholder="0"
          style={data.bill > 0 ? outLineStyle : null}
          className="bill--input"
          value={data.bill === 0 ? "" : data.bill}
          onChange={billInputHandler}
        />
      </div>

      <div className="select-tip">
        <h3 className="select-tip--title">Select Tip %</h3>

        <div className="radio-inputs">
          {data.tip.map((radio) => {
            return <RadioButton key={radio} radioValue={radio} setData={setData} data={data} />;
          })}

          <input
            type="number"
            min="0"
            max="99"
            placeholder="Custom"
            style={data.customTip > 0 ? outLineStyle : null}
            className="tip--input"
            value={data.customTip === 0 ? "" : data.customTip}
            onChange={customInputHandler}
          />
        </div>
      </div>

      <div className="number-of-peple">
        <h3 className="number-of--title">
          Number of People
          <p className={"zero--title" + data.numberOfPeople > 0 ? "none" : ""}>Can't be zero</p>
        </h3>

        <input
          type="number"
          min="0"
          max="99"
          placeholder="0"
          style={data.numberOfPeople > 0 ? outLineStyle : null}
          className={data.numberOfPeople > 0 ? "number-of-people--input" : "number-of-people--input warning"}
          value={data.numberOfPeople === 0 ? "" : data.numberOfPeople}
          onChange={peopleInputHandler}
        />
      </div>
    </div>
  );
};

export default CalcSection;
