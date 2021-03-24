import { sendNotification } from './notifications.js';
import express from 'express';
import ExpressPromiseRouter from 'express-promise-router';
import { getKey, setKey, getUsers } from './keys.js';

// import https from 'https';

const app = express();
const router = new ExpressPromiseRouter();

router.post('/register', async (req, res) => {
  if (!req.body.userId || !req.body.key) {
    res.sendStatus(400, 'Missing userId or key');
    return;
  }
  setKey(req.body.userId, req.body.key);
});

router.post('/notify', async (req, res) => {
  if (!req.body.userId || !req.body.notification) {
    res.sendStatus(400, 'Missing userId or key');
    return;
  }
  const key = getKey(req.body.userId);
  await sendNotification(key, req.body.notification);
  res.sendStatus(200);
});

router.get('/users', async (req, res) => {
  res.json(getUsers());
});


app.use(router);

app.listen(31337);
// https.createServer({
//   key: fs.readFileSync('secrets/server.key'),
//   cert: fs.readFileSync('secrets/server.cert'),
// }, app).listen(31337);
