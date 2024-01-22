import { useParams } from "react-router-dom";
import ReceiptPage from "./ReceiptPage";

const ReceiptPageCont = () => {
  const { reference } = useParams();

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";

  const time =
    (hours % 12 || 12) +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    " " +
    amOrPm;

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date().toLocaleDateString(undefined, options);

  const data = JSON.parse(localStorage.getItem("refData"));
  return (
    <div className="w-full relative">
      <div className="w-full h-full absolute top-0 left-0">
        <ReceiptPage
          data={data}
          formattedDate={formattedDate}
          time={time}
          reference={reference}
        />
      </div>
    </div>
  );
};

export default ReceiptPageCont;
