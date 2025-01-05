import { UserRepository } from '../repositories/user.repository';
import constants from '../constants';

export class UserService {
  private userRepository = new UserRepository();

  async createUser(userData: { name: string; identification_number: string; email: string; referral_email?: string }) {
    let { identification_number, email } = userData;
    let status: string = constants.STATUS.success;
    let message: string = '';
    let newUser: any;

    if (await this.userRepository.existsByIdentificationOrEmail(identification_number, email)) {
      status = constants.STATUS.badRequest;
      message = constants.MESSAGES.invalidUser;
    } else {
      newUser = await this.userRepository.create(userData);
      message = constants.MESSAGES.createdUser;
    }

    return { status, message, newUser };
  }

  async getUserWithReferrals(userId: number) {
    return this.userRepository.getUserWithReferrals(userId);
  }
}
