<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">农产品溯源系统</div>
<!--      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">-->
      <el-form :model="param" ref="login" label-width="0px" class="ms-content">
        <el-radio-group v-model="param.userFlag" size="large">
        <el-radio-button label="5">管理员</el-radio-button>
        <el-radio-button label="1">种植商</el-radio-button>
        <el-radio-button label="2">加工商</el-radio-button>
        <el-radio-button label="3">储运商</el-radio-button>
        <el-radio-button label="4">经销商</el-radio-button>
      </el-radio-group>
       <div style="height: 20px">
       </div>
        <el-form-item prop="username">
          <el-input v-model="param.account" placeholder="username">
            <template #prepend>
              <el-button :icon="User" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="param.password"
            @keyup.enter="submitForm()">
            <template #prepend>
              <el-button :icon="Lock" />
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
<!--        <p class="login-tips">Tips : 用户名和密码随便填。</p>-->
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { User, Lock } from '@element-plus/icons'; // 图标
import userApi from '@api/user';

const router = useRouter();
const param = reactive({
  account: null,
  password: null,
  userFlag: "5"
});

// 用户校验
const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};
const login = ref(null);
// 状态管理
const store = useStore();
const submitForm = () => {
  // login.value.validate((valid) => {
  // store.commit('setAllNull');
    userApi
        .userLogin(param)
        .then((res) => {
          localStorage.setItem("token","false");
          console.log(res)
          if(res.data.result){
            //保存用户信息
            store.commit('setUserFlag',res.data.data.userFlag);
            store.commit('setUserId',res.data.data.userId);
            localStorage.setItem("ms_username",res.data.data.userName);
            localStorage.setItem("userFlag",res.data.data.userFlag);
            localStorage.setItem("userId",res.data.data.userId);
            localStorage.setItem("token","true");
            console.log("yes")
            if(param.userFlag == 1){
              router.push('/planterHome')
            }else if(param.userFlag == 2){
              router.push('/processHome');
            }else if(param.userFlag == 3){
              router.push('/logisticsHome');
            }else if(param.userFlag == 4){
              router.push('/saleHome');
            }
            else if(param.userFlag == 5){
              router.push('/userHome');
            }
            ElMessage.success('登录成功');
          }else {
            ElMessage.error('账户或密码不正确!');
          }
          // state.deptData = res.data;
          // 存储数据

        })
        .catch(() => {
          ElMessage.error('登录失败!');
        });

  // });
};


store.commit('clearTags'); // 清空标签

// defineExpose 可以省略
defineExpose({
  rules,
  submitForm,
});
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  /*background-image: url(../assets/img/login-bg.jpg);*/
  background-image: url(../assets/img/login05.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #409EFF;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 46%;
  top: 50%;
  width: 500px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
