// 重写alert
window.alert = (str) => {
    postToVue({type: "alert", content: str});
};

function postToVue(data) {
    window.parent.postMessage(data, "*");
}

const trigger = (data) => {
    const content = JSON.parse(data);
    const e = eval(content.name);
    new e(content.params);
};

// event
var eventTypeReflect = {trigger};

function receiveFromVue(cb) {
    window.addEventListener("message", function (res) {
        const {type, content} = res.data;
        // this.eventTyeReflect[type]?.(content)  ?.有这个方法就执行
        return this.eventTypeReflect[type]?.(content) || cb?.(res.data);
    });
}
