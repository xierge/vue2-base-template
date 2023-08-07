<template>
  <div class="api-test">
    <el-tabs
      v-model="editableTabsValue"
      editable
      type="card"
      @edit="handleTabsEdit"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.content.title || item.title"
        :name="item.name"
      >
        <Api :info="item.content"></Api>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Api from "./Api";

export default {
  name: "ApiTest",
  components: {
    Api,
  },
  data() {
    return {
      editableTabsValue: "1",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: {
            title: "",
            description: "",
            methodOptions: [
              {
                value: "GET",
                label: "GET",
              },
              {
                value: "POST",
                label: "POST",
              },
              {
                value: "PUT",
                label: "PUT",
              },
              {
                value: "DELETE",
                label: "DELETE",
              },
            ],
            methodValue: "GET",
            requestUrl: "",
            paramsData: [
              {
                checked: false,
                key: "",
                value: "",
              },
            ],
          },
        },
      ],
      tabIndex: 1,
    };
  },
  mounted() {
    // setInterval(() => {
    //   console.log(this.editableTabs[0]);
    // }, 2000);
    // let ref = this.$router.resolve({ path: "/tree" });
    // window.open(ref.href, "_blank");
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: {
            title: "",
            description: "",
          },
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      }
    },
  },
};
</script>

<style scoped></style>
