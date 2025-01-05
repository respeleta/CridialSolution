import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserRepository {
  async existsByIdentificationOrEmail(identification_number: string, email: string) {
    return Boolean(
      await prisma.user.findFirst({
        where: {
          OR: [{ identification_number }, { email }],
        },
      })
    );
  }

  async create(userData: { name: string; identification_number: string; email: string; referral_email?: string }) {
    let newUser = await prisma.user.create({
      data: userData,
    });

    // Si hay un referral_email, creamos la relación de referido
    if (userData.referral_email) {
      const referredUser = await prisma.user.findUnique({
        where: {
          email: userData.referral_email,
        },
      });

      if (referredUser) {
        await prisma.userReferral.create({
          data: {
            userid: referredUser.id,
            referreduserid: newUser.id,
          },
        });
      }
    }

    return newUser;
  }

  async getUserWithReferrals(userId: number) {
    let user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      include: {
        referrals: {
          select: {
            referredUser: {
              select: {
                id: true,
                identification_number: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });
    return user;
  }
}
