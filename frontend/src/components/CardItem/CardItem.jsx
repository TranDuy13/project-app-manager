import "./CartItem.scss";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

function CartItem(props) {
  return (
    <div style={{background:"linear-gradient(to right bottom, rgb(0, 127, 255), rgb(178 0 136) 120%)"}} className="cardName">
      <div className="card">
        <div className="cardIcon">
          <CreditCardOutlinedIcon className="card-icon" />
        </div>
        <div className="cardSpace">
          <div className="space"></div>
          <ArrowDropUpOutlinedIcon className="popup" />
        </div>
        <div className="totalTime">{props.label}</div>
        <div className="totalTime-title">{props.tiTle}</div>
      </div>
    </div>
  );
}
export default CartItem;
