const TransactionList = ({ transactions }) => {
  // Calculate the total balance using forEach
  let totalBalance = 0;
  transactions.forEach(transaction => {
      if (transaction.type === 'deposit') {
          totalBalance += transaction.amount;
      } else {
          totalBalance -= transaction.amount;
      }
  });

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
                  <div className={`total-balance ${totalBalance >= 0 ? 'positive' : 'negative'}`}>
                      Total Balance: ${totalBalance.toFixed(2)}
                  </div>
              </>
          )}
      </div>
  );
};

export default TransactionList;