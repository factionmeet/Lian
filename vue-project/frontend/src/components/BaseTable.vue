<template>
<!--  <div>-->
    <!-- 页面标题 -->
<!--    <page-name :icon-name="page.iconName" :page-name="page.pageName" />-->

<!--    &lt;!&ndash; 表格 &ndash;&gt;-->
<!--    <div class="container">-->

<!--      &lt;!&ndash; 搜索、清除搜索、多选删除、添加 &ndash;&gt;-->
<!--      <div class="handle-box">-->
<!--        <el-row>-->
<!--          <el-col :span="16">-->
<!--            &lt;!&ndash; 搜索框 &ndash;&gt;-->
<!--            <el-input v-model="query.id" maxlength="11" placeholder="编号"-->
<!--              class="grid-content handle-input mr10" />-->

<!--            &lt;!&ndash; 其他条件 &ndash;&gt;-->
<!--            <slot name="filter" />-->

<!--            &lt;!&ndash; 搜索按钮 &ndash;&gt;-->
<!--            <el-button type="primary" :icon="Search" :disabled="!/(^[1-9]\d*$)/.test(query.id)"-->
<!--              @click="handleSearch">搜索</el-button>-->

<!--            &lt;!&ndash; 清除按钮 &ndash;&gt;-->
<!--&lt;!&ndash;            <el-button type="primary" :icon="Remove" :disabled="query.id.length == 0"&ndash;&gt;-->
<!--&lt;!&ndash;              @click="handleRemove">清除&ndash;&gt;-->
<!--&lt;!&ndash;            </el-button>&ndash;&gt;-->
<!--          </el-col>-->

<!--          <el-col :span="8">-->
<!--            &lt;!&ndash; 添加按钮 &ndash;&gt;-->
<!--            <el-button type="primary" :icon="Plus" class="grid-content float-right"-->
<!--              @click="handleAdd">-->
<!--              添 加</el-button>-->

<!--            &lt;!&ndash; 删除按钮 &ndash;&gt;-->
<!--            <el-button type="danger" :icon="Delete" class="grid-content float-right mr10"-->
<!--              :disabled="state.selectedList.length == 0" @click="handleSelectedDelete">-->
<!--              删 除</el-button>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->

<!--      &lt;!&ndash; 表格数据 &ndash;&gt;-->
<!--      <el-table-->
<!--        :data="state.isShowSearched ? state.searched : data.slice((query.currentPage-1)*(query.pageSize),(query.currentPage)*(query.pageSize))"-->
<!--        border stripe class="table" max-height="578"-->
<!--        :default-sort="{ prop: 'id', order: 'ascending' }" @selection-change="handleSelectionChange"-->
<!--        v-loading="data == ''" element-loading-text="拼命加载中...">-->

<!--        &lt;!&ndash; 勾选框 &ndash;&gt;-->
<!--        <el-table-column type="selection" width="80" align="center" />-->

<!--        &lt;!&ndash; 序号 &ndash;&gt;-->
<!--        <el-table-column label="序号" type="index" width="80" align="center" fixed-->
<!--          :index='(index)=>{return (index+1) + (query.currentPage-1)*query.pageSize}' />-->

<!--        &lt;!&ndash; 列表数据 &ndash;&gt;-->
<!--        <slot name="tableColumn" />-->

<!--        &lt;!&ndash; 操作 &ndash;&gt;-->
<!--        <el-table-column label="操作" width="220" align="center" fixed='right'>-->
<!--          <template #default="scope">-->
<!--            <el-button type="text" :icon="Edit" @click="handleEdit(scope.$index, scope.row)">-->
<!--              编辑-->
<!--            </el-button>-->
<!--            <el-button type="text" :icon="Delete" class="red"-->
<!--              @click="handleDelete(scope.$index, scope.row)">删除-->
<!--            </el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->

<!--      </el-table>-->

<!--      &lt;!&ndash; 分页 &ndash;&gt;-->
<!--      <pagination :page-size="query.pageSize" :page-total="state.pageTotal"-->
<!--        :disabled="state.isShowSearched" @page-index="pageIndex" />-->
<!--    </div>-->

<!--    &lt;!&ndash; 弹出框 &ndash;&gt;-->
<!--    <el-dialog :title="`${state.addOrUpdate ? '添加信息' : '编辑信息'}`" v-model="state.showDialog"-->
<!--      width="30%">-->

<!--&lt;!&ndash;      <el-form status-icon label-width="100px" ref="formRef" :model="formData" :rules="formRules">&ndash;&gt;-->
<!--      <el-form status-icon label-width="100px" ref="formRef" :model="formData" >-->

<!--        <slot name="showDialog" />-->

<!--      </el-form>-->

<!--      <template #footer>-->
<!--        <span class="dialog-footer">-->
<!--          <el-button @click="state.showDialog = false">取 消</el-button>-->
<!--          <el-button type="primary" v-if="state.addOrUpdate" @click="saveAdd">添 加</el-button>-->
<!--          <el-button type="primary" v-else @click="saveEdit">更 新</el-button>-->
<!--        </span>-->
<!--      </template>-->

<!--    </el-dialog>-->

<!--  </div>-->
</template>

<script setup>
import { ref, reactive, toRefs, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Search, Remove, Delete, Plus, Edit } from '@element-plus/icons'; // 图标
import PageName from '@components/tables/PageName.vue';
import Pagination from '@components/tables/Pagination.vue';
import { clickRecover } from '@utils/clickRecover';
import {useStore} from "vuex";

// const formRef = ref();
//
// const state = reactive({
//   searched: [], // 被搜索的数据(渲染表格数据需要是列表)
//   isShowSearched: false, // 是否显示被搜索的数据
//   selectedList: [], // 被勾选的列表
//   showDialog: false, // 是否显示弹窗
//   addOrUpdate: true, // 是否是添加或更新(true-添加 | false-更新)
//   pageTotal: 0, // 数据总个数
//   idx: '-1', // 临时编号
//   reIndex: -1, // 临时序号
// });
//
// const props = defineProps({
//   page: Object, // 页面配置
//   query: Object, // 搜索和页码
//   data: Object, // 数据
//   formData: {}, // 表单对象
//   formRules: Object, // 校验规则
//   getData: Function, // 得到数据
//   apis: Object, // 增删改查api
// });
//
// const { page, query, data, formData, formRules } = toRefs(props);
//
// const emit = defineEmits(['emitIsDisabled', 'emitIsShowSearched']);
//
// // 路由
// const route = useRoute();
// // 状态管理
// const store = useStore();
// // 监听路由是否发生变化
// watch(
//   () => route.path,
//   (oldValue, newValue) => {
//     // console.log(oldValue, newValue);
//     removeSearch();
//   }
// );
//
// // 监听属性
// watchEffect(() => {
//   // 当搜索框没有值时,恢复默认表格
//   if (query.value.id.length == 0) {
//     removeSearch();
//   }
//
//   // 监听每页个数变化
//   state.pageTotal = data.value.length || query.value.pageSize;
//
//   // 是否显示被选择的值
//   emit('emitIsShowSearched', state.isShowSearched);
// });
//
// /**
//  * 搜索数据
//  */
// function handleSearch(event) {
//   clickRecover(event);
//
//   ElMessage({
//     message: '搜索中...',
//     grouping: true,
//     type: 'success',
//     duration: 1000,
//   });
//
//   console.log(localStorage.getItem("ms_username"))
//   props.apis
//     .viewData({userId:store.state.userId,userFlag:localStorage.getItem("userFlag")})
//     .then((res) => {
//       if (res.data.result) {
//         state.isShowSearched = true;
//         state.searched.splice(0, 1, res.data.data);
//         console.log('被搜索的数据--', res.data);
//       } else {
//         ElMessage.warning('编号不存在');
//       }
//     })
//     .catch(() => {
//       ElMessage.error('搜索数据失败!');
//     });
// }
//
// /**
//  * 移除搜索
//  */
// function handleRemove(event) {
//   clickRecover(event);
//   removeSearch();
// }
//
// /**
//  * 被勾选的数据
//  */
// function handleSelectionChange(val) {
//   // 如果没有勾选,清空勾选列表
//   if (val.length == 0) {
//     state.selectedList = [];
//   }
//
//   val.forEach((item, index) => {
//     state.selectedList.splice(index, 1, { index: index, id: item.id });
//   });
// }
//
// /**
//  * 删除被勾选的数据
//  */
// function handleSelectedDelete(event) {
//   clickRecover(event);
//
//   // 二次确认删除
//   ElMessageBox.confirm('确定要删除吗？', '提示', {
//     confirmButtonText: '删除',
//     cancelButtonText: '取消',
//     type: 'warning',
//   })
//     .then(() => {
//       state.selectedList.map((item) => {
//         props.apis
//           .delete_data(item.id)
//           .then((res) => {
//             if (res.code === 200) {
//               ElMessage.success(`删除编号为 ${item.id} 的数据成功！`);
//               data.value.splice(item.index, 1);
//               removeSearch(true);
//             } else {
//               ElMessage.warning(`删除编号为 ${item.id} 的数据失败！`);
//             }
//           })
//           .catch(() => {
//             ElMessage.error('删除数据失败！');
//           });
//       });
//     })
//     .catch(() => {});
// }
//
// /**
//  * 添加数据按钮
//  */
// function handleAdd(event) {
//   clickRecover(event);
//
//   // 重置表单
//   // Object.keys(formData.value).forEach((key) => {
//   //   formData.value[key] = '';
//   // });
//
//   // 设置默认成绩
//   // if (page.value.pageName == '选课' && formData.value.grade === '') {
//   //   formData.value.grade = 0;
//   // }
//
//   // 显示添加弹窗
//   state.showDialog = state.addOrUpdate = true;
//   emit('emitIsDisabled', false);
// }
//
// /**
//  * 确认添加
//  */
// function saveAdd() {
//   state.showDialog = false;
//   state.addOrUpdate = true;
//
//   // formRef.value.validate((valid) => {
//   //   console.log('formData.value', formData.value);
//     // debugger
//     // if (valid) {
//   console.log("formData")
//   console.log(formData)
//   console.log(props)
//   let addAllData = props.formData
//   addAllData.userFlag = localStorage.getItem("userFlag");
//   addAllData.userId = localStorage.getItem("userId");
//
//       props.apis
//         .addData(addAllData)
//         .then((res) => {
//           if(res.data.result){
//             ElMessage.success('添加成功');
//           }else {
//             ElMessage.error('添加失败');
//           }
//         }).catch(()=>{
//         ElMessage.error('添加失败');
//       });
//
//       //     if (res.code == 200) {
//       //       ElMessage.success(
//       //         `成功添加编号为 ${res.data.id} 的${page.value.pageName}信息！`
//       //       );
//       //       data.value.push(res.data);
//       //       removeSearch(true);
//       //     } else {
//       //       ElMessage.warning(`${page.value.pageName}信息填写有误，添加失败！`);
//       //     }
//       //   })
//       //   .catch(() => {
//       //     ElMessage.error(`添加${page.value.pageName}信息失败！`);
//       //   });
//     // } else {
//     //   ElMessage.warning(`${page.value.pageName}信息不符合校验规则，添加失败！`);
//     // }
//
//     // 重置表单
//     formRef.value.resetFields();
//   // });
// }
//
// /**
//  * 编辑院系信息
//  */
// function handleEdit(index, row) {
//   Object.keys(formData.value).forEach((item) => {
//     formData.value[item] = row[item];
//   });
//
//   // 显示更新弹窗
//   state.showDialog = true;
//   state.addOrUpdate = false;
//
//   // index-索引, row.id-编号
//   state.idx = row.id;
//   state.reIndex = index;
//   emit('emitIsDisabled', true);
// }
//
// /**
//  * 确认更新
//  */
// function saveEdit() {
//   state.showDialog = state.addOrUpdate = false;
//   let addAllData = props.formData
//   addAllData.userFlag = localStorage.getItem("userFlag");
//   addAllData.userId = localStorage.getItem("userId");
//   props.apis
//       .addData(addAllData)
//       .then((res) => {
//         if(res.data.result){
//           ElMessage.success('添加成功');
//         }else {
//           ElMessage.error('添加失败');
//         }
//       }).catch(()=>{
//     ElMessage.error('添加失败');
//   });
//
//   // formRef.value.validate((valid) => {
//   //   if (valid) {
//   //     props.apis
//   //       .update_data(state.idx, formData.value)
//   //       .then((res) => {
//   //         ElMessage.success(
//   //           `修改${page.value.pageName}ID为 ${state.idx} 成功！`
//   //         );
//   //         Object.keys(res.data).forEach((item) => {
//   //           data.value[state.reIndex][item] = res.data[item];
//   //         });
//   //         if (query.value.id.length != 0) {
//   //           state.searched[0] = formData.value;
//   //           console.log('saveEdit--', state.searched[0]);
//   //         }
//   //         props.getData();
//   //       })
//   //       .catch(() => {
//   //         ElMessage.error(`修改${page.value.pageName}信息失败！`);
//   //       });
//   //   } else {
//   //     ElMessage.warning(`填写${page.value.pageName}不符合校验规则，修改失败！`);
//   //   }
//   // });
// }
//
// /**
//  * 删除操作
//  */
// function handleDelete(index, row) {
//   // 二次确认删除
//   ElMessageBox.confirm('确定要删除吗？', '提示', {
//     confirmButtonText: '删除',
//     cancelButtonText: '取消',
//     type: 'warning',
//   })
//     .then(() => {
//       props.apis
//         .delete_data(row.id)
//         .then((res) => {
//           if (res.code === 200) {
//             ElMessage.success(
//               `删除编号为 ${row.id} 的${page.value.pageName}信息成功！`
//             );
//             data.value.splice(index, 1);
//             removeSearch(true);
//           } else {
//             ElMessage.warning(
//               `删除编号为 ${row.id} 的${page.value.pageName}信息失败！`
//             );
//           }
//         })
//         .catch(() => {
//           ElMessage.error(`删除${page.value.pageName}信息失败！`);
//         });
//     })
//     .catch(() => {});
// }
//
// /**
//  * 页面改变(子组件传值)
//  */
// function pageIndex(res) {
//   query.value.currentPage = res;
//   props.getData();
// }
//
// /**
//  * 清除搜索
//  */
// function removeSearch(isNeedData = false) {
//   query.value.id = '';
//   state.isShowSearched = false;
//   if (isNeedData) props.getData();
// }
//
// // 可不要
// defineExpose({
//   state,
//   page,
//   query,
//   data,
//   formData,
//   formRules,
//   handleSearch,
//   handleRemove,
//   handleSelectionChange,
//   handleSelectedDelete,
//   handleAdd,
//   saveAdd,
//   handleEdit,
//   saveEdit,
//   handleDelete,
//   pageIndex,
//   removeSearch,
// });
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
