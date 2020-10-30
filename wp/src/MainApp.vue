<template>
    <div class="container">
        <!-- row start -->
        <div class="row my-2">
            <!-- col-12 start -->
            <div class="col-12">
                <ul class="nav nav-pills">
                    <li class="nav-item" @click="changeMenu(0)">
                        <router-link to="/"  class="nav-link" :class="{active:menu === 0}">활성링크</router-link>
                    </li>
                    <li class="nav-item" @click="changeMenu(1)">
                        <router-link to="/board" class="nav-link" :class="{active:menu === 1}">메뉴2</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">메뉴3</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">메뉴4</router-link>
                    </li>
                </ul>
            </div>
            <!-- col-12 end -->
        </div>
        <!-- row end -->
        <div class="row">
            <div class="col-12">
                <section class="content">
                    <transition name="sc" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </section>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"MainApp",
    data(){
        return {
            menu:0
        }
    },
    methods:{
        changeMenu(idx){
            console.log(idx);
            this.menu = idx;
        }
    }
}
</script>

<style scoped>
    .content {
        width:100%;
        overflow: hidden;
    }
</style>