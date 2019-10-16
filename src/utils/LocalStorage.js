/* localStorage操作
 * 作者：平原
 * 创建：2017-11-22 */

const localStorage = window.localStorage;
const SOTRAGE_PREFIX = 'wangjingxu_blog';

export const storageSet = (key, value) => {
  try {
    if (key && value) {
      value = JSON.stringify(value);
      value = window.Base64.encode(value);
      value = encodeURIComponent(value);
    }
    localStorage[`${SOTRAGE_PREFIX}:${key}`] = value;
  } catch (err) {
    console.error('storage set error:', err);
  }
};

export const storageGet = (key) => {
  try {
    let value = localStorage[`${SOTRAGE_PREFIX}:${key}`];
    if (value && value !== 'null' && value !== 'undefined') {
      value = decodeURIComponent(value);
      value = window.Base64.decode(value);
      value = JSON.parse(value);
    }
    return value;
  } catch (err) {
    console.error('storage get error:', err);
    return null;
  }
};

export const storageRemove = (key) => {
  localStorage.removeItem(`${SOTRAGE_PREFIX}:${key}`);
};

export const storageClear = () => {
  localStorage.clear();
};
