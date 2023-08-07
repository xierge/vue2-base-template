<!--
 * @Date: 2023-08-05 01:25:30
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-08-05 01:25:59
 * @FilePath: /vue2-base-template/src/views/goods/compoents/Age.vue
 * @description: 
-->
<template>
  <el-form-item label="年龄" prop="age">
    <el-input v-model="form.age"></el-input>
  </el-form-item>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "goods-form-age",
  computed: {
    ...mapState("goods", ["form"]),
  },
};
</script>
