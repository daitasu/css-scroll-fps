# css-scroll-fps

CSS の **Scroll-Driven Animations**（`animation-timeline: scroll()` / `view()`）だけで、
JavaScript を一切書かずにスクロール連動アニメーションを作る作例集。

## セットアップ

```bash
pnpm install
pnpm run dev
```

`pnpm run dev` で Vite の開発サーバーが起動する。表示された URL（既定 `http://localhost:5173/`）を
開くと、各パターンへのリンク一覧が出る。

## パターン一覧

| #   | URL                              | 内容                                          | 主に使う API                       |
| --- | -------------------------------- | --------------------------------------------- | ---------------------------------- |
| 001 | `/patterns/001-fade-in/`         | スクロールで要素がふわっと出現（fade/slide）  | `animation-timeline: view()`       |
| 002 | `/patterns/002-progress-bar/`    | 上部固定のプログレスバー＋円形インジケーター  | `animation-timeline: scroll(root)` |
| 003 | `/patterns/003-avatar-animations/` | 画像に回転・拡大・モーフ・フィルタ・固定演出 | `view()` / `view-timeline`         |
| 004 | `/patterns/004-3d-cube/`         | 純 CSS 3D の回転する立方体（スクロール非依存）| `perspective` / `preserve-3d`      |
| 005 | `/patterns/005-fps-flythrough/`  | FPS 視点でスクロール前進する空中浮遊 3D シーン| CSS 3D × `scroll(root)`            |

各 URL は dev サーバー起動中に直接開いてもOK（例: `http://localhost:5173/patterns/002-progress-bar/`）。

## 構成

```
.
├── index.html                 # パターン一覧（トップ）
├── patterns/
│   ├── 001-fade-in/index.html
│   ├── 002-progress-bar/index.html
│   └── 003-avatar-animations/index.html
├── vite.config.js             # build 時のマルチページ入力を定義
└── package.json
```

各パターンは依存ゼロの単一 HTML（CSS は `<style>` にインライン）。dev サーバーなしでも、
`patterns/xxx/index.html` をブラウザで直接開けば動く。

### パターンを増やすとき

1. `patterns/00X-xxx/index.html` を追加
2. `index.html`（トップ）にリンクカードを追加
3. `vite.config.js` の `rollupOptions.input` に 1 行追加（build 対象にするため）

## 対応ブラウザ

Chrome / Edge 115+、Safari 26+、Firefox（近年版）。未対応環境では各ページに
`@supports not (animation-timeline: ...)` のフォールバックを用意してあり、アニメなしで静的に表示される。

## 参考

- [MDN: animation-timeline](https://developer.mozilla.org/ja/docs/Web/CSS/animation-timeline)
- [Cybozu Frontend: Scroll-driven Animations](https://zenn.dev/cybozu_frontend/articles/srcoll-driven-animations)
