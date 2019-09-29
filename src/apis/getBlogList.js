import { get } from '@/utils/Request.js'

export default ({ type }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await get({
        url: 'BlogList',
        params: {
          type,
        },
      });
      if (res.code === 200) {
        return resolve(res.data);
      } else {
        return reject(res);
      }
    } catch (err) {
      return reject(err);
    }
  });
}
