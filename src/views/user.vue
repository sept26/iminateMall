<template>
  <div class="user">
    <header class="user-header">
      <div class="user-icon">
        <span class="icon2-user"></span>
      </div>
      <div class="user-login">登录/注册</div>
    </header>
    <section class="my-order">
      <span>我的订单</span>
      <b>
        全部订单
        <i class="icon-go"></i>
      </b>
    </section>
    <section class="quick-box">
      <ul>
        <li>
          <span class="icon2-money"></span>
          <b>代付款</b>
        </li>
        <li>
          <span class="icon2-thecar"></span>
          <b>待收货</b>
        </li>
        <li>
          <span class="icon2-fixed"></span>
          <b>退换修</b>
        </li>
      </ul>
    </section>
    <section class="user-item">
      <ul>
        <li>
          <div>
            <span class="icon2-f"></span>
          </div>
          <div>
            <span>会员福利</span><i class="icon-go"></i>
          </div>
        </li>
        <li>
          <div>
            <span class="icon2-money"></span>
          </div>
          <div>
            <span>我的优惠</span><i class="icon-go"></i>
          </div>
        </li>
        <li>
           <div>
            <span class="icon2-f"></span>
          </div>
          <div>
            <span>服务中心</span><i class="icon-go"></i>
          </div>
        </li>
        <li>
          <div>
            <span class="icon2-milogo"></span>
          </div>
          <div>
            <span>电商之家</span><i class="icon-go"></i>
          </div>
        </li>
        <li>
           <div>
            <span class="icon2-f"></span>
          </div>
          <div>
            <span>F码通道</span><i class="icon-go"></i>
          </div>
        </li>
        <li>
         <div>
          <span class="icon2-settle"></span>
         </div>
         <div>
          <span>设置</span><i class="icon-go"></i>
         </div>
        </li>
      </ul>
    </section>
    <vbaseline class="user-baseline"></vbaseline>
    <vfooter></vfooter>
  </div>
</template>
<script>
import Vbaseline from '@/common/_baseline'
import Vfooter from '@/common/_footer'
export default {
  components: {
    Vbaseline,
    Vfooter
  }
}
</script>
<style lang="less" scoped>
@import '../assets/fz.less';
@import '../assets/index/style.css';
@import '../assets/user/icon/carstyle.css';
.user {
  padding-bottom: 14vw;
  background-color: #F8FCFF;
  .user-header {
    width: 100%;
    height: 22vw;
    line-height:22vw;
    background: url(../../static/carbg.png) center 0 #f37d0f;
    background-size: auto 100%;
    padding: 3vw 0;
    display: flex;
    align-items: center;
    .user-icon {
      border: .4vw solid #fff;
      border-radius: 50%;
      margin-left: 4vw;
      margin-right: 4vw;
      width: 14vw;
      height: 14vw;
      line-height: 16vw;
      text-align: center;
      background-color: @cl;
      span {
        font-size: 8vw;
        &:before {
          color: #fff;
        }
      }
    }
    .user-login {
      color: #fff;
    }
  }
  .my-order {
    padding: 5vw;
    background-color: #fff;
    border-bottom:1px solid rgba(185, 185, 185, 0.14);
    b {
      float: right;
      color: rgba(0, 0, 0, 0.4);
    }
  }
  .quick-box {
    ul {
      display: flex;
      justify-content: space-around;
      padding: 5vw 0;
      background-color: #fff;
      border-bottom: 1px solid rgba(185, 185, 185, 0.14);
      li {
        text-align: center;
        color: rgba(0, 0, 0, 0.4);
        span {
          display: block;
          font-size: 25px;
          margin-bottom: 5px;
        }
        b {
          color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
  .user-item {
    ul {
      li {
        display: flex;
        background-color: #fff;
        padding: 4vw 2vw;
        div {
          padding: 1vw;
        }
        div:first-child {
          flex: 2;
          width: 5vw;
          height: 5vw;
          font-size: 20px;
        }
        div:last-child {
          flex: 8;
          position: relative;
            i {
              position: absolute;
              right: 2vw;
            }
        }
      }
      li:nth-child(odd) {
        margin-top: 3vw;
        border-top: 1px solid rgba(185, 185, 185, 0.14);
      }
      li:nth-child(even) {
        border-bottom: 1px solid rgba(185, 185, 185, 0.14);
      }
    }
  }
}
.user-baseline {
  padding-bottom: 8vw;
}
</style>
