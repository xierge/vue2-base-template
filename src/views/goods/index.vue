<template>
  <div>
    <Steps :steps="COLLECTION_STEPS" :active="step" />
    <Form />
    <Submit />
  </div>
</template>

<script>
import Steps from "@/components/Steps.vue";
import Form from "./components/Form.vue";
import Submit from "./components/Submit.vue";
import { COLLECTION_STEPS } from "./constant";
import { mapState } from "vuex";
export default {
  name: "goods-index-demo",
  components: {
    Steps,
    Form,
    Submit,
  },
  data() {
    return {
      COLLECTION_STEPS,
    };
  },
  computed: {
    ...mapState("goods", ["step"]),
  },
};
</script>
