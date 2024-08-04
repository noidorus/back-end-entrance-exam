import restfulApi from '../api/restful-api.js';

/**
 * Получение списка всех предметов
 * @returns {Promise<{id: string, name: string, data: {[key: string]: string} | null}[]>}
 */
const getItems = async () => {
  try {
    return await restfulApi();
  } catch (error) {
    throw error;
  }
};

/**
 * Получение данных по ID
 * @param {string} id
 * @returns {Promise<{id: string, name: string, data: {[key: string]: string} | null}>}
 */
const getItemById = async (id) => {
  try {
    return await restfulApi(`/${id}`);
  } catch (error) {
    throw error;
  }
};

/**
 * Создание нового предмета
 * @param {{name: string, data?: {[key: string]: string}}} body
 * @returns {Promise<{id: string, name: string, data: {[key: string]: string} | null}>}
 */
const createItem = async (body) => {
  try {
    return await restfulApi('', { method: 'POST', body: JSON.stringify(body) });
  } catch (error) {
    throw error;
  }
};

/**
 * Обновление предмета
 * @param {string} id
 * @param {object} body
 * @returns {Promise<any>}
 */
const updateItem = async (id, body) => {
  try {
    return await restfulApi(`/${id}`, { method: 'PATCH', body: JSON.stringify(body) });
  } catch (error) {
    throw error;
  }
};

/**
 * Удаление предмета из API
 * @param {string} id
 * @returns {Promise<any>}
 */
const deleteItem = async (id) => {
  try {
    return await restfulApi(`/${id}`, { method: 'DELETE' });
  } catch (error) {
    throw error;
  }
};

export default { getItems, getItemById, createItem, updateItem, deleteItem };
