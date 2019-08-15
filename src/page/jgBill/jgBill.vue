<template>
    <el-container>
        <el-main>
            <div class="bodyPadding">
                <div class="containerBgc">
                    <!-- <el-form>
                        <el-row>
                            <el-col>
                                <el-radio-group>
                                    <el-radio >账单生成时间</el-radio>
                                    <el-radio >账单审核时间</el-radio>
                                </el-radio-group>
                            </el-col>
                            <el-col>
                                <el-date-picker
                                v-model="value1"
                                type="datetime"
                                placeholder="选择日期时间">
                                </el-date-picker>
                                <el-date-picker
                                v-model="value1"
                                type="datetime"
                                placeholder="选择日期时间">
                                </el-date-picker>
                            </el-col>
                            <el-col>
                                <el-form-item>
                                    <el-select v-model="checkedStatus">
                                        <el-option
                                            v-for="item in status"
                                            :label="item.label"
                                            :value="item.value"
                                            :key="item.value"
                                        ></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col>
                                <div>
                                    <el-button type="primary">查询</el-button>
                                    <el-button type="primary">导出</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </el-form> -->
                    <div>
                        <el-table :span-method="objectSpanMethod" :data="tableData" border="">
                            <el-table-column label="序号" prop="id">
                                
                            </el-table-column>
                            <el-table-column label="标题" prop="title"></el-table-column>
                            <el-table-column label="内容" prop="content"></el-table-column>
                            <el-table-column label="维修总费用" prop="cost"></el-table-column>
                        </el-table>

                    </div>
                    <div>
                        <el-table  :data="tableData2" border="" class="sencondTable" :cell-style="cellStyle">
                            <el-table-column label="序号" >
                                <template slot-scope="scope">
                                    <div>
                                        测试的内容
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="标题" :cell-style="{'vertical-align':'top'}">
                                <template slot-scope="scope">
                                        <div class="innerDiv" style="height:45px">元件名称</div>
                                        <div class="secondDiv innerDiv" style="height:45px">元件价格</div>
                                        <div class="innerDiv" >备注</div>
                                </template>
                            </el-table-column>
                            <el-table-column label="内容" >
                                <template slot-scope="scope">
                                        <div class="innerDiv" style="height:45px">显示器</div>
                                        <div class="secondDiv innerDiv" style="height:45px">100</div>
                                        <div class="innerDiv " >xxxasadfa222222222222222222222wqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq22222222222222222222222222sfada</div>
                                </template>
                            </el-table-column>
                            <el-table-column label="维修总费用" prop="cost"></el-table-column>
                        </el-table>

                    </div>
                    
                    
                </div>
            </div>
      
        </el-main>
    </el-container>
</template>
<script>
// import Vue from 'vue'
// Vue.component('testSlot', {
//     template:`
//         <div>泥嚎啊</div>
//     `
// })
export default {
    name:'',
    
    data() {
        return {
           
            tableData:[
                {id:1,title:'元件名称',content:'显示器',cost:'10081'},
                {id:1,title:'元件价格',content:'100',cost:'10085'},
                {id:1,title:'备注',content:'xxxasadfasfada',cost:'10086'},
                {id:2,title:'元件名称',content:'显示器',cost:'10086'},
                {id:2,title:'元件价格',content:'100',cost:'10086'},
                {id:2,title:'备注',content:'xxxasadfasfada',cost:'10086'},
                {id:3,title:'元件名称',content:'显示器',cost:'10086'},
                {id:3,title:'元件价格',content:'100',cost:'10086'},
                {id:3,title:'备注',content:'xxxasadfasfada',cost:'10086'},
            ],
            tableData2:[
                {id:1,title:'元件名称',content:'显示器',cost:'10081'},
    
            ],
            cellStyle({row, column, rowIndex, columnIndex}){
                if(column.label == '标题') {
                    return {'vertical-align':'top'}
                }
            }
        }
    },
    methods:{
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if(columnIndex === 3) {
                if(rowIndex % this.tableData.length === 0) {

                    return {
                    rowspan: this.tableData.length,
                    colspan: 1
                    }
                }
                        else {
                            return {
                            rowspan: 0,
                            colspan: 0
                            };
                        }
            }
        }
    },
    created () {
        
    },
    mounted () {
        
    }
}
</script>
<style>
.el-carousel__container {
    height:50vh;
}
.sencondTable * ,.sencondTable tr>td{
        /* padding-left: 0px; */
        /* padding-right: 0px; */
        padding: 0px;
}
.sencondTable .cell {
    padding: 0px;
}
.sencondTable .innerDiv {
    padding: 10px;
}
.secondDiv {
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
}
</style>
<style scoped>
@import '../../styles/common.css';
.imgSize {
     background-size: contain;
     background-repeat :no-repeat;
     background-position:center center;
     height: 100%;
}
</style>



