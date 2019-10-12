export const get = async ({ url, params }) => {
  try {
    const res = await require(`@/dataBase/${url}`).get(params);
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
}

export const post = ({ url, params }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await require(`@/dataBase/${url}`).post(params);
      return resolve(res);
    } catch (err) {
      return reject(err);
    }
  });
}

export const push = ({ url, params }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await require(`@/dataBase/${url}`).push(params);
      return resolve(res);
    } catch (err) {
      return reject(err);
    }
  });
}

export const post = async ({url,params}) => {
	try{
		const res = await require(`@/dataBase/${url}`).post(params);
		return Promise.resolve(res);
	}catch(err){
		return Promise.reject(err);
	}
}
