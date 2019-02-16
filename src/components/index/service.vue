<template>
  <div class="service">
    <ul>
      <li>
        <i class="icon-ok"></i>
        <span>自营品牌</span>
      </li>
      <li>
        <i class="icon-ok"></i>
        <span>无忧退货</span>
      </li>
      <li>
        <i class="icon-ok"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/index/style.css';
.service {
  ul {
    display: flex;
    justify-content: space-around;
    li {
      display: flex;
      align-items: center;
      padding: 3vw 0;
      span{
        padding-left: 1vw;
      }
    }
  }
}
</style>
