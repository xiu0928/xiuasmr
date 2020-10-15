<template>
    <div>
        <van-button type="primary">主要按钮</van-button>
    </div>
</template>
<script>
import { Button } from 'vant';
export default {
    name:'herder',
    components:{
        [Button.name]:Button
    }
}
</script>
<style scoped>

</style>