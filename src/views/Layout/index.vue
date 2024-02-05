<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
  <div>
    <h3 class="text-xl m-2 font-medium">插件列表</h3>
    <ul>
      <li>
        <RouterLink to="/vuekeepcachescrollhooks">vue-keep-cache-scroll-hooks</RouterLink>
        <span class="ml-2">keepalive下缓存滚动条位子的hooks</span>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped></style>