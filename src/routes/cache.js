import express from 'express';
import cache from '../services/cache.js';
const router = express.Router();

/**
 * Получение данных с проверкой наличия в кеше
 */
router.route('/:key').get((req, res) => {
  const { key } = req.params;
  const value = cache.get(key);

  if (value) {
    res.send({ data: { key, value }, message: 'Данные найдены в кеше' });
  } else {
    res.status(404).json({ message: 'Данные не найдены в кеше' });
  }
});

/**
 * Обновление данных в кеше
 */
router.put('/:key', (req, res) => {
  const { key } = req.params;
  const { value } = req.body;

  if (value) {
    cache.set(key, value);
    res.send({ data: { key, value }, message: 'Данные обновлены в кеше' });
  } else {
    res.status(449).json({ message: 'Некорректные данные в запросе!' });
  }
});

/**
 * Очистка кеша
 */
router.delete('/', (_, res) => {
  cache.clear();
  res.json({ message: 'Кеш очищен' });
});

/**
 * Изменение размера кеша
 */
router.patch('/size', (req, res) => {
  const newSize = req.body.size;
  if (!newSize && typeof newSize !== 'number') {
    return res.status(449).json({ message: 'Некорректные данные в запросе!' });
  }
  cache.resize(newSize);
  res.json({ message: `Размер кеша изменен на ${newSize}` });
});

export default router;
