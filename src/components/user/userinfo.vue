<template>
    <div class="userinfo">
        <!--<header class="userinfo-header">-->
             <!--<div class="userinfo-icon">-->
                <!--<span class="iconfont icon-account"></span>-->
             <!--</div>-->
             <!--<span>用户名</span>-->
        <!--</header>-->
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="less" scoped>
@import "../../assets/fz";
@import "../../assets/icons/iconfont";
 .userinfo{
    padding: 1vw;

    .userinfo-header{
       .fz(font-size,40);
        display: flex;
        flex-direction: row;
        .userinfo-icon{

        }
        span{

        }
    }
 }
</style>
