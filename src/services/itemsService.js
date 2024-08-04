import restfulApi from '../api/restful-api.js';

const getItems = async () => {
  try {
    return await restfulApi();
  } catch (error) {
    throw error;
  }
};

const getItemById = async (id) => {
  try {
    return await restfulApi(`/${id}`);
  } catch (error) {
    throw error;
  }
};

const createItem = async (body) => {
  try {
    return await restfulApi('', { method: 'POST', body: JSON.stringify(body) });
  } catch (error) {
    throw error;
  }
};

const updateItem = async (id, body) => {
  try {
    return await restfulApi(`/${id}`, { method: 'PATCH', body: JSON.stringify(body) });
  } catch (error) {
    throw error;
  }
};

const deleteItem = async (id) => {
  try {
    return await restfulApi(`/${id}`, { method: 'DELETE' });
  } catch (error) {
    throw error;
  }
};

export default { getItems, getItemById, createItem, updateItem, deleteItem };
