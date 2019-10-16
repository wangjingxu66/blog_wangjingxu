import { storageSet, storageGet } from '../utils/LocalStorage';
import { waiting } from "../utils/Timer";

export const userInfo = {
  'wangjingxu': {
    username: 'wangjingxu',
    password: '123456'
  },

  'pingyuan': {
    username: 'pingyuan',
    password: 'pingyuan',
  },
};

const retryTimes = 3;
const retryTimesOutWaitTime = 5;

const userStateTemplate = {
  failedTimes: 0,
  locked: false,
  waitTime: 0,
  timer: null,
}

const userState = {
};

export const post = async ({ username, password }) => {
  await waiting(500);

  // 查询用户是否存在
  if (!userInfo[username]) {
    return Promise.reject({
      code: 400001,
      msg: '用户不存在',
    });
  }

  // 校验密码是否正确
  if (userInfo[username].password !== password) {
    // 记录错误日志
    if (!userState[username]) {
      userState[username] = Object.assign({}, userStateTemplate);
    }
    const _userState = userState[username];
    _userState.failedTimes++;

    // 错误次数超出限制
    if (_userState.failedTimes >= retryTimes) {
      // 锁定登录
      _userState.locked = true;
      // 锁定倒计时
      if (!_userState.timer) {
        _userState.waitTime = retryTimesOutWaitTime;
        _userState.timer = setInterval(() => {
          if (_userState.waitTime <= 1) {
            _userState.locked = false;
            _userState.failedTimes = 0;
            clearInterval(_userState.timer);
            _userState.timer = null;
          }
          _userState.waitTime--;
        }, 1000);
      }


      return Promise.reject({
        code: 40002,
        msg: '请求次数过多，请' + _userState.waitTime + '秒后重试',
      });
    }
    // 错误次数没有超出限制
    else {
      return Promise.reject({
        code: 40003,
        msg: '密码错误请重试，您还有' + (retryTimes - _userState.failedTimes) + '次重试机会',
      });
    }
  }

  // 密码校验成功
  else {
    const loginRecord = storageGet('login_record') || {};
    loginRecord[username] = {
      username,
      time: Date.now(),
    };
    console.log(loginRecord[username])
    storageSet(`login_record`, loginRecord);
    return Promise.resolve({
      code: 200,
      msg: '登录成功',
    });
  }
};
