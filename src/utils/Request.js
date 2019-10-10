export const get = async ({ url, params }) => {
	try {
		const res = await require(`@/dataBase/${url}`).get(params);
		return Promise.resolve(res);
	} catch (err) {
		return Promise.reject(err);
	}
}
