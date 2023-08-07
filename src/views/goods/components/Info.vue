<!-- eslint-disable vue/no-mutating-props -->
<!--
 * @Date: 2023-08-05 01:22:24
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-08-05 02:21:17
 * @FilePath: /vue2-base-template/src/views/goods/compoents/name.vue
 * @description: 
-->
<template>
  <div>
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="sex" prop="sex">
      <el-input v-model="form.sex"></el-input>
    </el-form-item>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "goods-form-name",
  props: ["form"],
  computed: {
    // ...mapState("goods", ["form"]),
  },
};
</script>
