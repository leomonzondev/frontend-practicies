import nc from 'next-connect';
import Product from '../../models/Product';

import db from '../../utils/db';
import { productos } from '../../components/tienda/data';
import User from 'models/User';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(productos);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;