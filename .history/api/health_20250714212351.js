export default async function handler(req, res) {
  const SUPABASE_URL = process.env.DATABASE_URL;
  const SUPABASE_KEY = process.env.DATABASE_KEY;

  console.log('🔍 健康检查...');

  const response = await fetch(`${SUPABASE_URL}/rest/v1/`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
  });

  const status = response.ok ? 'connected' : 'error';

  res.status(200).json({
    status: 'healthy',
    database: status,
    server_time: new Date().toISOString(),
  });
}
