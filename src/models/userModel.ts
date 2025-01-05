import prisma from "../prisma/client";

export const createUserInDB = async (userData: {
  name: string;
  identification_number: string;
  email: string;
  referral_email?: string;
}) => {
  return await prisma.user.create({
    data: userData,
  });
};
