import protect from 'static-auth';
import safeCompare from 'safe-compare';
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;

const app = protect(
  '/',
  (username, password) => safeCompare(username, USER_NAME) && safeCompare(password, PASSWORD),
  {
    directory: `${__dirname}/dist`,
    onAuthFailed: (res) => {
      res.end('Authentication failed')
    },
  }
)

export default app;