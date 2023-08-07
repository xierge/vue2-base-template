<!-- eslint-disable vue/multi-word-component-names -->
<!--
 * @Date: 2023-01-30 22:52:07
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-01-30 22:55:44
 * @FilePath: /xierge/src/views/Tree/index.vue
 * @description: 
-->
<template>
  <div>
    <div class="showTree">
      <el-tree
        ref="tree"
        :data="list"
        node-key="code"
        show-checkbox
        @check="handleCheckChange"
      ></el-tree>
    </div>
    <div class="showReasult">{{ showReasult }}</div>
  </div>
</template>

<script>
import areaData from "./regions.json";

export default {
  data() {
    return {
      list: [],
      pinjieList: {},
      showReasult: "",
    };
  },
  mounted() {
    this.list = areaData;
    this.dispose();
  },
  methods: {
    dispose() {
      let temp_obj = {};
      const _areaData = JSON.parse(JSON.stringify(areaData));

      function digui(current, pcode, plabel) {
        current &&
          [...current].forEach((item) => {
            temp_obj[item.code] = {
              ...item,
              label: (plabel || "") + item.label,
              pcode,
            };
            digui(item.children, item.code, temp_obj[item.code].label);
            delete item.children;
          });
      }

      digui(_areaData);
      this.pinjieList = temp_obj;
    },
    handleCheckChange(_, b) {
      const that = this;
      const labels = b.checkedKeys
        .filter((key) => !b.checkedKeys.includes(that.pinjieList[key].pcode))
        .map((key) => {
          return this.pinjieList[key].label;
        });
      this.showReasult = labels.join(",");
    },
  },
};
</script>

<style>
.showTree {
  height: 500px;
  overflow: auto;
}

.showReasult {
  border: 1px solid #ccc;
  min-height: 200px;
}
</style>
