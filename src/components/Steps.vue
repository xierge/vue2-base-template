<!--
 * @Date: 2023-08-05 09:29:11
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-08-05 09:37:57
 * @FilePath: /vue2-base-template/src/components/Steps.vue
 * @description: 
-->
<template>
  <el-steps :active="active">
    <el-step
      v-for="(step, index) in steps"
      :key="index"
      :title="step.title"
      :description="step.description"
    ></el-step>
  </el-steps>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      default: () => [],
    },
    active: {
      type: Number,
      default: 1,
    },
  },
};
</script>
