import { useState, useEffect } from 'react';

const useDashboardData = () => {
  const [data, setData] = useState({
    revenues: [],
    events: [],
    sales: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // 并行请求所有数据
        const [revenuesRes, eventsRes, salesRes] = await Promise.all([
          fetch('/api/revenues'),
          fetch('/api/events'),
          fetch('/api/sales')
        ]);

        const [revenues, events, sales] = await Promise.all([
          revenuesRes.json(),
          eventsRes.json(),
          salesRes.json()
        ]);

        setData({ revenues, events, sales });
      } catch (err) {
        setError(err.message);
        console.error('获取数据失败:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useDashboardData;