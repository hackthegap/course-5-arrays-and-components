import TransactionList from './TransactionList';

const User = ({ user, onAddTransaction }) => {
  return (
    <div className="user-card">
      <h2>{user.firstName} {user.lastName}</h2>
      <TransactionList transactions={user.transactions} />
      
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