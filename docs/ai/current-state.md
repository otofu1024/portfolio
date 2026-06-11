# 現在の状態

## 概要

このリポジトリは、TypeScript、Vite、Reactで作られたミニマルな1ページ構成のポートフォリオサイトです。現在の実装は静的なクライアントサイドアプリで、ルーティング、バックエンド、フォーム送信、アニメーションライブラリ、外部UIライブラリはありません。

## ファイル構成

```text
.
├── AGENTS.md
├── docs
│   └── ai
│       ├── current-state.md
│       ├── decisions.md
│       └── project-brief.md
├── public
│   ├── favicon.svg
│   └── icons.svg
├── src
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── assets
│       ├── hero.png
│       ├── icon.png
│       ├── react.svg
│       └── vite.svg
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## 主要な実装ファイル

- `src/main.tsx` はReactアプリを `#root` にマウントし、`src/index.css` を読み込みます。
- `src/App.tsx` はページ全体の構造、ローカルの表示データ、プロフィールアイコンの読み込み、テーマ切り替え状態、Tailwind CSSのユーティリティクラスによる見た目を定義します。
- `src/index.css` はTailwind CSSの読み込み、`dark` variant、基本タイポグラフィ、ベーススタイル、フォーカススタイルを持ちます。
- `vite.config.ts` はReact pluginに加えて `@tailwindcss/vite` pluginを読み込みます。

## ページ構成

`src/App.tsx` は、単一の `<main>` の中に以下のセクションを描画します。

- Hero: ポートフォリオのラベル、宮本英人さんの名前、短いリード文、`#contact` へのリンク、プロフィールアイコン。
- About: 生年、出身、趣味、大学で学んでいることに基づく短い自己紹介文。
- Skills: ローカルの `skills` 配列から描画されるスキル一覧。
- Projects: ローカルの `projects` 配列から描画されるプロジェクト一覧。
- Contact: メールとGitHubへのリンク。

## データの流れ

すべてのコンテンツは静的で、`src/App.tsx` 内に定義されています。

- `skillTree` は言語と、その配下にぶら下がるライブラリの配列です。現在は `Python` の下に `FastAPI, httpx, asyncio, Pydantic` を表示し、`Rust` は単独で表示します。
- `learningTopics` は今後学びたい技術・分野の文字列配列で、Skillsセクション内に描画されます。
- `projects` は `title`、`description`、`tech`、`link` を持つオブジェクト配列です。
- `src/assets/icon.png` は `src/App.tsx` からimportされ、Heroセクションのプロフィールアイコンとして表示されます。
- テーマ状態は `useState` で管理し、初期値は `localStorage` の `theme`、未保存時は `prefers-color-scheme` を参照します。
- テーマ変更時は `document.documentElement` に `dark` classを付け外しし、`localStorage` に保存します。
- props、データ取得、context、外部設定ファイルは使っていません。

## スタイリングの状態

- Tailwind CSS v4をVite plugin経由で導入しています。
- レイアウトは `src/App.tsx` 内のTailwindユーティリティクラスで定義されています。
- ページ全体は最大幅6xlのコンテナに制限されています。
- Heroは参考画像に寄せて、大きな日本語見出し、淡い背景文字、ドット装飾、右側のグリーン背景面、プロフィールパネルを使っています。
- プロフィールパネル内の `profileFacts` は、絵文字ではなく同じ線幅・同じ丸背景のSVGアイコンで表現しています。
- セクション間は余白と薄い罫線で区切られています。
- プロジェクト項目はカードではなく、罫線で区切られた通常のリストです。
- Contactセクションの大枠は通常セクションのままにし、メールとGitHubのリンク部分だけ丸みのあるカードデザインを使っています。カード内には丸背景のアイコン、リンク先ラベル、補助文、右下の矢印を表示します。
- テーマはライト/ダークの手動切り替えに対応しています。
- 色は `docs/user/design.md` のゆず系カラーパレットを反映しています。
- 初回表示時のみ `prefers-color-scheme` を参照し、その後はユーザーの手動選択を優先します。
- グラデーション、ボックスシャドウ、強い装飾要素は使っていません。

## 今後の作業メモ

- Xリンクは現在表示していません。正式なアカウントが必要になったら追加してください。
- `src/assets/hero.png`、`src/assets/react.svg`、`src/assets/vite.svg`、`public/icons.svg` は現在 `App.tsx` から使われていません。
- `docs/user/design.md` には「学習姿勢m技術への関心」という誤字と思われる箇所がありますが、原本としてそのままにしています。
- これらは現状の観察メモです。ユーザーから実装変更を依頼されるまでは修正しないでください。
