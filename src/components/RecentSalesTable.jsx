import React from 'react';

const RecentSalesTable = ({ sales }) => {
  return (
    <div className="table-container">
      <div className="table">
        <div className="table-header">
          <h3 className="table-title">Recent Ticket Sales</h3>
          <button className="table-see-more">
            See More →
          </button>
        </div>
        
        <div>
          <div className="table-header-row">
            <div className="table-header-cell">Order ID</div>
            <div className="table-header-cell">Event</div>
            <div className="table-header-cell">Customer Name</div>
            <div className="table-header-cell">Order Date</div>
            <div className="table-header-cell">Order Status</div>
          </div>
          {sales.map((sale, index) => (
            <div key={index} className="table-row">
              <div className="table-cell">{sale.id}</div>
              <div className="table-cell">{sale.event}</div>
              <div className="table-cell">{sale.customer}</div>
              <div className="table-cell date">{sale.date}</div>
              <div className="table-cell">
                <span className={`status-badge ${sale.status === 'Processing' ? 'status-processing' : 'status-fraud'}`}>
                  {sale.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentSalesTable;