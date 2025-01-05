import express from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();
const userController = new UserController();

router.post('/users', userController.createUser); // Crear usuario
router.get('/users/:user_id/referrals', userController.getUserAndReferrals); // Obtener usuario y referidos

export default router;
