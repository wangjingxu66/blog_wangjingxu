<template>
  <ul id="NavUnit" class="nav_unit_container">
    <li v-for="(item, index) in navList" :key="index" :class="generateLevelClass(item.nav.level)">
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
import NavUnit from './NavUnit'
export default {
  name: 'NavUnit',

  components: {
    NavUnit
  },

  props: {
    navList: {
      type: Array,
      required: true,
    }
  },

  methods: {
    handleClickNavItem (item) {
      if (item.nav.type) {
        this.$router.push({
          path: item.route.path,
          query: { type: item.nav.type }
        })
      } else {
        this.$router.push(item.route.path)
      }
    },

    generateLevelClass (level) {
      return `nav_level_${level}`
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin nav_li_style ($level) {
    padding-left: $level * 50px;
    padding-top: 20px - $level * 2;
    padding-bottom: 20px - $level * 2;
    padding-right: 20px;

    @if ($level == 0) {
      color: #333;
      font-weight: bold;
    } @else if ($level == 1) {
      color: #666;
      font-weight: normal;
    }

    & > div > a {
      display: inline-block;
      margin-bottom: 20px;
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
  .nav_level_4 {
    @include nav_li_style(4);
  }
</style>
