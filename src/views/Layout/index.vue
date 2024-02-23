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
      <li>
        <div>
          <RouterLink to="/tiancaivideohls">tiancai-video-hls</RouterLink>
          <span class="ml-2">基于原生js实现的hls视频播放器，可播放m3u8视频</span>
          <span class="ml-2"><a class="font-bold"
              href="https://github.com/j3812549/tiancai-video-hls">github</a></span>
          <span class="ml-2"><a class="font-bold"
              href="https://www.npmjs.com/package/tiancai-video-hls">npm</a></span>
        </div>
      </li>
      <li>
        <div>
          tiancai-mpa-ejs-hot-webpack-cli
          <span class="ml-2">带热更新的多页面可模块化的脚手架工具、请求同时支持SEO和AJax、支持SCSS编写</span>
          <span class="ml-2"><a class="font-bold"
              href="https://github.com/j3812549/tiancai-mpa-ejs-hot-webpack-cli">github</a></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped></style>