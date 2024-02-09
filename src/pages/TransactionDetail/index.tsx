import { useParams } from "react-router-dom";

const TransactionDetail = () => {
  const { transactionId } = useParams();

  return <div>Transaction ID: {transactionId}</div>;
};

export default TransactionDetail;
