<template>
  <base-table>
  <div class="container">
    <!-- 搜索、清除搜索、多选删除、添加 -->
    <div class="handle-box">
      <el-row>
        <el-col :span="16">
          <!-- 搜索框 -->
<!--          <el-input v-model="allData.searchContent"  placeholder="搜素内容"-->
<!--                    class="grid-content handle-input mr10" />-->


<!-- 搜索按钮 -->
<!--          <el-button type="primary" :icon="Search"-->
<!--                     @click="handleSearch">搜索</el-button>-->
<!--添加按钮-->
<!--          <el-button type="primary" :icon="Search"-->
<!--                     @click="openAdd">添加</el-button>-->
        </el-col>
      </el-row>

    </div>
<!--添加弹窗-->
<!--    <el-dialog-->
<!--        v-model="dialogVisible.isShowAdd"-->
<!--        title="添加信息"-->
<!--        width="30%"-->
<!--        :before-close="handleClose"-->
<!--    >-->
<!--      <el-form status-icon label-width="100px" ref="formRef" :model="allData.addData" >-->
<!--        <el-form-item label="温度(℃)" prop="temperature">-->
<!--          <el-input v-model="allData.addData.temperature" placeholder="请输入温度"  />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="环境湿度" prop="envHumidity">-->
<!--          <el-input v-model="allData.addData.envHumidity" placeholder="请输入环境湿度" maxlength="20"  />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="ph值" prop="ph">-->
<!--          <el-input v-model="allData.addData.ph" placeholder="请输入ph值" maxlength="10"  />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="光照强度" prop="light">-->
<!--          <el-input v-model="allData.addData.light"  placeholder="请输入光照强度" maxlength="11" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="土壤湿度" prop="soilHumidity">-->
<!--          <el-input v-model="allData.addData.soilHumidity"  placeholder="请输入土壤湿度" maxlength="11" />-->
<!--        </el-form-item>-->
<!--      </el-form>-->

<!--      <template #footer>-->
<!--      <span class="dialog-footer">-->
<!--        <el-button @click="dialogVisible.isShowAdd = false">取消</el-button>-->
<!--        <el-button type="primary" @click="addData">确认</el-button>-->
<!--      </span>-->
<!--      </template>-->
<!--    </el-dialog>-->
<!--编辑弹窗-->
<!--    <el-dialog-->
<!--        v-model="dialogVisible.isShowEdit"-->
<!--        title="编辑信息"-->
<!--        width="30%"-->
<!--        :before-close="handleClose"-->
<!--    >-->
            <el-form status-icon label-width="100px" ref="formRef" :model="allData.editData" >
      <el-form-item label="密码" prop="temperature">
        <el-input v-model="allData.editData.account" placeholder="请输入新密码"  />
      </el-form-item>
      <el-form-item label="密码确认" prop="envHumidity">
        <el-input v-model="allData.editData.password" placeholder="请输入再次输入密码" maxlength="20"  />
      </el-form-item>
              <div style="text-align:center">
<!--                <el-button @click="dialogVisible.isShowAdd = false">取消</el-button>-->
                <el-button type="primary" @click="changePassword">确认修改</el-button>
              </div>

<!--      <el-form-item label="ph值" prop="ph">-->
<!--        <el-input v-model="allData.editData.ph" placeholder="请输入ph值" maxlength="10"  />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="光照强度" prop="light">-->
<!--        <el-input v-model="allData.editData.light"  placeholder="请输入光照强度" maxlength="11" />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="土壤湿度" prop="soilHumidity">-->
<!--        <el-input v-model="allData.editData.soilHumidity"  placeholder="请输入土壤湿度" maxlength="11" />-->
<!--      </el-form-item>-->
            </el-form>

<!--      <template #footer>-->
<!--      <span class="dialog-footer">-->
<!--        <el-button @click="dialogVisible.isShowEdit = false">取消</el-button>-->
<!--        <el-button type="primary" @click="editData()"-->
<!--        >确认</el-button-->
<!--        >-->
<!--      </span>-->
<!--      </template>-->
<!--    </el-dialog>-->
<!--&lt;!&ndash;数据展示&ndash;&gt;-->
<!--    <el-table-->
<!--        :data="allData.tableData.slice((page.currentPage-1)*page.pageSize,page.currentPage*page.pageSize)"-->
<!--        border-->
<!--        style="width: 100%">-->
<!--      <el-table-column prop="planterOnlyKey" label="溯源码" width="180" />-->
<!--&lt;!&ndash;      <el-table-column prop="yong" label="用户名" width="150" />&ndash;&gt;-->
<!--      <el-table-column prop="account" label="账户" width="150" />-->
<!--      <el-table-column prop="password" label="密码" width="150" />-->
<!--      <el-table-column prop="light" label="光照强度" width="150" />-->
<!--      <el-table-column prop="soilHumidity" label="土壤湿度" />-->
<!--      <el-table-column fixed="right" label="操作" width="150">-->
<!--        <template #default="scope">-->
<!--          <el-button type="text" size="small" @click="openEdit(scope.$index, scope.row)"-->
<!--          >编辑</el-button>-->
<!--          <el-button type="text" size="small" @click="deleteData(scope.$index, scope.row)">删除</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--    </el-table>-->
<!--    <div style="margin-top: 10px;text-align: right">-->
<!--      <pagination :page-size="page.pageSize" :page-total="page.total"-->
<!--                  :disabled="false" @page-index="pageIndex" />-->

<!--    </div>-->
  </div>
  </base-table>


</template>

<script setup>
import { reactive, onMounted  ,watch, ref} from 'vue';
import { useStore } from 'vuex';
import { ElMessage } from 'element-plus';
import baseData from '@api/baseData';
import { useRoute } from 'vue-router';
import { ElMessageBox } from 'element-plus'
import Pagination from '@components/tables/Pagination.vue';

const dialogVisible = reactive({
  isShowEdit:false,
  isShowAdd:false
})
//所有的数据存放
const allData=reactive({
  searchDate:null,
  tableData:[],
  editData:{
    password:null,
    account:null,
  },
  addData:{},
})

// 状态管理
const store = useStore();

// 页面配置
const page = reactive({
  total:0,
  pageSize:10,
  currentPage:1,
  iconName: 'cascades', // 页面icon名字
  pageName: '种植商', // 页面名字
});

/**
 * 页面改变(子组件传值)
 */
function pageIndex(res) {
  page.currentPage = res;
  // props.getData();
}
/**
 * 获取展示数据
 */
function getData() {
  baseData
    .viewData({userId:localStorage.getItem("userId"),userFlag:localStorage.getItem("userFlag")})
    .then((res) => {
      console.log(res)
      allData.tableData = res.data.data
      console.log(allData.tableData)
      page.total = res.data.total
    })
    .catch(() => {
      ElMessage.error('加载出现小bug!');
    });
}

//修改密码
function changePassword() {
  if(allData.editData.password == null || allData.editData.password == undefined || allData.editData.password == ""
||   allData.editData.account == null || allData.editData.account == undefined || allData.editData.account == ""
  ){
    ElMessage.error("请输入新密码")
    return  false;
  }
  if(allData.editData.password != allData.editData.account){
    ElMessage.error("两次密码输入需保持一致")
    return false;
  }

  baseData
      .updatePassword({userId:localStorage.getItem("userId"),password: allData.editData.password}).then(
          (res)=>{
            if(res.data.result){
              ElMessage.success("修改成功")
              allData.editData = {}
  }else {
              ElMessage.error("修改失败")

            }
          }
  )


}

//打开添加弹窗
function openAdd(index,row){
  allData.addData = {}
  dialogVisible.isShowAdd = true
}
//打开编辑弹窗
function openEdit(index,row){
  Object.keys(row).forEach((item) => {
          console.log(item,row[item])
            allData.editData[item] = row[item]
          });
  dialogVisible.isShowEdit = true
}
//编辑处理
function editData(){
  console.log(allData.editData)
  baseData
      .editData({...allData.editData})
      .then((res) => {
        if(res.data.result){
          ElMessage.success("编辑成功")
        }else {
          ElMessage.error("编辑失败")
        }
      })
      .catch(() => {
        // ElMessage.error('编辑失败!');
      });
  dialogVisible.isShowEdit = false
  getData();
}
//删除处理
function deleteData(index,row){
  ElMessageBox.confirm(
      '是否删除',
      '提示',
      {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning',
      }
  )
      .then( ()=> {
            baseData
                .deleteData(row)
                .then((res) => {
                  if (res.data.result) {
                    ElMessage.success("删除成功")
                  } else {
                    ElMessage.error("删除失败")
                  }
                })
                .catch(() => {
                  ElMessage.error('删除失败!');
                }),
                baseData
                    .viewData({userId:localStorage.getItem("userId"),userFlag:localStorage.getItem("userFlag")})
                    .then((res) => {
                      console.log(res)
                      allData.tableData = res.data.data
                      console.log(allData.tableData)
                      page.total = res.data.total
                    })
                    .catch(() => {
                      ElMessage.error('加载出现小bug!');
                    });
          }
      )
  getData()
}
//添加处理
function addData(){
  baseData
      .addData({...allData.addData,userId:localStorage.getItem("userId"),userFlag:localStorage.getItem("userFlag")})
      .then((res) => {
        if(res.data.result){
          ElMessage.success("添加成功")
        }else {
          ElMessage.error("添加失败")
        }
      })
      .catch(() => {
        // ElMessage.error('添加失败!');
      });
  dialogVisible.isShowAdd = false
  getData();
}
//搜素处理
function handleSearch(){

}
// 页面加载后调用函数
onMounted(() => {
  // getData();
});

//弹窗关闭提醒
const handleClose = () => {
  ElMessageBox.confirm('确定关闭?')
      .then(() => {
        // done()
      })
      .catch(() => {
        // catch error
      })
}

// 路由
const route = useRoute();
watch(
    () => route.path,
    (oldValue, newValue) => {
    }
);



</script>

<style scoped>
.table {
  width: 100%;
  font-size: 14px;
  max-height: 578px;
}

.red {
  color: #ff0000;
}

.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}

.handle-box {
  margin-bottom: 20px;
}

.handle-input {
  width: 180px;
  display: inline-block;
}

.mr10 {
  margin-right: 10px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.float-right {
  float: right;
}
</style>
