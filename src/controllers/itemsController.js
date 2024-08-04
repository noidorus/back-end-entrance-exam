import itemsService from '../services/itemsService.js';
import cache from '../services/cacheService.js';

const getItems = async (_, res) => {
  try {
    const maps = await itemsService.getItems();
    res.send(maps);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const map = await itemsService.getItemById(id);
    res.send(map);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createItem = async (req, res) => {
  try {
    const createdMap = await itemsService.createItem(req.body);
    return res.send(createdMap);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedItem = await itemsService.updateItem(id, req.body);
    return res.send(updatedItem);
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
