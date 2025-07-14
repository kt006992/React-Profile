export default async function handler(req, res) {
  const SUPABASE_URL = process.env.DATABASE_URL;
  const SUPABASE_KEY = process.env.DATABASE_KEY;


  const url = `${SUPABASE_URL}/rest/v1/events`;

  const response = await fetch(url, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const text = await response.text();
    return res.status(response.status).json({ error: text });
  }

  const data = await response.json();
  res.status(200).json(data);
}
