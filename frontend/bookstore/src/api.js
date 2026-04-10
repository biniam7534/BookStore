// Central API base URL — uses the environment variable in production (Vercel),
// falls back to localhost for local development.
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://bookstore-j5bo.onrender.com';

export default API_BASE_URL;
