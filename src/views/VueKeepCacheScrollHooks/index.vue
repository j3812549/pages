
<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
  <div>
    <div class="warp">
      <RouterLink class="btn" to="/vuekeepcachescrollhooks/a">页面A</RouterLink>
      <RouterLink class="btn" to="/vuekeepcachescrollhooks/b">页面B</RouterLink>
    </div>
    <RouterView v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </RouterView>
  </div>
</template>
<style lang="scss" scoped></style>