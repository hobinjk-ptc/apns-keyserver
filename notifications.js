import { APNS, BasicNotification } from 'apns2';

const client = new APNS({
  team: 'TFLPsomething',
  keyId: '123Asomething',
  signingKey: fs.readFileSync('secrets/auth.p8'),
  defaultTopic: 'com.tablelist.Tablelist'
})

async function sendNotification(key, notification) {
  const bn = new BasicNotification(key, notification);
  await client.send(bn);
}

export default {
  sendNotification,
}
