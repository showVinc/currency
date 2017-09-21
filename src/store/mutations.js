// mutations.js      //  改动store中各种状态的地方
export const getMsg = (state, payload) => {
  state.msg = payload.msg
}


export const getUserId = (state, payload) => {
  state.userId = payload.userId
}
