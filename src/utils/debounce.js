/*
 * @Descripttion:
 * @Author: lx
 * @Date: 2022-06-09 11:08:06
 * @LastEditTime: 2022-06-09 11:16:46
 */
export const debounce = (handle, wait) => {
  let timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      handle();
    }, wait);
  };
};

export const con = () => {
  console.log(111);
};
