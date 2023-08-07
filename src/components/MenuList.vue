<template>
  <div>
    <el-menu class="el-menu-vertical-demo">
      <el-submenu
        v-for="(submenu, sub_index) in tablists"
        :key="sub_index"
        :index="String(sub_index)"
      >
        <template slot="title">
          <span>{{ submenu.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(item, item_index) in submenu.list"
            :key="item_index"
            :index="sub_index + '-' + item_index"
            >{{ item.title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "demo-23",
  data() {
    return {
      tablists: [
        {
          title: "营业",
          img: "../../../public/icon/02.png",
          id: 1,
          list: [
            { title: "营业模式", link: "/business/moshi" },
            { title: "零售模式", link: "/business/retail" },
          ],
        },
        {
          title: "订单",
          id: 2,
          list: [
            { title: "套餐预定", link: "/order/set" },
            { title: "发货订单", link: "/order/del" },
          ],
        },
        {
          title: "会员",
          id: 3,
          list: [
            { title: "会员管理", link: "/member/manage" },
            { title: "充值记录", link: "/member/points" },
          ],
        },
        {
          title: "商品",
          id: 4,
          list: [
            { title: "商品管理", link: "/comm/ement" },
            { title: "库存管理", link: "/comm/inventory" },
          ],
        },
        {
          title: "账单",
          id: 5,
          list: [
            { title: "账单记录", link: "/bill/billing" },
            { title: "退款账单", link: "/bill/refund" },
          ],
        },
        {
          title: "报表",
          id: 6,
          list: [
            { title: "访客报表", link: "/statement/visitor" },
            { title: "库存报表", link: "/statement/invent" },
            { title: "经营报表", link: "/statement/manage" },
            { title: "客户报表", link: "/statement/client" },
            { title: "销售报表", link: "/statement/market" },
          ],
        },
        {
          title: "设置",
          id: 7,
          list: [
            { title: "轮播图设置", link: "/login" },
            { title: "套餐管理", link: "/login" },
            { title: "门店管理", link: "/login" },
            { title: "员工管理", link: "/login" },
            { title: "操作日志", link: "/login" },
            { title: "商品分类", link: "/login" },
            { title: "安全中心", link: "/login" },
            { title: "角色管理", link: "/login" },
            { title: "计费规则", link: "/login" },
            { title: "会员等级", link: "/login" },
            { title: "其他费用", link: "/login" },
          ],
        },
      ],
    };
  },
  mounted() {},
};
</script>
