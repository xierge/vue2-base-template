<template>
  <div class="home">
    <!-- <CropperImage></CropperImage> -->
    <!-- <div class="count">
      <h1>当前count：{{ count }}</h1>
      <el-button @click="increment">+1</el-button>
      <el-button @click="decrement">-1</el-button>
      <el-button v-operate="13" @click="asyncAdd">async+1</el-button>
    </div>
    <el-button @click="getBrand">调用yoga接口</el-button>
    <el-button v-debounce:click="con">防抖</el-button> -->
    <el-input v-model="va" v-debounce:input="con"></el-input>
    <el-button @click="go"> 路由跳转</el-button>
    <!-- <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in cities"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        ></el-option>
      </el-select>
    </div> -->
    <!-- 
    <el-form :model="ruleForm" :rules="rules" :hide-required-asterisk="true" ref="ruleForm">
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc1">
        <el-input  v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
  </el-form-item>
    </el-form> -->

    <pre ref="highlight" v-html="html" class="html"></pre>
    {{ html }}
  </div>
</template>

<script>
import axios from "axios";
const html = `&lt;virtual-list class="list"
  :data-key="'id'"
  :data-sources="items"
  :data-component="itemComponent"
  :estimate-size="60"
/&gt;
`;
export default {
  name: "Home-test",
  components: {},
  mounted() {
    window.hljs.highlightElement(this.$refs.highlight);
  },
  data() {
    return {
      html,
      va: "",
      input: "",
      cities: [
        {
          id: "Beijing",
          name: "北京",
        },
        {
          id: "Shanghai",
          name: "上海",
        },
        {
          id: "Nanjing",
          name: "南京",
        },
        {
          id: "Chengdu",
          name: "成都",
        },
        {
          id: "Shenzhen",
          name: "深圳",
        },
        {
          id: "Guangzhou",
          name: "广州",
        },
      ],
      value: "11",
      ruleForm: {
        resource: "",
        desc: "",
      },
      rules: {
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    go() {
      this.$router.push("/home/5");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
        }
      });
    },
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decreament");
    },
    asyncAdd() {
      this.$store.dispatch("action_increment");
    },
    getBrand() {
      axios
        .get("/yoga-system/brand")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },

    con: () => {
      console.log(1);
    },
  },
};
</script>
