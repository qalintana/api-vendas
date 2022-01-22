import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ProductsController from '../controllers/ProductsControllers';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.index);

productsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().required().precision(2),
      quantity: Joi.number().required(),
    },
  }),
  productsController.create,
);

productsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productsController.show,
);

productsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),

  productsController.delete,
);
productsRouter.put(
  '/:id',

  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required().uuid(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().required().precision(2),
      quantity: Joi.number().required(),
    },
  }),
  productsController.update,
);

export default productsRouter;
