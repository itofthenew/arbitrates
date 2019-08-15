<template>
    <div>
        <div>
            {{ddd}}
        </div>
        <div>
           <thirdPage @change='changes'></thirdPage>
           <!-- <button @click="doit">父亲的按钮</button>  -->
        </div>
    </div>
</template>
<script>
import thirdPage from '../thirdPage/thirdPage'
export default {
    name:'ccc',
    components:{thirdPage},
    data() {
        return {
            ddd:'我是父亲页面'
        }
    },
    methods:{
        changes(){
            
            this.ddd = '父亲页面我被孙子改变了'
            this.$emit("mochange")
        },
        doit(){
            this.$emit("mochange")

        }
    }
}
</script>

<style>

</style>
