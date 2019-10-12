import { post } from '@/utils/Request.js'

export default async ({ username, password }) => {
  try{
    const res = await post({
      url: 'PostLogin',
      params: {
        username,
        password,
      }
    });
    return Promise.resolve(res)
  }catch(err){
    return Promise.reject(err)
  }
}
