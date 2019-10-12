const loginMsg = {
  'wangjingxu' : [
    {
      username: 'wangjingxu',
      password: '123456'
    }
  ]
}

export const post = async ({ type }) => {
  await setTimeout(null,300);
    if (loginMsg[type].username === res.pramas.username && loginMsg[type].password === res.pramas.password) {
      console.log('验证正确')
      return Promise.resolve("验证正确");
    } else {
      console.log('验证错误')
      return Promise.reject("验证错误");
    }

};