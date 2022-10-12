<script setup>
// This starter template is using Vue 3 <script setup> SFCs
import { useKeepAliverStore } from '@/store/modules/keepAliver'
const { caches } = storeToRefs(useKeepAliverStore())
</script>

<template>
    <router-view v-slot="{ Component, route }">
        <keep-alive :include="caches">
            <component
                :is="Component"
                v-if="route.meta.keepAlive"
                :key="route.name"
            />
        </keep-alive>
        <component
            :is="Component"
            v-if="!route.meta.keepAlive"
            :key="route.name"
        />
    </router-view>
</template>
