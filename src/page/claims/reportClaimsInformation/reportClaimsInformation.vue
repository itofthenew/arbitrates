<template>
  <!-- 数据分析 -->
  <el-container class="typeArea" id="app">
    <el-main style="padding: 0px 10px;background:#f2edf5;">
      <div class="bodyPadding">
          <div class="listPadding" >
            <input type="text" v-model="num1">
            <input type="text" v-model="num2">
            =
            <input type="text" v-model="total">
          <hr>
          <hr>
          <hr>
          <hr>
          <hr>
          <el-carousel height="550px" :autoplay="isPlay">

              <el-carousel-item >
               <video  controls ref="media">
                  <source src="../../../assets/video/catts.webm" type="video/mp4" >
                </video>
              </el-carousel-item>
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>      
      </div>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    name: "reportClaimsInformation",
    // el:'#app',
      data() {
        return {
            num1:11,
            num2:12,
            isPlay:true
        };
      },
      computed: {
        total:function() {
          return   +this.num1 + this.num2
        }
       },
       mounted() {
        this.mediaStatus()
       k},

      methods: {
          mediaStatus() {
            let media = this.$refs.media
            console.log(media);
            // return
            let _this = this 
            media.addEventListener('play',function(){
              console.log('开始播放了');
              _this.isPlay = false
            })
            media.addEventListener('pause',function(){
              console.log('暂停了');
              _this.isPlay = true
            })
            media.addEventListener('ended',function(){
              console.log('结束了');
              _this.isPlay = false
            })
          },
          deepCloneCheckBoxGroup(obj){
             return JSON.parse(JSON.stringify(obj))
          },
          test() {
            let arr2 = this.deepCloneCheckBoxGroup(this.arr1)
            console.log(arr2);
            
          }

   
    },
    watch: {
        
    }

  }
</script>

<style>

    /* @import '../../../styles/custom-theme.css'; */
     .el-textarea__inner {
      height: 150px;
  }
  .el-input--medium.dia {
      width: 80%;
  }
  .textBlue {
    color: blue;
  }
   .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
 .firstTable tbody>tr>td:nth-child(1)>.cell {
    padding-left: 0px !important;
  }
 .secondTable tbody>tr>td:nth-child(1)>.cell {
    padding-left: 20px !important;
  }
  .secondTable thead {
    display: none
  }
 .firstTable .el-table__expanded-cell {
    padding: 0px !important;
    /* padding-bottom:20px !important;  */
  }
</style>

<style scoped>

</style>


