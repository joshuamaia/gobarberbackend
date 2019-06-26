import { Router } from 'express';
import User from './app/models/User';

const routes = Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Joshua Maia',
    email: 'joshuamaia@gmail.com',
    password_hash: '123',
  });

  return res.json(user);
});

export default routes;
