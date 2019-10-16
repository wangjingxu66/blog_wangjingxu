import { storageGet, storageSet } from '../utils/LocalStorage';
import { blogList } from './GetBlogList';
import { userInfo } from './PostLogin';

export default {
  // 用户登录超时时间
  loginTimeout: 60000,

  init() {
    const _blogList = storageGet('blog_list');
    if (!_blogList) {
      storageSet('blog_list', blogList);
    }

    const _userInfo = storageGet('user_info');
    if (!_userInfo) {
      storageSet('user_info', userInfo);
    }

    this.tasks.forEach((taskName) => {
      this[taskName]();
    });
  },

  tasks: ['refreshLoginRecord'],

  refreshLoginRecord() {
    setInterval(() => {
      const loginRecord = storageGet('login_record') || {};
      const now = Date.now();
      Object.keys(loginRecord).forEach((key) => {
        const item = loginRecord[key];
        if (now - item.time > this.loginTimeout) {
          delete loginRecord[key];
        }
      });
      storageSet('login_record', loginRecord);
    }, 1000);
  }
};
