import express from 'express';
import itemsController from '../controllers/itemsController.js';
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Items
 *   description: Операции с ресурсом "items"
 */

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Получить список всех элементов
 *     tags:
 *       - Items
 *     responses:
 *       200:
 *         description: Список всех элементов
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "1"
 *                       name:
 *                         type: string
 *                         example: "Item 1"
 *                       data:
 *                         type: object
 *                         additionalProperties:
 *                           type: string
 *                         example: {
 *                           "key": "value",
 *                         }
 */
router.get('/', itemsController.getItems);

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Получить элемент по ID
 *     tags:
 *       - Items
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Запрашиваемый элемент
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 name:
 *                   type: string
 *                   example: "Item 1"
 *                 data:
 *                   type: object
 *                   additionalProperties:
 *                     type: string
 *                   example: {
 *                     "key": "value",
 *                     "key2": "value2",
 *                     "key3": "value3"
 *                   }
 */
router.get('/:id', itemsController.getItemById);

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Создать новый элемент
 *     tags:
 *       - Items
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "1"
 *               name:
 *                 type: string
 *                 example: "Item 1"
 *               data:
 *                 type: object
 *                 additionalProperties:
 *                   type: string
 *               example: {
 *                 "key": "value",
 *                 "key2": "value2",
 *                 "key3": "value3"
 *               }
 *     responses:
 *       201:
 *         description: Созданная запись
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "1"
 *                 name:
 *                   type: string
 *                   example: "Item 1"
 *                 data:
 *                   type: object
 *                   additionalProperties:
 *                     type: string
 *                   example: {
 *                     "key": "value",
 *                     "key2": "value2",
 *                     "key3": "value3"
 *                   }
 *                 createdAt:
 *                   type: string
 *                   format: date
 *                   example: "2024-08-04T16:31:23.734+00:00"
 */
router.post('/', itemsController.createItem);

/**
 * @swagger
 * /{id}:
 *   patch:
 *     summary: Обновить элемент по ID
 *     tags:
 *       - Items
 *     parameters:
 *       - name: id
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
 *               name:
 *                 type: string
 *                 example: "New Item 1"
 *     responses:
 *       200:
 *         description: Обновленная запись
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 item:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "1"
 *                     name:
 *                       type: string
 *                       example: "New Item 1"
 *                     data:
 *                       type: object
 *                       additionalProperties:
 *                         type: string
 *                       example: {
 *                         "key": "value",
 *                         "key2": "value2",
 *                         "key3": "value3"
 *                       }
 *                     updatedAt:
 *                       type: string
 *                       format: date
 *                       example: "2024-08-04T16:31:23.734+00:00"
 */
router.patch('/:id', itemsController.updateItem);

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Удалить элемент по ID
 *     tags:
 *       - Items
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Успешное удаление записи
 */
router.delete('/:id', itemsController.deleteItem);

export default router;
