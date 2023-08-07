<template>
  <div class="api">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-input v-model="infos.title" placeholder="请输入标题"></el-input>
      </el-col>

      <el-col :span="8">
        <el-input
          v-model="infos.description"
          placeholder="请输入描述"
        ></el-input>
      </el-col>
    </el-row>
    <div class="clip"></div>
    <el-row :gutter="20">
      <el-col :span="3">
        <el-select v-model="infos.methodValue">
          <el-option
            v-for="method in info.methodOptions"
            :key="method.value"
            :label="method.label"
            :value="method.value"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="12">
        <el-input
          v-model="infos.requestUrl"
          placeholder="请输入请求地址"
        ></el-input>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" @click="send">发送</el-button>
      </el-col>
    </el-row>
    <div class="clip"></div>
    <el-tabs>
      <el-tab-pane label="Params" name="first">
        <el-table :data="info.paramsData" border style="width: 100%">
          <el-table-column prop="checked" width="100">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.checked"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column label="KEY" prop="key" width="300">
            <template slot-scope="scope">
              <el-input
                v-model="scope.row.key"
                @change="isAdd(scope.$index)"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column label="VALUE" prop="value">
            <template slot-scope="scope">
              <el-input v-model="scope.row.value"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="Headers" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="Body" name="third">角色管理</el-tab-pane>
    </el-tabs>

    <div class="clip"></div>
    <h4>响应结果</h4>
    <pre class="res">
      {{ "我是响应结果" }}
    </pre>
  </div>
</template>

<script>
import { transformTree } from "@/utils/utils";

export default {
  props: ["info"],
  name: "Api-postman",
  mounted() {
    var arr = [
      {
        id: 1,
        pid: 0,
        value: "河南",
      },
      {
        id: 2,
        pid: 1,
        value: "郑州",
      },
      {
        id: 3,
        pid: 2,
        value: "巩义",
      },
    ];

    transformTree(arr, "pid", "id", 0);
  },
  methods: {
    send() {
      location.href = "/tapi-plugin.zip";
    },
    isAdd(index) {
      if (index === this.info.paramsData.length - 1) this.addOneParamsData();
    },
    addOneParamsData() {
      this.infos.paramsData.push({ key: "", value: "", checked: false });
    },
  },
  watch: {
    info: {
      handler(newVal) {
        this.infos = newVal;
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.clip {
  height: 20px;
}

.res {
  width: 70%;
  min-height: 100px;
  border: 1px solid #cccccc;
  padding: 10px 0;
}

.el-table {
  width: 70% !important;
}
</style>
