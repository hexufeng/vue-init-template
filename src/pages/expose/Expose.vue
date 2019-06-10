<template>
  <div>
    <el-card shadow="never">
      <el-row :gutter="20">
        <el-col :span="6"><el-button class="exposeBtn" round @click="goexposeone()" >我要曝光</el-button></el-col>
        <el-col :span="6" :offset="12">
          <div class="exposeOperate">
            <el-input placeholder="输入公司名或证券代码" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"/>
            </el-input>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <div class="exposeList">
      <div v-for="item in exposeList" :key="item.id" class="exposeItem" >
        <el-link @click="godetail(item.id)"><div class="exposeTitle">{{ item.title }}</div></el-link>
        <el-link @click="godetail(item.id)">
          <div class="exposeContent">
            {{ item.content }}
          </div>
        </el-link>
        <el-divider />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import * as common from '@/api/common'

export default {
  name: 'Expose',
  data() {
    return {
      exposeList: []
    }
  },
  computed: mapState({ user: state => state.user }),
  beforeMount() {
    common.exposeList(res => {
      this.exposeList = res
    })
  },
  methods: {
    godetail(id) {
      this.$router.push('/expose/' + id)
    },
    goexposeone() {
      this.$router.push('/exposeone')
      /*if (!this.user || JSON.stringify(this.user) === '{}') {
        this.$router.push('/login')
      } else {
        this.$router.push('/exposeone')
      }*/
    }
  }
}
</script>

<style scoped>
  .exposeOperate {
    margin-right: 10px;
  }
  .exposeBtn {
    background: #E040FB;
    color: #ffffff;
  }
  .exposeList {
    margin-top: 20px;
  }
  .exposeItem {
    margin-top: 10px;
  }
  .exposeTitle {
    font-size: 1.5em;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.69);
  }
  .exposeContent {
    margin-top: 10px;
    font-size: 0.8em;
    color: rgba(0, 0, 0, 0.7);
  }
</style>
