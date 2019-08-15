
<template>
    <div>
        <div>
            {{msg}}
        </div>
        <div>
            <secondPage @mochange='change'></secondPage>
        </div>
        <a href="../thirdPage/index.html">去第三个页面</a>
        <button @click="confirm">确认框</button>
        <div>
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                    <span>{{item.num}}</span><span>X</span><span>{{item.price}}</span><span>=</span><span>{{test(item) || 0}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import secondPage from '../secondPage/secondPage'
export default {
    name:'sewae',
    components:{secondPage},
    data() {
        return {
            msg:'我是爷爷页面',
            arr:[
                {num:12,price:34},
                {num:19,price:80},
                {num:11,price:20},
                {num:19,price:60},
                {num:19,price:70},
            ]
        }
    },
    methods:{
        change(){
            this.msg = '爷爷页面我被我孙子改变了'
        },
        test(item) {
            return item.num * item.price
            console.log(index);
            
        },
        confirm(){
            this.$confirm('确定啊啊啊啊啊啊啊啊 ')
        }
    }
}
</script>

<style>

</style>

