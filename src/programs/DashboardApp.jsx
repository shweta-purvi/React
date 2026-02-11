import { useState } from 'react';
import './DashboardApp.css';

export default function DashboardApp() {
  const [stats] = useState([
    { label: 'Revenue', value: '₹125,480', icon: '💰', trend: '+12%', color: '#667eea' },
    { label: 'Users', value: '2,485', icon: '👥', trend: '+8%', color: '#4ecdc4' },
    { label: 'Orders', value: '1,234', icon: '📦', trend: '+15%', color: '#ff9f43' },
    { label: 'Growth', value: '34%', icon: '📈', trend: '+5%', color: '#22c55e' },
  ]);

  const chartData = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 50 },
    { month: 'Apr', value: 65 },
    { month: 'May', value: 75 },
    { month: 'Jun', value: 85 },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>📊 Dashboard</h1>
        <p>Welcome back! Here's your performance overview</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card" style={{ borderTopColor: stat.color }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <h3 className="stat-value">{stat.value}</h3>
              <span className="stat-trend" style={{ color: stat.color }}>
                ↑ {stat.trend} this month
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-row">
        <div className="chart-card">
          <h3>Monthly Revenue</h3>
          <div className="chart">
            {chartData.map((data, i) => (
              <div key={i} className="chart-bar-wrapper">
                <div 
                  className="chart-bar"
                  style={{ 
                    height: `${data.value * 2}px`,
                    background: `hsl(${i * 60}, 70%, 60%)`
                  }}
                ></div>
                <span className="chart-label">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="activity-card">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-icon">🛍️</span>
              <div className="activity-details">
                <p>New order received</p>
                <small>2 minutes ago</small>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">👤</span>
              <div className="activity-details">
                <p>New user signup</p>
                <small>15 minutes ago</small>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">💳</span>
              <div className="activity-details">
                <p>Payment received</p>
                <small>1 hour ago</small>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">📧</span>
              <div className="activity-details">
                <p>Email campaign sent</p>
                <small>3 hours ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
