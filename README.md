# Portfolio

自己紹介ポートフォリオサイトです。TypeScript、Vite、React、Tailwind CSSで作成した1ページ構成の静的なフロントエンドアプリです。

## 概要

このサイトでは、自己紹介、使用技術、制作物、連絡先を1ページにまとめています。エンジニアとしての学習姿勢、興味領域、私個人の雰囲気が伝わることを重視しています。

主なセクションは以下です。

- Hero
- About
- Skills
- Projects
- Contact

## 主な機能

- Tailwind CSSによるレスポンシブな1ページデザイン
- Hero右側のプロフィールパネルと斜めグリーン背景
- プロフィール情報の統一されたSVGアイコン表示
- スクロール位置に連動するヘッダー下線
- ライト/ダークモードの手動切り替え
- テーマ選択の `localStorage` 保存
- Contact内のメール/GitHubリンクカード

## 技術スタック

- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint

## セットアップ

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ビルドします。

```bash
npm run build
```

Lintを実行します。

```bash
npm run lint
```

ビルド結果をローカルで確認します。

```bash
npm run preview
```

## ファイル構成

```text
.
├── AGENTS.md
├── docs
│   ├── ai
│   │   ├── current-state.md
│   │   ├── decisions.md
│   │   └── project-brief.md
│   └── user
│       ├── about_me.md
│       └── design.md
├── public
│   ├── favicon.svg
│   └── icons.svg
├── src
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── assets
│       └── icon.png
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 実装メモ

- `src/App.tsx` にページ構造、表示データ、テーマ切り替え、スクロール連動のヘッダー状態を集約しています。
- `src/index.css` でTailwind CSSを読み込み、`dark` variantとグローバルなベーススタイルを定義しています。
- ダークモードは `document.documentElement` に `dark` classを付け外しして実現しています。
- 初回テーマは `localStorage` を優先し、未保存の場合のみOSの `prefers-color-scheme` を参照します。
- ルーティング、バックエンド、フォーム送信、CMS、アニメーションライブラリは使っていません。

## AI向けドキュメント

今後のAI作業用に、以下のドキュメントを用意しています。

- `AGENTS.md`: Codexが守るルール
- `docs/ai/current-state.md`: 現在の実装状態
- `docs/ai/project-brief.md`: プロジェクトの目的と完成条件
- `docs/ai/decisions.md`: 採用済みの設計判断
- `docs/user/about_me.md`: ユーザー提供の本人情報
- `docs/user/design.md`: ユーザー提供のデザイン方針
