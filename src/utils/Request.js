export const get = async ({ url, params }) => {
	try {
		const res = await require(`@/dataBase/${url}`).get(params);
		console.log(res)
		return Promise.resolve(res);
	} catch (err) {
		return Promise.reject(err);
	}
}

export const post = async ({url,params}) => {
	try{
		const res = await require(`@/dataBase/${url}`).post(params);
		return Promise.resolve(res);
	}catch(err){
		return Promise.reject(err);
	}
}