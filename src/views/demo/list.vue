<script setup>
// This starter template is using Vue 3 <script setup> SFCs

// import { onActivated, onMounted } from 'vue'

const options = {
    getData: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: new Array(20),
                    total: 30
                })
            }, 1000)
        })
    }
}

// onMounted(() => {
//     console.log('mounted')
// })
// onActivated(() => {
//     console.log('activated')
// })
</script>

<template>
    <app-page>
        <app-list :options="options">
            <template #content="{ list }">
                <van-cell
                    v-for="(item, index) in list"
                    :key="index"
                    :title="index"
                />
            </template>
        </app-list>
    </app-page>
</template>

<style lang="scss" scoped></style>
