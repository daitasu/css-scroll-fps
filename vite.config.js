import { defineConfig } from "vite";
import { resolve } from "node:path";

const root = import.meta.dirname;

// dev（pnpm run dev）は patterns 配下の index.html をそのまま配信するので設定不要。
// build 時だけ各パターンを出力対象にするため input を列挙する。
// パターンを増やしたらここに 1 行足すだけ。
export default defineConfig({
  // 相対パス出力。GitHub Pages のサブパス（/css-scroll-fps/）でも
  // ローカル（/）でもそのまま動くようにする。
  base: "./",
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, "index.html"),
        "001-fade-in": resolve(root, "patterns/001-fade-in/index.html"),
        "002-progress-bar": resolve(root, "patterns/002-progress-bar/index.html"),
        "003-avatar-animations": resolve(root, "patterns/003-avatar-animations/index.html"),
        "004-3d-cube": resolve(root, "patterns/004-3d-cube/index.html"),
        "005-fps-flythrough": resolve(root, "patterns/005-fps-flythrough/index.html"),
      },
    },
  },
});
