<template>
  <div>
    <div id="cssmenu">
      <ul>
        <!--<li :class="homeLiClass" @click="menuClick('home')"><a href="#">首页</a></li>-->
        <li :class="productsLiClass" @click="menuClick('products')"><a href="#">曝光</a></li>
        <li :class="companyLiClass" @click="menuClick('company')"><a href="#">维权</a></li>
        <li :class="contactLiClass" @click="menuClick('contact')"><a href="#">关于我们</a></li>
      </ul>
    </div>
    <div style="margin: 20px">
      <!--<Index v-if="homeLiClass==='active'"/>-->
      <Expose v-if="productsLiClass==='active'"/>
      <Accuse v-if="companyLiClass==='active'"/>
      <About v-if="contactLiClass==='active'"/>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { USER_SIGNOUT } from '@/store/user'
import * as common from '@/api/common'
import * as api from '@/api/index'
import * as auth from '@/utils/auth'
import About from '@/pages/about/About'
import Accuse from '@/pages/accuse/Accuse'
import Expose from '@/pages/expose/Expose'
import Index from '@/pages/index/Index'

export default {
  components: {
    Index,
    About,
    Accuse,
    Expose
  },
  computed: mapState({ user: state => state.user }),
  beforeMount() {

  },
  data() {
    return {
      // homeLiClass: 'active',
      productsLiClass: 'active',
      companyLiClass: '',
      contactLiClass: ''
    }
  },
  methods: {
    ...mapActions([USER_SIGNOUT]),
    /* 点击菜单 */
    menuClick(name) {
      this.clearMenuActive()
      switch (name) {
        /* case 'home':
          this.homeLiClass = 'active'
          break */
        case 'products':
          this.productsLiClass = 'active'
          break
        case 'company':
          this.companyLiClass = 'active'
          break
        case 'contact':
          this.contactLiClass = 'active'
          break
        default:
          break
      }
    },
    /* 清除菜单的选中样式 */
    clearMenuActive() {
      // this.homeLiClass = ''
      this.productsLiClass = ''
      this.companyLiClass = ''
      this.contactLiClass = ''
    },

    handleCommand(command) {
      if (command === 'signout') {
        this.USER_SIGNOUT()
        auth.removeToken()
        this.$router.replace({ path: '/login' })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  #cssmenu,
  #cssmenu ul,
  #cssmenu ul li,
  #cssmenu ul li a {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    line-height: 1;
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  #cssmenu {
    margin-top: 20px;
  }

  #cssmenu:after,
  #cssmenu > ul:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }

  #cssmenu {
    width: auto;
    border-bottom: 3px solid #E040FB;
    font-family: Raleway, sans-serif;
    line-height: 1;
  }

  #cssmenu ul {
    background: #ffffff;
  }

  #cssmenu > ul > li {
    float: left;
  }

  #cssmenu.align-center > ul {
    font-size: 0;
    text-align: center;
  }

  #cssmenu.align-center > ul > li {
    display: inline-block;
    float: none;
  }

  #cssmenu.align-right > ul > li {
    float: right;
  }

  #cssmenu.align-right > ul > li > a {
    margin-right: 0;
    margin-left: -4px;
  }

  #cssmenu > ul > li > a {
    z-index: 2;
    padding: 18px 25px 12px 25px;
    font-size: 15px;
    font-weight: 400;
    text-decoration: none;
    color: #444444;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -ms-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
    margin-right: -4px;
  }

  #cssmenu > ul > li.active > a,
  #cssmenu > ul > li:hover > a,
  #cssmenu > ul > li > a:hover {
    color: #ffffff;
  }

  #cssmenu > ul > li > a:after {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 120%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    content: "";
    -webkit-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease;
    -webkit-transform: perspective(5px) rotateX(2deg);
    -webkit-transform-origin: bottom;
    -moz-transform: perspective(5px) rotateX(2deg);
    -moz-transform-origin: bottom;
    transform: perspective(5px) rotateX(2deg);
    transform-origin: bottom;
  }

  #cssmenu > ul > li.active > a:after,
  #cssmenu > ul > li:hover > a:after,
  #cssmenu > ul > li > a:hover:after {
    background: #E040FB;
  }
</style>
