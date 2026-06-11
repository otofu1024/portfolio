# 設計判断

## 採用済みの設計判断

- アプリの技術スタックは TypeScript + Vite + React とする。
- ポートフォリオは1ページ構成にする。
- 主要セクションは Hero、About、Skills、Projects、Contact の5つにする。
- コンテンツは静的に扱い、`src/App.tsx` に集約する。
- ユーザー提供のプロフィール情報とデザイン要望は `docs/user` を参照元にする。
- 現在のアプリ規模では、コンポーネント分割は行わない。
- スタイリングはTailwind CSS v4を中心に行う。
- Tailwind CSSは `@tailwindcss/vite` pluginでViteに統合する。
- `src/index.css` で `@import "tailwindcss";` を読み込む。
- テーマはライトテーマ固定にする。
- ダークモードおよび `prefers-color-scheme` による分岐は使わない。
- グラデーション、影、強い装飾は使わない。
- 配色はゆず系の単色パレットを使い、背景はクリームホワイト、文字はチャコールブラウン、リンクや補助色にゆずリーフを使う。
- カードを多用せず、プロジェクト項目は罫線で区切ったシンプルなリストにする。
- Heroは参考画像の方向性に合わせ、大きな名前、背景文字、ドット装飾、右側プロフィールパネルでポップさを出す。
- Heroには `src/assets/icon.png` をプロフィールアイコンとして表示する。
- レスポンシブ対応はTailwindのユーティリティクラスで行う。
- ルーティング、フォーム、アニメーションのための依存関係は追加しない。

## 実装上の境界

- `src/App.tsx` はページ構造と表示データを担当する。
- `docs/user/about_me.md` は本人情報と制作物情報の参照元として扱う。
- `docs/user/design.md` は配色とデザイン方針の参照元として扱う。
- `src/App.tsx` 内のTailwindクラスがページ固有のレイアウトと見た目を担当する。
- `src/index.css` はTailwindの読み込み、基本タイポグラフィ、グローバルな要素スタイルを担当する。
- `vite.config.ts` はReact pluginとTailwind pluginの設定を担当する。
- `src/main.tsx` はReactアプリをマウントするだけのシンプルなファイルとして維持する。
- `package.json` は、将来のタスクで依存関係やスクリプト変更が明示されない限り変更しない。

## 検証方針

- 構文やLintの問題確認には、まず `npm run lint` を使う。
- TypeScriptチェックと本番ビルド確認には `npm run build` を使う。
- 手動の見た目確認には `npm run dev` を使う。
