<!--
 * @Date: 2023-08-05 01:26:43
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-08-07 00:45:45
 * @FilePath: /vue2-base-template/src/views/goods/components/Submit.vue
 * @description: 
-->
<template>
  <div>
    <el-button v-if="step !== 1" @click="changeStep(-1)">上一步</el-button>
    <el-button
      v-if="step < 3"
      :disabled="nextBtnDisabled"
      @click="changeStep(1)"
      >下一步</el-button
    >
    <el-button v-if="step === 3" @click="submit">提交</el-button>
  </div>
</template>

<script>
// import _ from "lodash";
import { mapMutations, mapState } from "vuex";
export default {
  name: "goods-submit",
  computed: {
    ...mapState("goods", ["form", "formInstance", "nextBtnDisabled", "step"]),
    _formData() {
      return { ...this.form };
    },
  },
  methods: {
    ...mapMutations("goods", [
      "changeStep",
      "setNextBtnDisabled",
      "setValidateError",
    ]),
    validate() {
      this.setNextBtnDisabled(false);
      this.formInstance.validate((valid) => {
        this.setNextBtnDisabled(!valid);
      });
      this.formInstance.clearValidate();
      // this.formInstance.validateField("name");
    },
    submit() {
      this.formInstance.validate((valid) => {
        if (valid) {
          console.log("submit");
        }
      });
    },
    async asyncFun(value) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (value == 111) {
            resolve("error");
          } else {
            resolve("");
          }
        }, 1000);
      });
    },
  },
  watch: {
    _formData: {
      async handler(newVal, oldVal) {
        this.validate();
        for (let type in newVal) {
          if (newVal[type] !== oldVal[type]) {
            if (type === "name") {
              this.setNextBtnDisabled(true);
              const res = await this.asyncFun(newVal[type]);
              this.setValidateError({
                nameError: res,
              });
              this.$nextTick(() => {
                this.formInstance.validateField(type);
              });
            }
          }
        }
      },
      deep: true,
    },
    step() {
      this.validate();
    },
  },
};
</script>
