export default {
  state: {
    userInfo: {
      name: "测试用户0",
      age: 20,
      sex: "男",
      id: "138-1438-9438",
      nickName: "毅山霸",
      role: "admin",
      token: true
    },
    userRoute: [],
  },
  mutations: {
    setuserInfo(state, value) {
      if (value == '15083863811') {
        state.userInfo = {
          name: "测试用户0",
          age: 20,
          sex: "男",
          id: "138-1438-9438",
          nickName: "毅山霸",
          role: "admin",
          token: true
        };
      } else {
        state.userInfo = {
          name: "测试用户1",
          age: 18,
          sex: "女",
          id: "127-9127-1827",
          nickName: "姚爱气",
          role: "user",
          token: true
        };
      }
    },
    setUserRoute(state, value) {
      state.userRoute = value
    }
  }
};
