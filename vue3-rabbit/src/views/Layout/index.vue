<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import HeaderFix from './components/HeaderFix.vue'

</script>

<template>
    <HeaderFix />
    <LayoutNav />
    <LayoutHeader />
    <!-- 添加key 可以强制替换一个元素或者组件  而不是复用他 -->
    <!-- <RouterView :key="$route.fullPath" /> -->
    <RouterView />
    <LayoutFooter />
</template>