const TransactionList = ({ transactions }) => {

    return (
      <div className="transactions">
        <h3>Transactions:</h3>
        {transactions.length === 0 ? (
          <p>No transactions yet</p>
        ) : (
          <>
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index} className={transaction.type}>
                  {transaction.type.toUpperCase()}: ${transaction.amount}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  };
  // JSX
  export default TransactionList;