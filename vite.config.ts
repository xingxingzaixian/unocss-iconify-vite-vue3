import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Components({
      resolvers: [IconsResolver({ prefix: 'icon' })],
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
      scale: 1,
      defaultClass: 'inline-block',
      defaultStyle: 'width: 2rem; height: 2rem;',
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
});
