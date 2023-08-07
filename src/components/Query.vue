<template>
  <el-popover v-model="visible" placement="bottom">
    <div class="items">
      <div class="tips">请选择以下地址</div>
      <div v-show="isload" class="load">加载中</div>
      <div
        v-for="(item, index) in searchList"
        :key="index"
        class="item"
        @click="chooseOne(item)"
      >
        {{ item }}
      </div>
    </div>
    <el-input
      slot="reference"
      v-model="inputValue"
      @click="layerPop($event)"
    ></el-input>
  </el-popover>
</template>

<script>
export default {
  name: "queryL",
  data() {
    return {
      inputValue: "",
      visible: false,
      isload: false,
      searchList: ["p"],
    };
  },
  methods: {
    chooseOne(item) {
      this.visible = false;
      this.inputValue = item;
    },
    layerPop() {
      this.visible = true;
    },
  },
  watch: {
    visible(val) {
      if (val === true) {
        this.searchList = [];
        this.isload = true;
        console.log(this.inputValue);
        setTimeout(() => {
          this.searchList = [
            "lpx",
            "lsq",
            "lpd",
            "lsq",
            "lpd",
            "lsq",
            "lpd",
            "lsq",
            "lpd",
            "lsq",
            "lpd",
          ];
          this.isload = false;
        }, 2000);
      }
    },
    inputValue() {
      this.visible = true;
      //   this.searchList = ajax请求
    },
  },
};
</script>

<style lang="less" scoped>
.items {
  padding: 10px 0;
  max-width: 250px;
  max-height: 300px;
  overflow: auto;
  //   .tips {
  //     position: sticky;
  //     top: 0;
  //   }
  .tips {
    cursor: default;
  }

  .tips,
  .item {
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .item {
    cursor: pointer;

    &:hover {
      background-color: rgba(173, 158, 158, 0.3);
    }
  }
}
</style>
<style>
.el-popover {
  padding: 0;
}
</style>
