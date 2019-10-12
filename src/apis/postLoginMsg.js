import { post } from '@/utils/Request.js'

export default async ({ type }) => {
  try{
    const res = await post({
      url: 'LoginMsg',
      params: {
        type,
      }
    });
    return Promise.resolve(res)
  }catch(err){
    return Promise.reject(err)
  }
}