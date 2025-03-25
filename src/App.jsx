// App.jsx
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import User from './components/User';
import Backoffice from './pages/Backoffice';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    // (your users here, unchanged)
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
      {/* Navigation Menu */}
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/backoffice">Backoffice</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={
          <>
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
          </>
        } />
        <Route path="/backoffice" element={<Backoffice />} />
      </Routes>
    </div>
  );
}

export default App;
