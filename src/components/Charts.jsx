import React from 'react';

// 简单的折线图组件
export const LineChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  const maxValue = Math.max(...data.map(d => d.value));
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 200;
    const y = 60 - (d.value / maxValue) * 50;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="200" height="60" className="line-chart">
      <polyline
        points={points}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
      />
    </svg>
  );
};

// 条形图组件
export const BarChart = ({ data }) => {
  return (
    <div className="bar-chart">
      {data.map((height, i) => (
        <div
          key={i}
          className="bar-chart-bar"
          style={{ height: `${height}px` }}
        />
      ))}
    </div>
  );
};

// 事件列表组件
export const EventList = ({ events }) => {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <div key={index} className="event-item">
          <span className="event-name">{event.name}</span>
          <span className="event-count">{event.count}</span>
        </div>
      ))}
    </div>
  );
};