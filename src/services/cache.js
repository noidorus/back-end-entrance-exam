import CacheItem from '../models/cacheItem.js';

class Cache {
  constructor(maxSize = 100) {
    this.cache = new Map();
    this.maxSize = maxSize;
  }

  /**
   * Проверка наличия данных в кеше
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    return this.cache.has(key);
  }

  /**
   * Получение данных из кеша
   * @param {string} key
   * @returns {*}
   */
  get(key) {
    return this.cache.has(key) ? this.cache.get(key).value : null;
  }

  /**
   * Добавление новых данных в кеш
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, new CacheItem(key, value));
  }

  /**
   * Очистка кеша
   */
  clear() {
    this.cache.clear();
  }

  /**
   * Изменение размера кеша
   * @param {number} newSize
   */
  resize(newSize) {
    this.maxSize = newSize;
  }
}

const cache = new Cache();
export default cache;
