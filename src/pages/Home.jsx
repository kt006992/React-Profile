import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatCard from '../components/StatCard';
import { LineChart, BarChart, EventList } from '../components/Charts';
import RecentSalesTable from '../components/RecentSalesTable';
import useDashboardData from '../hooks/useDashboardData';
import './Home.css';

const Home = () => {
  const { data, loading, error } = useDashboardData();

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        
        <div className="dashboard">
          {/* Statistics Card */}
          <div className="stats-grid">
            <StatCard title="Ticket Revenue Over Time" value="$4500">
              <LineChart data={data.revenues} />
            </StatCard>

            <StatCard title="7d Tickets Sold" value="210">
              <BarChart data={[25, 45, 42, 48, 46, 35, 28]} />
            </StatCard>

            <StatCard title="Tickets sold by Event" value="1417">
              <EventList events={data.events} />
            </StatCard>
          </div>

          {/* Recent Sales Table */}
          <RecentSalesTable sales={data.sales} />
        </div>
      </div>
    </div>
  );
};

export default Home;