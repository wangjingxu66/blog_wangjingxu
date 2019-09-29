export const get = ({ url, params }) => {
  return new Promise(async (resolve, reject) => {
      require(`@/dataBase/${ url }`).get(params).then((res) => {
        return resolve(res);
      }).catch((err) => {
        return reject(err);
      })
  });
}
