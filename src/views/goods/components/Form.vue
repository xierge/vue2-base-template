<!--
 * @Date: 2023-08-05 01:05:47
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-08-07 00:04:06
 * @FilePath: /vue2-base-template/src/views/goods/components/Form.vue
 * @description: 
-->
<template>
  <el-form
    :validate-on-rule-change="false"
    :model="form"
    :rules="rules"
    ref="goodsForm"
  >
    <Info :form="form" v-if="step === 1"></Info>
    <Age v-if="step === 2"></Age>
  </el-form>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Info from "./Info.vue";
import Age from "./Age.vue";
import { VALIDATE_INFOS } from "../constant";
export default {
  Info: "goods-form-all",
  components: { Info, Age },
  computed: {
    ...mapState("goods", ["form", "step", "validateError"]),
    rules() {
      return VALIDATE_INFOS({ nameError: this.validateError.nameError });
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations("goods", ["setFormInstance"]),
  },
  mounted() {
    this.setFormInstance(this.$refs["goodsForm"]);
  },
};
</script>
