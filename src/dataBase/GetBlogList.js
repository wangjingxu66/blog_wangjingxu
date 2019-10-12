const blogList = {
  'frontend_blog': [
    {
      date: '2019-09-01',
      title: 'Webpack与Gulp的区别',
      remark: '重要',
      id: 1,
    },
    {
      date: '2019-09-02',
      title: 'git命令',
      remark: '重要',
      id: 2,
    },
  ],

  'server_blog': [
    {
      date: '2018-07-01',
      title: '服务端搭建Nginx',
      remark: '很重要',
      id: 3,
    },
    {
      date: '2018-04-02',
      title: '服务端学习',
      remark: '重要',
      id: 4,
    },
  ],
};

// ################### 声明异步方法 start ##########################
// promise隐式声明
export const get = async ({ type }) => {
  await setTimeout(null, 300);
  if (blogList[type]) {
    return Promise.resolve({
      code: 200,
      data: blogList[type],
    });
  } else {
    return Promise.reject({
      code: 0,
      msg: '未找到所查的列表',
    });
  }
};

// promise显式声明
export const post = ({ type }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type) {
        return resolve('true');
      } else {
        return reject('false');
      }

    });
  });
};
// ################### 声明异步方法 end ##########################

// ################### 调用异步方法 start ##########################
// 调用方式：异步回调形式
const exampleA = () => {
  post({ type: 123 })
    .then((res) => {
      console.log(res); // 'true'
    })
    .catch((err) => {
      console.log(err); // 'false'
    });
}

// 调用方式：同步形式
const exampleB = async () => {
  try {
    const res = await post({ type: 123 });
    console.log(res)
  } catch (err) {
    console.log(err);
  }
}
// ################### 调用异步方法 end ##########################
