import { PrismaClient } from '@prisma/client';
import request from 'supertest';
import app from '../src/app';

// Mock de Prisma
jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      user: {
        create: jest.fn(),
        findUnique: jest.fn(),
        findFirst: jest.fn(), // Agregar findFirst al mock
      },
    })),
  };
});

const mockedPrisma = new PrismaClient();

describe('Cridial Solution Funcionalidad', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Limpia los mocks después de cada prueba
    app.close();
  });

  describe('POST /api/users', () => {
    it('Debería crear un nuevo usuario con éxito', async () => {
      mockedPrisma.user.create.mockResolvedValueOnce({
        id: 1,
        name: 'John Doe',
        identification_number: '123456789',
        email: 'john@example.com',
        referral_email: 'referrer@example.com',
      });

      const response = await request(app).post('/api/users').send({
        name: 'John Doe',
        identification_number: '123456789',
        email: 'john@example.com',
        referral_email: 'referrer@example.com',
      });

      expect(response.status).toBe(201);
    });
  });

  describe('GET /api/users/:id/referrals', () => {
    it('Debería devolver 404 si el usuario no existe', async () => {
      mockedPrisma.user.findUnique.mockResolvedValueOnce(null);

      const response = await request(app).get('/api/users/999/referrals');

      expect(response.status).toBe(404); // Código de error
      expect(response.body.message).toBe('Usuario no encontrado');
    });
  });
});
