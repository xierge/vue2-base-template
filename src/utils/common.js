/*
 * @Descripttion:
 * @Author: lx
 * @Date: 2022-06-24 07:43:43
 * @LastEditTime: 2023-01-30 23:02:48
 */
import router from "../router";

export class Communication {
  iframeDOMs = [];
  cd = undefined;
  eventTypeReflect = {
    getData(key, that) {
      that.postToIframe({
        type: "getData",
        content: "取到的值",
      });
    },
    setData(key, value) {
      console.log(key, value);
    },
    changeHistory() {
      //引入路由 然后push
      router.push("/about");
    },

    // 等所有想要通信的type方法 都写在这个里面
  };

  constructor(iframeDOM, cb) {
    if (!this.iframeDOMs.includes(iframeDOM)) {
      this.iframeDOMs.push(iframeDOM);
    }
    this.cb = cb;
    this.receiveFromIframe();
  }

  receiveFromIframe = () => {
    window.addEventListener("message", this.temp(this));
  };

  temp = (res) => {
    // this指向会有问题的
    return () => {
      this.triggerMessage(res, this);
    };
  };

  triggerMessage = (res, that) => {
    const { type, content } = res.data;
    // this.eventTyeReflect[type]?.(content)  ?.有这个方法就执行
    return that.eventTypeReflect[type]?.(content, that) || that.cb?.(res.data);
  };

  postToIframe = (data) => {
    this.iframeDOMs.forEach((iframeDOM) =>
      iframeDOM.contentWindow.postMessage(data, "*")
    );
  };

  unbind = () => {
    window.removeEventListener("message", this.temp);
  };
}
