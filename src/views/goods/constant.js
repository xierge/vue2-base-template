/*
 * @Date: 2023-08-05 09:39:42
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-08-07 00:42:32
 * @FilePath: /vue2-base-template/src/views/goods/constant.js
 * @description:
 */
export const COLLECTION_STEPS = [
  { title: "收藏集信息" },
  { title: "奖池信息" },
  { title: "提交审核" },
];

export const COLLECTION_RULES = {};

export const VALIDATE_INFOS = ({ nameError = "" }) => {
  const InfoValidator = async (rule, value, callback) => {
    if (!value) {
      return callback(new Error("名称不能为空"));
    } else if (nameError) {
      return callback(new Error(nameError));
    } else {
      callback();
    }
  };

  const ageValidator = (rule, value, callback) => {
    if (!value) {
      return callback(new Error("age11不能为空"));
    }
    callback();
  };

  const sexValidator = (rule, value, callback) => {
    if (!value) {
      return callback(new Error("sex不能为空"));
    }
    callback();
  };
  return {
    name: [{ validator: InfoValidator, trigger: "blur" }],
    age: [{ validator: ageValidator, trigger: "blur" }],
    sex: [{ validator: sexValidator, trigger: "blur" }],
  };
};
