<template>
    <el-main>
      <el-button plain @click="editUserCommon" plain>维护常用类</el-button>

      <!--维护常用类对话框-->
      <el-dialog
        title="维护常用类"
        align="center"
        :visible.sync="dialogVisible"
        width="800px" :close-on-click-modal="false"
        >
        <div style="text-align: center">
          <el-transfer
            style="text-align: left; display: inline-block;"
            v-model="value3"
            filterable
            :titles="['所有物料', '常用物料']"
            @change="handleChange"
            :data="allMat">
          </el-transfer>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="saveUserCommType">确 定</el-button>
          <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
    </el-main>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "temp",
        data(){
          return {
            urlPrefix: process.env.HOST_MAT,
            allMat: [], // 所有物料信息
            value3: [], //常用物料数组(重要)
            dialogVisible: false,
          }
        },
        methods: {
          // #######用户常用分类########
          //初始化信息
          editUserCommon() {
            this.allMat = [];
            this.value3 = [];
            let that = this;
            this.axiosHelper("v1/mat/userCommonType", {}, "获取可申购列表", function (rs) {
              console.log(rs)
              let tempArr = [];
              let data = rs.data.rm;
              let arr = data['allType'];
              arr.forEach((value, index) => {
                if (tempArr.indexOf(value.materialName) == -1) {
                  tempArr.push(value.materialName);
                  that.allMat.push({
                    key: value.materialName,
                    label: (value.materialCode + " " + value.materialName),
                  })
                }
              });
              that.value3 = data['userType'];
              that.dialogVisible = true;
            });

          },

          // 用户选择常用物料(监控方法--暂无用到)
          handleChange(value, direction, movedKeys) {
            console.log(value, direction, movedKeys);
          },
          //保存用户常用分类
          saveUserCommType() {
            let that = this;
            this.axiosHelper("v1/mat/saveUserCommonType", {
              types: this.value3.join(",")
            }, "保存常用物料", function () {
              that.$message.info("保存常用物料成功");
              that.dialogVisible = false;
              window.location.reload();
            });
          },
          axiosHelper(url, data, errorMsg, callback) {
            axios({
              url: this.urlPrefix + url,
              headers: {'Content-Type': 'application/json;charset=UTF-8', 'token': '123456789'},
              data: data,
              method: 'post'
            }).then(res => {
              if (res.data.status == 0) {
                callback(res.data);
              } else {
                this.$message.error(errorMsg + '出错：' + res.data.message);
              }
            }).catch(err => {
                // alert(err.message);
                this.$message.error(errorMsg + "异常: " + err.toString());
              }
            )
          },

        }
    }

</script>

<style scoped>
  .el-transfer-panel{
    width: auto;
  }
</style>
<style type="scss">

  .el-transfer .el-transfer-panel{
    width: auto;
    padding-right: 5px
  }

</style>
