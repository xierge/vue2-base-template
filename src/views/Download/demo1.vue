<!--
 * @Date: 2023-01-16 19:33:51
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-01-30 13:42:13
 * @FilePath: /vue2-base-template/src/views/Download/demo1.vue
 * @description: 
-->
<template>
  <div>
    <div class="operator">
      <input
        type="file"
        class="uploadBtn"
        hidden
        ref="selectBtn"
        @change="selectSuccess"
      />
      <el-button type="primary" @click="select">选择文件</el-button>
      <el-button type="success" :disabled="!files.length" @click="uploadFile"
        >上传文件</el-button
      >
    </div>
    <div class="fileList">
      <div v-for="(file, index) in files" :key="file.name" class="detail">
        <div class="left">
          {{ file.name }}
        </div>
        <div class="right" @click="deleteFile(index)">X</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "downlaod-demo1",
  data() {
    return {
      files: [],
    };
  },
  methods: {
    select() {
      this.$refs.selectBtn.click();
    },
    selectSuccess(e) {
      this.files = [...e.target.files];
    },
    deleteFile(index) {
      this.files.splice(index, 1);
    },
    uploadFile() {
      let file = this.files[0];
      console.log(file);
      let formData = new FormData();
      formData.append("file", file);
    },
  },
};
</script>

<style lang="less" scoped>
.operator {
  margin: 20px 0;
}
.fileList {
  max-width: 400px;
  .detail {
    display: flex;
    justify-content: space-between;
    padding: 3px 10px;
    border-radius: 5px;
    .left {
      font-size: 14px;
    }
    &:hover {
      background-color: #e5e5e5;
    }
    .right {
      color: red;
      cursor: pointer;
    }
  }
}
</style>
