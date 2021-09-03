export const BASE_URL =
  process.env.NODE.ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api'
