const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Supabase 配置
const SUPABASE_URL = process.env.DATABASE_URL;
const SUPABASE_KEY = process.env.DATABASE_KEY;

// 添加详细的错误处理中间件
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// 通用的 Supabase 请求函数
const fetchFromSupabase = async (tableName, orderBy = null) => {
    let url = `${SUPABASE_URL}/rest/v1/${tableName}`;
    
    if (orderBy) {
        url += `?order=${orderBy}`;
    }
    
    const response = await fetch(url, {
        headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json'
        }
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${await response.text()}`);
    }
    
    return await response.json();
};

// ✅ 获取所有 revenue
app.get('/api/revenues', asyncHandler(async (req, res) => {
    console.log('📊 请求 revenues 数据...');
    try {
        const data = await fetchFromSupabase('revenues', 'date.asc');
        console.log(`✅ 返回 ${data.length} 条 revenues 记录`);
        res.json(data);
    } catch (err) {
        console.error('❌ revenues 查询失败:', err.message);
        throw err;
    }
}));

// ✅ 获取所有 events
app.get('/api/events', asyncHandler(async (req, res) => {
    console.log('🎪 请求 events 数据...');
    try {
        const data = await fetchFromSupabase('events');
        console.log(`✅ 返回 ${data.length} 条 events 记录`);
        res.json(data);
    } catch (err) {
        console.error('❌ events 查询失败:', err.message);
        throw err;
    }
}));

// ✅ 获取 recent sales
app.get('/api/sales', asyncHandler(async (req, res) => {
    console.log('🛒 请求 sales 数据...');
    try {
        const data = await fetchFromSupabase('sales', 'date.desc');
        console.log(`✅ 返回 ${data.length} 条 sales 记录`);
        res.json(data);
    } catch (err) {
        console.error('❌ sales 查询失败:', err.message);
        throw err;
    }
}));

// 健康检查端点
app.get('/api/health', asyncHandler(async (req, res) => {
    try {
        // 测试 Supabase 连接
        const response = await fetch(`${SUPABASE_URL}/rest/v1/`, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`
            }
        });
        
        res.json({ 
            status: 'healthy', 
            database: 'connected',
            supabase_status: response.ok ? 'connected' : 'error',
            server_time: new Date().toISOString()
        });
    } catch (err) {
        res.status(500).json({ 
            status: 'unhealthy', 
            database: 'disconnected',
            error: err.message 
        });
    }
}));

// 错误处理中间件
app.use((err, req, res, next) => {
    console.error('🚨 服务器错误:', err);
    res.status(500).json({ 
        error: 'Internal Server Error',
        message: err.message,
        // 开发环境下返回堆栈信息
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
});

// 启动服务
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    console.log(`🔗 Supabase URL: ${SUPABASE_URL}`);
});