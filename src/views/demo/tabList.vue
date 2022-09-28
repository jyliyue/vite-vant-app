<script setup>
// This starter template is using Vue 3 <script setup> SFCs

const options1 = {
    getData: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: new Array(20),
                    total: 30
                })
            }, 2000)
        })
    }
}

const options2 = {
    getData: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: new Array(20),
                    total: 30
                })
            }, 2000)
        })
    }
}

const activeName = ref('a')
</script>

<template>
    <app-page>
        <van-tabs class="content" v-model:active="activeName" :animated="true">
            <van-tab title="标签 1" name="a">
                <app-list :options="options1">
                    <template #content="{ list }">
                        <van-cell
                            v-for="(item, index) in list"
                            :key="index"
                            :title="index"
                        />
                    </template>
                </app-list>
            </van-tab>
            <van-tab title="标签 2" name="b">
                <app-list :options="options2">
                    <template #content="{ list }">
                        <van-cell
                            v-for="(item, index) in list"
                            :key="index"
                            :title="index"
                        />
                    </template>
                </app-list>
            </van-tab>
            <van-tab title="标签 3" name="c"> c </van-tab>
        </van-tabs>
    </app-page>
</template>

<style lang="scss" scoped>
.content {
    height: 100%;
    display: flex;
    flex-direction: column;
    :deep(.van-tabs__content) {
        flex: 1;
        overflow-y: auto;
    }
    :deep(.van-tab__panel) {
        height: 100%;
    }
}
</style>
