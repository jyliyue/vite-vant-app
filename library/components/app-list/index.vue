<script setup>
// This starter template is using Vue 3 <script setup> SFCs
import { onActivated, onMounted } from 'vue'
import ListModel from '~/class/ListModle'

const props = defineProps({
    options: {
        type: Function,
        default: () => {}
    }
})

// 初始化列表模型
const { listModel, data } = useListModel()
const { refreshing, successText, loading, finished, finishedText, list } =
    toRefs(data)
const { onRefresh, onLoad } = listModel
// 初始化滚动缓存
const { listRef } = useScrollCache()

/**
 * @description: 列表模型
 */
function useListModel() {
    const listModel = new ListModel(props.options)
    const data = listModel.data
    return {
        listModel,
        data
    }
}

/**
 * @description: 滚动定位缓存
 */
function useScrollCache() {
    const listRef = ref(null)
    let scrollTop = 0
    onMounted(() => {
        listRef.value.addEventListener(
            'scroll',
            (e) => {
                scrollTop = e.target.scrollTop
            },
            true
        )
    })
    onActivated(() => {
        listRef.value.scrollTop = scrollTop
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
