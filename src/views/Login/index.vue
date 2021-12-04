<template>
  <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li :class="{'current': item.current}" v-for="item in menuTab" :key="item.id" @click="toggleMenu(item)">{{item.txt}}</li>
            </ul>
            <!-- from表单 -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="login-from" size="mini">
                <el-form-item prop="username">
                    <label>邮箱</label>
                    <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <label>密码</label>
                    <el-input type="text" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="passwords" v-show="model === 'register'">
                    <label>重复密码</label>
                    <el-input type="text" v-model="ruleForm.passwords" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <label>验证码</label>
                    <el-row :gutter="10">
                        <el-col :span="15">
                            <el-input v-model.number="ruleForm.code"></el-input>
                        </el-col>
                        <el-col :span="9">
                            <el-button type="success" class="block" @click="getSms()">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" class="block">{{model === 'login' ? '登录' : '注册'}}</el-button>
                </el-form-item>
            </el-form>
        </div>
  </div>
</template>

<script>
import { GetSms } from '@/api/login'
import { onMounted, reactive, ref } from '@vue/composition-api'
import { stripscript, validateEmail, validatePass, validateVCode } from '@/utils/validata'
export default {
    name:'Login',
    setup(props, {refs}){
        //验证用户名邮箱
        let validateUsername = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入用户名'));
            } else if(validateEmail(value)){
            callback(new Error('用户名格式有误'));
            } else {
                callback(); //true
            }
        };
        // 输入密码
        let validatePassword = (rule, value, callback) => {
            // 过滤后的数据
           ruleForm.password = stripscript(value)
            value = ruleForm.password
            if (value === '') {
            callback(new Error('输入密码'));
            } else if (validatePass(value)) {
            callback(new Error('密码为6至20为数字+字母'));
            } else {
            callback();
            }
        };
        // 确认密码
        let validatePasswords = (rule, value, callback) => {
            //如果模块值为login,直接通过
            if(model.value === 'login'){ callback(); }
            // 过滤后的数据
            ruleForm.passwords = stripscript(value)
            value = ruleForm.passwords
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value != ruleForm.password) {
            callback(new Error('重复密码不正确'));
            } else {
            callback();
            }
        };
        // 验证码
        let validateCode = (rule, value, callback) => {
            // 过滤后的数据
            ruleForm.password = stripscript(value)
            value = ruleForm.code
            if (value === '') {
            return callback(new Error('请输入验证码'));
            } else if (validateVCode(value)) {
            return callback(new Error('验证码不正确'));
            } else {
            callback();
            }
        };

        const menuTab = reactive([
            { txt: '登陆', current: true, type: 'login' },
            { txt: '注册', current: false, type: 'register' }
        ])
        // 模块值
        const model = ref('login')
        // 表单绑定数据
        const ruleForm = reactive({
            username: '',
            password: '',
            passwords: '',
            code: ''
        })
        //表单的验证
        const rules = reactive({
            username: [
                { validator: validateUsername, trigger: 'blur' }
            ],
            password: [
                { validator: validatePassword, trigger: 'blur' }
            ],
            passwords: [
                { validator: validatePasswords, trigger: 'blur' }
            ],
            code: [
                { validator: validateCode, trigger: 'blur' }
            ]
        })
        //声明函数
        const toggleMenu = (data =>{
            menuTab.forEach((elem, index) =>{
                    elem.current = false
                });
                // 高光
                data.current = true
                // 修改模块值
                model.value = data.type
            })
            // 获取验证码
            const getSms = (()=>{
                if(ruleForm.username == ''){
                    root.$message.error('邮箱不能为空！！')
                    return false
                }
                //请求接口
                GetSms({ username: ruleForm.username }).then(Response=>{

                }).catch(error =>{
                    console.log(error)
                })
            })
            /* from表单 */
            const submitForm = (formName =>{
                refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }) 
        /*
         * 生命周期
         */
        //挂载完成后
        onMounted(()=>{
            //GetSms();
        })
        return{
            menuTab,
            model,
            ruleForm,
            rules,
            toggleMenu,
            submitForm,
            getSms
        }
    },
}
</script>

<style lang="scss" scoped>
    #login{
        height: 100vh;
        background-color: #334a5f;
    }
    .login-wrap{width: 330px; margin:  auto;}
    .menu-tab{
        text-align: center;
    }
    .menu-tab li{
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: white;
        border-radius: 2px;
        cursor: pointer;
    }
    .current{background-color: rgba(0,0,0,0.1);}
    .login-from label{color: white;display: block;font-size: 14px;}
    .block{width: 100%;display: block;}
</style>
