<script setup>
// This starter template is using Vue 3 <script setup> SFCs
import { useUserStore } from '@/store/modules/user'
const user = useUserStore()

user.setToken('my token')
// console.log(user.token) // my token
// console.log(user.count) // 1
// console.log(user.double)// 2
</script>

<template>
    <app-page>
        <van-cell title="普通列表" is-link to="list" />
        <van-cell title="带标签列表" is-link to="tabList" />
        <!-- <van-cell title="普通列表" is-link to="pageA" />
        <van-cell title="查询列表" is-link to="pageB" /> -->
    </app-page>
</template>

<style lang="scss" scoped></style>
