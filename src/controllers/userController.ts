import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import constants from '../constants';

const userService = new UserService();

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      let { name, identification_number, email, referral_email } = req.body;
      let response = await userService.createUser({
        name,
        identification_number,
        email,
        referral_email,
      });

      switch (response.status) {
        case constants.STATUS.badRequest:
          return res.status(constants.STATUS.badRequestCode).json({ message: response.message });
          break;
        default:
          return res.status(constants.STATUS.successCodeCreated).json(response.newUser);
      }
    } catch (error) {
      console.error(error);
      return res.status(constants.STATUS.internalServerErrorCode).json({ message: constants.MESSAGES.serverError });
    }
  }

  async getUserAndReferrals(req: Request, res: Response) {
    try {
      let { user_id } = req.params;
      let userData = await userService.getUserWithReferrals(Number(user_id));

      if (!userData) {
        return res.status(constants.STATUS.notFoundCode).json({ message: constants.MESSAGES.notFound });
      } else {
        return res.status(constants.STATUS.successCode).json(userData);
      }
    } catch (error) {
      console.error(error);
      return res
        .status(constants.STATUS.internalServerErrorCode)
        .json({ message: constants.STATUS.internalServerError });
    }
  }
}
