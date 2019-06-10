<template>
  <el-row :gutter="20" style="margin-top: 3em">
    <el-divider shadow="never">曝光违法违规信息</el-divider>
    <el-col :span="16" :offset="4">
      <el-card class="createExposeForm">
        <el-row :gutter="20" class="exposeFormItem">
          <el-col :span="16" :offset="4"><el-input v-model="exposeInfo.company" placeholder="公司名称" /></el-col>
        </el-row>
        <el-row :gutter="20" class="exposeFormItem">
          <el-col :span="16" :offset="4"><el-input v-model="exposeInfo.code" placeholder="代码" /></el-col>
        </el-row>
        <el-row :gutter="20" class="exposeFormItem">
          <el-col :span="16" :offset="4"><el-input v-model="exposeInfo.content" type="textarea" rows="6" placeholder="内容" /></el-col>
        </el-row>
        <el-divider />
        <el-row :gutter="20" class="exposeFormItem">
          <el-col :span="16" :offset="4">
            <el-button type="primary" @click="submit()">立即创建</el-button>
            <el-button @click="cancel()">取消</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'NewExpose',
  data() {
    return {
      exposeInfo: {
        company: '',
        code: '',
        content: ''
      }
    }
  },
  methods: {
    submit() {
      console.log('expose info', this.exposeInfo)
    },
    cancel() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .createExposeForm {
    text-align: center;
    border-radius: 5px;
  }
  .exposeFormItem {
    margin: 3em;
  }
</style>
