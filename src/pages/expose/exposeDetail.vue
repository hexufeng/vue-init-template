<template>
  <div class="detailBlock">
    <div class="codeBlock">{{ exposeInfo.code }}</div>
    <div class="nameBlock">{{ exposeInfo.company }}</div>
    <el-row :gutter="20">
      <el-col :span="14" :offset="5">
        <div class="contentBlock">{{ exposeInfo.content }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exposeInfo: {}
    }
  },
  beforeMount() {
    this.exposeInfo = {
      code: 300254,
      company: '*ST新海',
      content: 'SMTP 协议是一个简单的邮件传输协议，利用它您可以将邮件发送给别人。此协议使用命令和应答在客户端与服务器之间传输报文。即客户端发出一个命令，服务器返回一个应答。发送方与接收方进行一问一答的交互，由发送方控制这个对话。\n' +
      '\n' +
      '目前最新的 SMTP RFC 协议是 RFC5321 。\n' +
      '\n' +
      '使用 SMTP 协议的邮件服务器分为两种：\n' +
      '\n' +
      '一种为邮件发送服务器，通常叫做 smtpd，需要发件人进行认证。\n' +
      '一种为邮件接收服务器，通常叫做 mx，接收外部运营商用户投递给本地用户的邮件。\n' +
      '阿里云邮件推送的邮件服务器为 smtpd，所以需要进行用户认证（要求认证用户名和发件人必须一致），认证用户名(就是发件人)和密码可以通过控制台进行设置。'
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .detailBlock {
    margin: 10em;
  }
  .codeBlock {
    text-align: center;
  }
  .nameBlock {
    text-align: center;
    font-family: Helvetica;
  }
  .contentBlock {
    text-align: center;
    font: 13px/1 Tahoma,Helvetica,Arial,"\5b8b\4f53",sans-serif;
  }
</style>
