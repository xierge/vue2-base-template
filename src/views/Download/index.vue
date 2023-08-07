<!--
 * @Date: 2023-01-16 19:10:34
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-01-30 22:58:04
 * @FilePath: /xierge/src/views/Download/index.vue
 * @description: 
-->
<template>
  <div class="download">
    <div class="demo">
      <div class="title">单一文件上传 formdata格式</div>
      <div class="content">
        <Demo1 />
      </div>
    </div>
    <div class="demo">demo1</div>
    <div class="demo">demo1</div>
    <div class="demo">demo1</div>
    <div class="demo">demo1</div>
  </div>
</template>

<script>
import demo1 from "./demo1.vue";
export default {
  name: "downlaod-test",
  components: { Demo1: demo1 },
  data() {
    return {
      msg: "downlaod",
    };
  },
};
</script>

<style scoped lang="less">
.download {
  display: flex;
  flex-wrap: wrap;
  .demo {
    width: 50%;
    padding: 10px;
    box-sizing: border-box;
    margin: 10px 0;
    height: 200px;
    .title {
      font-weight: bold;
      font-size: 20px;
    }
  }
}
</style>
