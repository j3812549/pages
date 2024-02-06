<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
  <div>
    <h3 class="text-xl m-2 font-medium">插件列表</h3>
    <ul>
      <li>
        <div>
          <RouterLink to="/vuekeepcachescrollhooks">vue-keep-cache-scroll-hooks</RouterLink>
          <span class="ml-2">keepalive下缓存滚动条位子的hooks</span>
          <span class="ml-2"><a class="font-bold"
              href="https://github.com/j3812549/vue-keep-cache-scroll-hooks">github</a></span>
          <span class="ml-2"><a class="font-bold"
              href="https://www.npmjs.com/package/vue-keep-cache-scroll-hooks">npm</a></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped></style>