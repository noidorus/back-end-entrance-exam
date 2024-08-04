import express from 'express';
import cacheRoutes from './cache.js';
import itemsRoutes from './items.js';

const router = express.Router();

router.use('/cache', cacheRoutes);
router.use('/items', itemsRoutes);

/**
 * @swagger
 *
 * /:
 *   get:
 *     summary: Проверка работоспособности API
 *     tags:
 *       - Info
 *     responses:
 *       200:
 *         description: Возвращает сообщение о работоспособности API
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Добро пожаловать в наше REST API!"
 */
router.get('/', (req, res) => {
  res.json({ message: 'Добро пожаловать в наше REST API!' });
});

export default router;
