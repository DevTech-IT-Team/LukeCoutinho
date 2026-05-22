import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { cpSync } from 'node:fs';
import { resolve } from 'node:path';

const LC_LOGO_SRC = resolve(__dirname, 'src/assets/LClogoo.png');
const LC_LOGO_PUBLIC = resolve(__dirname, 'public/LClogoo.png');

/** Keep browser tab icon in sync with src/assets/LClogoo.png */
function syncLcLogo() {
  cpSync(LC_LOGO_SRC, LC_LOGO_PUBLIC);
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'sync-lc-logo',
      buildStart() {
        syncLcLogo();
      },
      configureServer() {
        syncLcLogo();
      },
    },
  ],
});
