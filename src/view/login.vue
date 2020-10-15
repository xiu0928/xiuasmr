<template>
    <div class="content">
       <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="确认密码"
            label="确认密码"
            placeholder="确认密码"
            :rules="[{ required: true, message: '请填写确认密码' }]"
        />
        <van-cell-group>
            <van-field v-model="value" label="昵称" placeholder="请输入昵称" />
        </van-cell-group>
        <van-field name="uploader" label="文件上传">
        <template #input>
            <van-uploader v-model="uploader" />
        </template>
        </van-field>
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
            提交
            </van-button>
        </div>
        </van-form>
    </div>
</template>
<script>
import { Form } from 'vant'
import { Field } from 'vant';
import { Button } from 'vant';
import { Uploader } from 'vant';
export default {
    name:'login',
    data(){
        return{
            username: '',
            password: '', 
            value: '',
            uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
        }
    },
    methods:{
        onSubmit(values) {
            console.log('submit', values);
        },
    },
    mounted(){

    },
    components:{
        [Form.name]: Form,
        [Field.name]: Field,
        [Button.name]: Button,
        [Uploader.name]: Uploader
    }
}
</script>
<style scoped>
.content{
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>