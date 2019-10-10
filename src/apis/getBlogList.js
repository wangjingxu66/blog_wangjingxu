import { get } from '@/utils/Request.js'

export default async ({ type }) => {
  try {
    const res = await get({
      url: 'BlogList',
      params: {
        type,
      },
    });
    console.log(res)
    if(res.code === 200){
      return Promise.resolve(res.data);
    }else{
      return Promise.reject(res);
    }
  } catch (err) {
    console.log(err, '12345');
    return Promise.reject(err);
  }

}
