/*
 * @Date: 2023-08-04 23:18:08
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-08-06 23:46:25
 * @FilePath: /vue2-base-template/src/store/modules/goods.js
 * @description:
 */
const goods = {
  namespaced: true,
  state: {
    step: 1,
    formInstance: "",
    form: {
      name: "",
      sex: "",
      age: "",
    },
    nextBtnDisabled: true,
    validateError: {
      nameError: "",
    },
  },
  mutations: {
    changeStep(state, payload) {
      state.step += payload;
    },
    setFormInstance(state, payload) {
      state.formInstance = payload;
    },
    setNextBtnDisabled(state, payload) {
      state.nextBtnDisabled = payload;
    },
    setValidateError(state, payload) {
      state.validateError = { ...state.validateError, ...payload };
    },
  },
};

export default goods;
