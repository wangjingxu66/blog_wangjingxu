<template>
  <ul id="NavUnit" class="nav_unit_container">
    <li
      v-for="(item, index) in navList"
      :key="index"
      :class="`
        ${ generateLevelClass(item.nav.level) }
        ${ generateActiveClass(item) }
      `"
    >
      <div v-if="item.children && item.children.length">
        <a @click="handleClickNavItem(item)">{{ item.nav.name }}</a>
        <NavUnit :navList="item.children"></NavUnit>
      </div>

      <div v-else>
        <a @click="handleClickNavItem(item)">{{ item.nav.name }}</a>
      </div>
    </li>
  </ul>
</template>

<script>
import NavUnit from "./NavUnit";
export default {
  name: "NavUnit",

  components: {
    NavUnit
  },

  props: {
    navList: {
      type: Array,
      required: true
    }
  },

  // data() {
  //   return {
  //     example: '132'
  //   }
  // },

  // created () {
  //   this.onRouterChange(this.$route, null)
  // },

  // watch: {
  //   $route: 'onRouterChange',
  //   example: (val) => {
  //     console.log(val);
  //   }
  // }
  // },

  methods: {
    handleClickNavItem(item) {
      if (item.nav.type) {
        this.$router.push({
          path: item.route.path,
          query: { type: item.nav.type }
        });
      } else {
        this.$router.push(item.route.path);
      }
    },

    generateLevelClass(level) {
      return `nav_level_${level}`;
    },

    generateActiveClass(item) {
      // 有query下的type的情况
      if (item.nav.type) {
        if (
          this.$route.path === item.nav._path &&
          this.$route.query.type === item.nav.type
        ) {
          return "active";
        } else {
          return "";
        }
      }
      // 不包含query下的type的情况
      else {
        if (this.$route.path === item.nav._path) {
          return "active";
        } else {
          return "";
        }
      }
    }

    // onRouterChange (to, from) {
    //   debugger;
    // }
  }
};
</script>

<style lang="scss" scoped>
@mixin nav_li_style($level) {
  //  padding-left: $level * 50px;
  //  padding-top: 20px-$level * 2;
  // padding-bottom: 10px-$level * 2;
  // padding-right: 20px;
  .active {
    color: red;
  }
  @if ($level == 0) {
    color: #333;
    font-size: 20px;
    font-weight: bold;
    margin-top: 75px;
  } @else if ($level == 1) {
    color: #666;
    font-size: 16px;
    font-weight: normal;
  }

  & > div > a {
    display: inline-block;
    margin-bottom: 26px;
  }
}

.nav_level_0 {
  @include nav_li_style(0);
}
.nav_level_1 {
  @include nav_li_style(1);
}
.nav_level_2 {
  @include nav_li_style(2);
}
.nav_level_3 {
  @include nav_li_style(3);
}
</style>
