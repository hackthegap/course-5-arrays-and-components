import TransactionList from './TransactionList';

const User = ({ user, onAddTransaction }) => {
let totalBalance = 0;

user.transactions.array.forEach(myTransaction => {
    if(myTransaction.type == 'deposit'){
        totalBalance += myTransaction.amount;
    }else{
        totalBalance -= myTransaction.amount;
    }
}); 

  return (
    <div className="user-card">
      <h2>{user.firstName} {user.lastName}</h2>
      <TransactionList transactions={user.transactions} />
      here: ${totalBalance.toFixed(2)}
      <div className="transaction-actions">
        <button onClick={() => onAddTransaction(user.id, 'deposit', 100)}>
          Deposit $100
        </button>
        <button onClick={() => onAddTransaction(user.id, 'withdraw', 50)}>
          Withdraw $50
        </button>
      </div>
    </div>
  );
};

export default User;