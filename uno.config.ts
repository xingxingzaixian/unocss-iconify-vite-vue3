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
