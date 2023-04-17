import ResetButton from "../resetButton/ResetButton";
import "./style.css";

const DisplaySection = ({ data, setData }) => {
  return (
    <div className="display-section">
      <div className="tip-amount-block">
        <div className="amount--text">
          <h3 className="tip-amount-title">Tip Amount</h3>
          <p className="tip-amount-text">/ person</p>
        </div>

        <div className="amount-digit">
          {data.getTipAmountPerPerson() > 0
            ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 1 }).format(data.getTipAmountPerPerson())
            : "$0.00"}
        </div>
      </div>

      <div className="total-block">
        <div className="total--text">
          <h3 className="total-amount-title">Total</h3>
          <p className="total-amount-text">/ person</p>
        </div>

        <div className="total-digit">
          {data.getTotal() > 0
            ? new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 1 }).format(data.getTotal())
            : "$0.00"}
        </div>
      </div>

      <ResetButton setData={setData} />
    </div>
  );
};

export default DisplaySection;
