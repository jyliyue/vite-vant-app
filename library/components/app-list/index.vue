<script setup>
// This starter template is using Vue 3 <script setup> SFCs
import { onActivated, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import ListModel from '~/class/ListModle'

const props = defineProps({
    options: {
        type: Object,
        default: () => {}
    }
})

// 初始化列表模型
const listModel = new ListModel(props.options)
// 解构出UI层和业务层数据
const { ui, data } = listModel
// UI层解构出插件动作需要的参数
const { refreshing, successText, loading, finished, finishedText } = toRefs(ui)
// 业务层解构出列表数据
const { list } = toRefs(data)
// 模型层解构出方法
const { onRefresh, onLoad } = listModel

const { listRef } = useScrollCache()

/**
 * @description: 滚动定位缓存
 */
function useScrollCache() {
    const listRef = ref(null)
    let scrollTop = 0
    onActivated(() => {
        listRef.value.scrollTop = scrollTop
    })
    onBeforeRouteLeave(() => {
        scrollTop = listRef.value.scrollTop
    })

    return {
        listRef
    }
}
</script>

<template>
    <div class="app-list" ref="listRef">
        <van-pull-refresh
            v-model="refreshing"
            :success-text="successText"
            @refresh="onRefresh"
        >
            <van-list
                v-model:loading="loading"
                @load="onLoad"
                :finished="finished"
                :finished-text="finishedText"
                :offset="100"
            >
                <slot name="content" :list="list"> </slot>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<style lang="scss" scoped>
.app-list {
    height: 100%;
    overflow-y: auto;
}
</style>
