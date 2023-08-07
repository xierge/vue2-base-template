<!--
 * @Descripttion: 
 * @Author: lx
 * @Date: 2022-01-24 14:58:05
 * @LastEditTime: 2023-01-30 23:03:26
-->
<template>
  <div class="upload">
    <el-upload
      :before-remove="beforeRemove"
      :file-list="fileList"
      :http-request="upload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      action="#"
      list-type="picture-card"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img :src="dialogImageUrl" alt="" width="100%" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["initFile"],
  name: "testL",
  data() {
    return {
      dialogImageUrl: undefined,
      dialogVisible: false,
      fileList: [],
    };
  },
  methods: {
    upload(e) {
      var reader = new FileReader();
      reader.readAsDataURL(e.file); // readAsDataURL方法可以将上传的图片格式转为base64,然后在存入到图片路径,
      reader.onload = function () {
        console.log(reader.result);
      };
      // var formData = new FormData();
      // formData.append("file", e.file);
      // axios({
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //     Authorization:
      //       "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxNCIsInN1YiI6ImFkbWluIiwiYXVkIjoiMTI3LjAuMC4xIiwiaWF0IjoxNjQzMDEzODYwLCJleHAiOjE2NDMwMjEwNjB9.EoPjiL8GjKurhS4XXmzVFPT8zgbcbsiMkSRmaq3F8zI",
      //   },
      //   url: "/api/file/upload",
      //   method: "post",
      //   data: formData,
      // }).then((res) => {
      //   if (res.status == 200) {
      //     this.fileList.push({ url: res.data.data });
      //   }
      // });
    },
    handleRemove(file, fileList) {
      this.fileList = fileList;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeRemove() {
      return this.$confirm(`确定删除吗？`);
    },
  },
  watch: {
    initFile: {
      immediate: true,
      handler(v) {
        if (v) {
          this.fileList = v;
        } else {
          this.fileList = [];
        }
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
