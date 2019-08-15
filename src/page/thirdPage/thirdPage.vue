<template>
<div>


    <div>
        {{ccc}}
        
    </div>
    <button @click="doit">孙子的按钮</button>
</div>
    
</template>

<script>
export default {
    name:'thirdPage',
    data() {
        return {
            ccc:'我是孙子页面'
        }
    },
    methods:{
        doit() {
            this.$emit("change")
        }
    }
}
</script>

<style>

</style>
