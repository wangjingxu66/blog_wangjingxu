import { get } from '@/utils/Request.js'

export default async ({ type }) => {
  try {
    const res = await get({
      url: 'BlogList',
      params: {
        type,
      },
    });
   return Promise.resolve(res)
  } catch (err) {
    console.log(err, '12345');
    return Promise.reject(err);
  }

}
