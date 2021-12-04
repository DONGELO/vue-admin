<template>
  <div id="category">
      <el-button type="danger" size="small">添加一级分类</el-button>
      <hr style="margin:20px 0; margin-left: -30px; margin-right: -30px; opacity: 0.3;">
      <div>
        <el-row :gutter="30">
          <el-col :span="8">
            <div class="category" v-for="fristItem in category" :key="fristItem.id">
              <h4>
                <img src="@/assets/add.png" alt="" style="width:22px; height:22px; vertical-align:middle">
                {{fristItem.category_name}}
                <div class="button-group">
                  <el-button size="mini" type="danger" round>编辑</el-button>
                  <el-button size="mini" type="success" round>添加子级</el-button>
                  <el-button size="mini" round>删除</el-button>
                </div>
              </h4>
              <ul v-if="fristItem.children">
                <li v-for="childrenItem in fristItem.children" :key="childrenItem.id">
                  {{childrenItem.category_name}}
                  <div class="button-group">
                    <el-button size="mini" type="danger" round>编辑</el-button>
                    <el-button size="mini" round>删除</el-button>
                  </div>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="16">
            <h4 class="menu-title">一级分类编辑</h4>
            <el-form  label-width="100px" class="w410">
              <el-form-item label="一级分类名称">
                <el-input v-model="form.categoryName"></el-input>
              </el-form-item>
              <el-form-item label="二级分类名称">
                <el-input v-model="form.secCategoryName"></el-input>
              </el-form-item>
              <el-form-item label="">
                <el-button type="danger" @click="submit">确定</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api'
import { AddFristCategory } from '@/api/news'
export default {
    name: 'category',
    setup ( props ) {
      const form = reactive({
          categoryName: '',
          secCategoryName: ''
      })
      const category = reactive([
        {
          id: '1',
          category_name: '国际信息',
          children: [
            {
              id: '3',
              category_name: '信息333',
            },
            {
              id: '5',
              category_name: '信息555',
            }
          ]
        },
        {
          id: '2',
          category_name: '国内信息',
          children: [
            {
              id: '4',
              category_name: '信息444',
            }
          ]
        }
      ])
      /*
       * method 方法
        */
       const submit = () =>{

       }
      return {
         form, category,
         submit
      }
    }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/config.scss";
  .menu-title{
    line-height: 44px;
    background-color: #f3f3f3f3;
    margin: 0;
    padding: 0 22px;
  }
  .w410{width: 410px; margin-top: 30px;}
  .category{
    line-height: 44px;
    position: relative;
    cursor: pointer;
    &:before{
      content: '';
      position: absolute;
      width: 32px;
      left:22px;
      top: 30px;
      bottom: 20px;
      border-left: 1px dotted #000;
    }
    h4{
      padding-left: 11px;
      margin: 0;
    }
    ul{
      li{
        list-style: none;
        padding-left: 40px;
        margin-left: -16px;
        position: relative;
        &:before{
          content: '';
          position: absolute;
          width: 32px;
          left:0;
          top: 22px;
          border-bottom: 1px dotted #000;
        }
      }
    }
    li, h4{
      @include webkit(transition, all .3s ease 0s);
      &:hover{ 
        background-color: #f3f3f3f3;
        .button-group{display: block;}
      }
    }
  }
  .button-group{
      display: none;
      position: absolute;
      z-index: 2;
      right: 11px;
      top: 0px;
    }
</style>