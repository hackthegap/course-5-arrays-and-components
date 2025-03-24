import { useState } from 'react';
import User from './components/User';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: 'Fabricio',
      lastName: 'Braga',
      transactions: [
        { type: 'deposit', amount: 100 },
        { type: 'withdraw', amount: 50 }
      ]
    },
    {
      id: 2,
      firstName: 'Mark',
      lastName: 'Cavendish',
      transactions: [
        { type: 'deposit', amount: 200 },
        { type: 'withdraw', amount: 75 },
        { type: 'deposit', amount: 150 }
      ]
    },
    {
      id: 3,
      firstName: 'Angela',
      lastName: 'Davis',
      transactions: [
        { type: 'deposit', amount: 500 },
        { type: 'withdraw', amount: 100 }
      ]
    },
    {
      id: 4,
      firstName: 'Betrand',
      lastName: 'Russel',
      transactions: []
    },
    {
      id: 5,
      firstName: 'Mike',
      lastName: 'Tyson',
      transactions: [
        { type: 'deposit', amount: 1000 }
      ]
    },
    {
      id: 6,
      firstName: 'Serena',
      lastName: 'Williams',
      transactions: [
        { type: 'withdraw', amount: 200 },
        { type: 'withdraw', amount: 50 }
      ]
    }
  ]);

  const addTransaction = (userId, type, amount) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          transactions: [...user.transactions, { type, amount }]
        };
      }
      return user;
    }));
  };

  return (
    <div className="app">
      <h1>Banking App</h1>
      <div className="user-grid">
        {users.map(user => (
          <User 
            key={user.id} 
            user={user} 
            onAddTransaction={addTransaction} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;