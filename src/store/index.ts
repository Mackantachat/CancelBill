import { createStore } from 'vuex'

interface State{
    nuuser_id: string,
    fullname: string,
    timeStamp: string,
    Loading: boolean
}
export default createStore<State>({
  state: {
    nuuser_id: '',
    fullname: '',
    timeStamp: '',
    Loading: false
  },
  getters: {
  },
  mutations: {
    CheckExpried(state) {
      //if(state.timeStamp > timeNow){
      setTimeout(function () {
      }, parseInt(state.timeStamp) - parseInt(new Date().getTime().toString()));
      // state.isExpried = true
      // this.Logout();
      //}
    },
    Logout(state) {
      state.nuuser_id = '';
      state.fullname = '';
      state.timeStamp = '';
      localStorage.removeItem("N_USERID");
      localStorage.removeItem("FULLNAME");
      localStorage.removeItem("TokenId");
      window.open(process.env.VUE_APP_URL_LOGIN, '_self')
    }
  },
  actions: {
  },
  modules: {
  }
})
