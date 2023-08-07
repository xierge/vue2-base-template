<!--
 * @Descripttion: 
 * @Author: lx
 * @Date: 2022-01-18 17:45:41
 * @LastEditTime: 2023-01-30 23:02:17
-->
<template>
  <div class="about">
    <Upload ref="xx" :initFile="initFile" />
    <!-- <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <Query />
      </el-form-item>
    </el-form> -->
    <!-- <Echarts id="bar_echarts" :chartsData="chartsData" /> -->
    <!-- <MenuList /> -->
    <CropperImage />

    <el-form>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.xxx">
          <el-checkbox label="1">美食/餐厅线上活动</el-checkbox>
          <el-checkbox label="地推活动"></el-checkbox>
          <el-checkbox label="线下主题活动"></el-checkbox>
          <el-checkbox label="单纯品牌曝光"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import Query from "../components/Query.vue";
// import Echarts from "../components/Echarts.vue";
import Upload from "../components/Upload.vue";
// import MenuList from "../components/MenuList.vue";
import CropperImage from "./CropperImage.vue";

export default {
  // components: { Upload, Query, Echarts, MenuList, CropperImage },
  components: { Upload, CropperImage },
  name: "test-1",
  data() {
    return {
      form: { type: [], xxx: [], region: "" },
      chartsData: [],
      initFile: [],
    };
  },
  mounted() {
    setInterval(() => {
      console.log(this.form.region);
    }, 2000);
    // setTimeout(
    //   () =>
    //     (this.chartsData = [
    //       { value: 335, name: "直接访问" },
    //       { value: 310, name: "邮件营销" },
    //       { value: 274, name: "联盟广告" },
    //       { value: 235, name: "视频广告" },
    //       { value: 400, name: "搜索引擎" },
    //     ].sort(function (a, b) {
    //       return a.value - b.value;
    //     })),
    //   2000
    // );
    // setInterval(() => {
    //   console.log(this.$refs.xx.fileList);
    // }, 2000);
  },
};
</script>
