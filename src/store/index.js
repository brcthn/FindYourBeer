import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


// const state={
// // message:'hello',
// // username:'burcu',
// users:[]
// };
// const getters={ 
//     welcomeMessage(state){
//     return `${state.message} ${state.username}`;
//     }
// };
// const mutations={
//     setUserName(state,name){
//         state.username=name;
//     }
// };
// const actions={ 
//    fetchusers({commit},{name}){
//        get("https://ubiqum-cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/styles?&key=24793aca3a39bdbe91b064596cd94545")
//         .then((response)=>{
//             commit("fetchusers",response.body);
            
//         }
       
//        {
//             await applicationCache.get();
//             commit()
//         }
//     }
// updateUserName({commit},name){
//     commit('setUserName',name);
// }

// const store =new Vuex.Store({
// state,
// getters,
// mutations,
// actions,
// })

// export default store;