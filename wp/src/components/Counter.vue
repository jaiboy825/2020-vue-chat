<template>
    <div class="counter">
        <div class="info">{{count}}</div>
        <button @click="inc">증가</button>
    </div>
</template>
<script>
export default {
    name:'CounterComponent',
    data(){
        return {
            count : 0
        }
    },
    methods:{
        inc(){
            this.count ++;
        }
    }
}
</script>
<style>

</style>