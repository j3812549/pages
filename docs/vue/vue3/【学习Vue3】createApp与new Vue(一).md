## createApp 与 new Vue 的比较

### 1. 创建应用实例

#### Vue 2

在 Vue 2 中创建应用实例的方式如下：

```javascript
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')

```

#### Vue 3

在 Vue 3 中，创建应用实例的方式有了变化：

```javascript
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

```

### 2. 深入思考

##### 问题：
尽管 **new Vue** 和 **createApp** 都可以用来创建 Vue 实例，那么为什么 Vue 3 引入了 **createApp** 方法呢？

##### 解答：
使用 **new Vue** 创建实例时，会将 Vue 框架的所有 API 全部引入到项目中，即使其中一些 API 在项目中并未使用。而在 Vue 3 中，通过 **createApp** 方法结合 ES6 的 **import** 和 **export** 特性，仅将实际使用到的 API 引入项目中。这种按需引入的方式显著减小了项目体积，从而提升了性能。



