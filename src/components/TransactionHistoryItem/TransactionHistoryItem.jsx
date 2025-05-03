const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <>
      <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

export default TransactionHistoryItem;
