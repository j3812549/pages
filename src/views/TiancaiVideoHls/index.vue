
<script setup>
import { onMounted } from 'vue'
import TiancaiVideoHls from 'tiancai-video-hls'

onMounted(() => {
  const video = new TiancaiVideoHls({
    autoPlay: true,
    onHandle: {
      onError: () => { console.log('onError') },
      onSuccee: () => { console.log(`onSuccee`) },
      onProgress: () => { console.log(`onProgress`) },
      onPlaying: () => { console.log(`onPlaying`) },
      onEnded: () => { console.log(`onEnded`) },
      onPause: () => { console.log(`onPause`) },
      onPlay: () => { console.log(`onPlay`) },
      onCanplay: () => { console.log(`onCanplay`) }
    },
    box: document.getElementById('tiancai9-video'),
    sources: ['http://127.0.0.1:3000/1.mp4', 'https://c3.monidai.com/20231119/JqT4DANw/index.m3u8', 'https://c3.monid43ai.com/202', 'https://c354.mon424idai.com/202']
  })
})
</script>
<template>
  <div id="tiancai9-video"></div>
</template>
<style scoped>
body {
  margin: 0;
  font-size: 16px;
  height: 100vh;
}

#tiancai9-video {
  width: 40%;
  height: 400px;
}

@media(max-width:400px) {
  #tiancai9-video {
    width: 100%;
    height: 200px;
  }
}
</style>