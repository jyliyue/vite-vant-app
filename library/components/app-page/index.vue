<script setup>
// This starter template is using Vue 3 <script setup> SFCs
defineProps({
    navBar: {
        type: Boolean,
        default: true
    },
    leftArrow: {
        type: Boolean,
        default: true
    },
    onClickLeft: {
        type: Function,
        default: () => history.back()
    }
})

const route = useRoute()
</script>

<template>
    <div class="app-page">
        <van-nav-bar
            v-if="navBar"
            :title="route.meta.title"
            :left-arrow="leftArrow"
            @click-left="onClickLeft"
        />
        <div class="app-main">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-page {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .app-main {
        flex: 1;
        overflow: auto;
    }
}
</style>
