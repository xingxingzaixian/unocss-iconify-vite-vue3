这是一个使用unocss+iconify的示例代码库，解决vue3开发中图标、svg和样式的问题

# Iconify使用

## 安装

#### iconify/json图标集

```Bash
pnpm add -D @iconify/json
```

包括所有图表集

#### unplugin-icons按需引入

```Bash
pnpm add -D unplugin-icons
```

这个插件会按需引入我们需要的图标，这样就不会把所有的图标120M+都打包进去

#### unplugin-vue-components 组件方式使用

```Bash
pnpm add -D unplugin-vue-components
```

这个库可以让我们使用组件的方式使用图标

#### @iconify/vue 组件方式使用

```Bash
pnpm add @iconify/vue
```

这个也是以组件的方式使用图标，和上面的区别是组件名称固定，通过传入icon属性来区分图标，有利于我们进行组件封装

#### vite-plugin-svg-icons 使用本地Svg

```Bash
pnpm add vite-plugin-svg-icons -D
```

引入本地svg文件使用

# Unocss使用
## 安装

#### unocss

```Bash
pnpm add -D unocss
```

## 使用unocss

`vite.config.ts`配置

```TypeScript
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
})
```

创建`uno.config.ts`文件

```TypeScript
// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetIcons,
  presetAttributify,
  presetTypography,
} from 'unocss';

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
});

```

`main.ts`中导入`uno.css`

```TypeScript
// main.ts
import 'virtual:uno.css'
```

在Vue文件中使用

```Vue
<template>
  <div
    underline
    font-size-9
    text-center
    font-extrabold
    animate-bounce-in-down
    animate-count-infinite
  >
    Unocss + Vite + Vue3
  </div>
</template>
```

