import { useState } from 'react';
import './App.css';
import TodoApp from './programs/TodoApp';
import WeatherApp from './programs/WeatherApp';
import TicTacToe from './programs/TicTacToe';
import ChatApp from './programs/ChatApp';
import ShoppingCart from './programs/ShoppingCart';

export default function App() {
  const [activeApp, setActiveApp] = useState(0);

  const apps = [
    { name: 'Todo App', component: TodoApp },
    { name: 'Tic Tac Toe', component: TicTacToe },
    { name: 'Weather', component: WeatherApp },
    { name: 'Chat', component: ChatApp },
    { name: 'Shopping', component: ShoppingCart },
  ];

  const ActiveComponent = apps[activeApp].component;

  return (
    <div className="app-full-container">
      <div className="top-nav">
        <h1>🎨 React Apps</h1>
        <div className="app-buttons">
          {apps.map((app, index) => (
            <button
              key={index}
              className={`app-tab ${activeApp === index ? 'active' : ''}`}
              onClick={() => setActiveApp(index)}
            >
              {app.name}
            </button>
          ))}
        </div>
      </div>
      
      <main className="full-content">
        <ActiveComponent />
      </main>
    </div>
  );
}
