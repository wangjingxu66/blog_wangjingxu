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

export const get = async ({ type }) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (blogList[type]) {
        return resolve({
          code: 200,
          data: blogList[type],
        });
      } else {
        return reject({
          code: 0,
          msg: '未找到所查的列表'
        });
      }
    }, 300);
  });
};
