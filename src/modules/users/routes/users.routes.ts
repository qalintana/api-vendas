import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import UsersController from '../controllers/UsersController';

const userRouter = Router();
const usersController = new UsersController();

userRouter.get('/', usersController.index);
userRouter.get('/', usersController.index);

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

export default userRouter;