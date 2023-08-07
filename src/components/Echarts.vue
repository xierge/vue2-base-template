<!--
 * @Date: 2023-01-30 22:52:07
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-01-30 23:18:24
 * @FilePath: /vue2-base-template/src/components/Echarts.vue
 * @description: 
-->
<template>
  <div>
    <div :id="id" :style="{ width: '600px', height: '600px' }"></div>
  </div>
</template>

<script>
export default {
  props: ["id", "chartsData"],
  name: "echarts-test",

  methods: {
    drawCharts(data) {
      var dom = document.getElementById(this.id);
      var myChart = this.echarts.init(dom);
      let option = {
        backgroundColor: "#2c343c",
        title: {
          text: "Customized Pie",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc",
          },
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data,
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)",
            },
            labelLine: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)",
              },
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            itemStyle: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },

            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function () {
              return Math.random() * 200;
            },
          },
        ],
      };
      // 绘制图表
      myChart.setOption(option);
    },
  },
  mounted() {},
  watch: {
    chartsData: {
      immediate: true,
      handler(val) {
        if (val && val.length) {
          this.$nextTick(() => {
            this.drawCharts(val);
          });
        }
      },
    },
  },
};
</script>
