import cache from '../services/cacheService.js';

const getCache = (req, res) => {
  const { key } = req.params;
  const value = cache.get(key);

  if (value) {
    res.send({ key, value });
  } else {
    res.status(404).json({ message: 'Данные не найдены в кеше' });
  }
};

const updateCache = (req, res) => {
  const { key } = req.params;
  const { value } = req.body;
  if (value) {
    cache.set(key, value);
    res.send({ key, value });
  } else {
    res.status(400).json({ message: 'Некорректные данные в запросе!' });
  }
};

const clearCache = (_, res) => {
  cache.clear();
  res.json({ message: 'Кеш очищен' });
};

const resizeCache = (req, res) => {
  const { size } = req.body;

  if (!size && typeof size !== 'number') {
    return res.status(400).json({ message: 'size: должен быть числом' });
  }

  cache.resize(size);
  res.json({ message: `Размер кеша изменен на ${size}` });
};

export default { getCache, updateCache, clearCache, resizeCache };
