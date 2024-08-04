import itemsService from '../services/itemsService.js';
import cache from '../services/cacheService.js';

const getItems = async (_, res) => {
  try {
    const items = await itemsService.getItems();

    items.forEach((item) => {
      cache.set(item.id, item);
    });
    res.send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    if (cache.has(id)) {
      return res.send(cache.get(id));
    }

    const item = await itemsService.getItemById(id);

    cache.set(id, item);
    res.send(item);
  } catch (error) {
    res.status(404).send(error);
  }
};

const createItem = async (req, res) => {
  try {
    const item = await itemsService.createItem(req.body);
    cache.set(item.id, item);
    return res.status(201).send(item);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;

  try {
    const item = await itemsService.updateItem(id, req.body);
    cache.set(id, item);
    return res.send(item);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;

  try {
    await itemsService.deleteItem(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).send(error);
  }
};

export default { getItems, getItemById, createItem, updateItem, deleteItem };
