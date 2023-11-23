import protect from 'static-auth';
import safeCompare from 'safe-compare';

const USER_NAME = process.env.USER_NAME || "admin";
const PASSWORD = process.env.PASSWORD || "admin";

const app = protect(
  '/',
  (username, password) => safeCompare(username, USER_NAME) && safeCompare(password, PASSWORD),
  {
    directory: "/dist",
    onAuthFailed: (res) => {
      res.end('Authentication failed')
    },
  }
)

export default app;