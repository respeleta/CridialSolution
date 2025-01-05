import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());

app.use('/api/', userRoutes); //Agregar routes

export default server; // Exporta el servidor
