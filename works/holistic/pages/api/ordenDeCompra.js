import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import config from 'utils/config'; 
import client from 'utils/client'; 

const handler = nc();

handler.post(async (req, res) => {
  const projectId = config.projectId;
  const dataset = config.dataset;
  const tokenWithWriteAccess = process.env.SANITY_AUTH_TOKEN;
  const createMutations = [
    {
      create: {
        _type: 'ordenes',
        fullName: req.body.fullName,
        address: req.body.address,
        city: req.body.city,
        postalCode:req.body.postalCode,
        email: req.body.email,

        estado: req.body.estado,
        productos:req.body.productos,
      },
    },
  ];
  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    { mutations: createMutations },
    {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  );
});

export default handler;