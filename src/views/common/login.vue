<script setup>
// This starter template is using Vue 3 <script setup> SFCs
import Account from '@/class/Account'

const account = new Account()
const { loginForm, login } = account
</script>

<template>
    <app-page :leftArrow="false">
        <van-form class="sf-margin-top-lg" @submit="login">
            <van-cell-group inset>
                <van-field
                    v-model="loginForm.account"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                    v-model="loginForm.password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
            </van-cell-group>
            <div style="margin: 16px">
                <van-button round block type="primary" native-type="submit">
                    登录
                </van-button>
            </div>
        </van-form>
    </app-page>
</template>

<style lang="scss" scoped>
.bottom-btn {
    position: absolute;
    bottom: 0;
}
</style>
