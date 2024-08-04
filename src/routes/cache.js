import express from 'express';
import cacheController from '../controllers/cacheController.js';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cache
 *   description: Операции с ресурсом "cache"
 */

/**
 * @swagger
 * /cache/{key}:
 *   get:
 *     summary: Получить данные из кеша
 *     tags:
 *       - Cache
 *     parameters:
 *       - name: key
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Данные из кеша
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 key:
 *                   type: string
 *                   example: "ad12"
 *                 value:
 *                   oneOf:
 *                     - type: object
 *                     - type: string
 *                     - type: array
 *                     - type: number
 *                   description: Значения для обновления в кеше
 */

router.get('/:key', cacheController.getCache);

/**
 * @swagger
 * /cache/{key}:
 *   put:
 *     summary: Обновление данных в кеше
 *     tags:
 *       - Cache
 *     parameters:
 *       - name: key
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                value:
 *                  oneOf:
 *                    - type: object
 *                    - type: string
 *                    - type: array
 *                    - type: number
 *                  description: Значения для обновления в кеше
 *     responses:
 *       200:
 *         description: Обновленные данные из кеша
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 key:
 *                   type: string
 *                   example: "ad12"
 *                 value:
 *                   oneOf:
 *                     - type: string
 *                     - type: object
 *                     - type: array
 *                     - type: number
 */
router.put('/:key', cacheController.updateCache);

/**
 * @swagger
 * /{key}:
 *   delete:
 *     summary: Удалить элемент по KEY
 *     tags:
 *       - Cache
 *     parameters:
 *       - name: key
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Успешное удаление записи
 */
router.delete('/', cacheController.clearCache);

/**
 * @swagger
 * /cache/size:
 *   patch:
 *     summary: Изменение размера кеша
 *     tags:
 *       - Cache
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                size:
 *                  type: number
 *                  description: Размер кеша
 *                  required: true
 *                  example: 100
 *     responses:
 *       200:
 *         description: Обновленные данные из кеша
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Размер кеша изменен на 100"
 */
router.patch('/size', cacheController.resizeCache);

export default router;
