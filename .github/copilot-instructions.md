# Copilot Instructions - やすおのブログ

## プロジェクト概要

修繕ブログサイト。**VitePress** (Vue + Vite) でMarkdownから静的HTMLを生成し、GitHub Pagesで公開。VS Codeで記事を書き、CLI で本番ファイルを生成するワークフロー。

## ファイル構成

```
.
├── docs/                          # ブログコンテンツ
│   ├── index.md                  # ホームページ
│   ├── about.md                  # サイト紹介
│   ├── articles/                 # ブログ記事置き場
│   │   ├── index.md             # 記事一覧ページ
│   │   └── first-post.md         # サンプル記事（削除可）
│   ├── guide/                    # VitePress使い方ガイド
│   │   └── index.md
│   └── .vitepress/
│       └── config.ts             # サイト設定（タイトル・ナビ）
├── dist/                          # 本番ファイル出力（git無視）
├── node_modules/                 # npm依存パッケージ
├── package.json                  # npm設定・スクリプト
└── .github/copilot-instructions.md  # このファイル
```

## 主要スクリプト

| コマンド | 用途 | 説明 |
|---------|------|------|
| `npm run dev` | 開発・プレビュー | `http://localhost:5173` でブラウザ表示。Markdownの変更が自動反映 |
| `npm run build` | 本番ファイル生成 | `dist/` フォルダに静的HTML・CSS出力。GitHub Pagesに自動デプロイ |
| `npm run serve` | 本番プレビュー | ビルド後、本番環境を確認 |

## 記事の書き方

### 1. 新規記事作成手順

```bash
# 1. docs/articles/ に .md ファイルを作成
# 例：docs/articles/2025-12-11-roof-repair.md

# 2. Front Matter（ファイル先頭）に必須情報を書く
---
title: 記事のタイトル
description: 記事の説明文
date: 2025-12-11
---

# 3. 本文をMarkdownで書く
## 見出し
- リスト項目
```

### 2. 必須のFront Matterフィールド

- `title`: 記事タイトル（必須）
- `description`: 記事の説明（メタディスクリプション）
- `date`: 投稿日（YYYY-MM-DD形式）

### 3. Markdownの基本構文

```markdown
# 大見出し
## 中見出し
### 小見出し

**太字** / *斜体* / `コード`

- 箇条書き
  - ネスト可能

[リンク](https://example.com)

> 引用文

| 列1 | 列2 |
|-----|-----|
| セル| セル|
```

### 4. 画像の挿入

画像は `docs/` 配下の好きなフォルダに配置。相対パスで参照。

構文：感嘆符 + 角括弧で代替テキスト + 丸括弧で画像パス

例：`docs/articles/images/` フォルダに画像を配置した場合、記事からは絶対パス形式で参照します。

## サイト設定

編集ファイル：`docs/.vitepress/config.ts`

### タイトル・説明の変更

```typescript
export default defineConfig({
  title: 'やすおのブログ',               // ブラウザタイトル
  description: '住まいの修繕...',       // メタディスクリプション
  lang: 'ja-JP',
  themeConfig: {
    siteTitle: 'やすおのブログ',         // ヘッダーに表示
    nav: [ /* ナビゲーションメニュー */ ],
    sidebar: { /* サイドバー設定 */ }
  }
})
```

### ナビゲーション メニュー追加例

```typescript
nav: [
  { text: 'ホーム', link: '/' },
  { text: '新カテゴリ', link: '/new-category/' },
]
```

## デプロイ（GitHub Pagesへの公開）

### 1. 変更をコミット

```bash
git add .
git commit -m "記事を追加"
```

### 2. GitHubにプッシュ

```bash
git push origin main
```

### 3. 自動デプロイ

GitHub Actionsが自動的に以下を実行します：
- `npm run build` で本番ファイルを生成
- `dist/` フォルダをGitHub Pagesにデプロイ
- 数分後にサイトが更新されます

## プロジェクト設定・カスタマイズ

### favicon / ロゴの設定

1. `docs/public/` ディレクトリを作成
2. `favicon.ico` 等を配置
3. `config.ts` で参照：
   ```typescript
   themeConfig: {
     logo: '/logo.png',  // ヘッダーロゴ
   }
   ```

### サイドバー構造の変更

複数カテゴリがある場合、`config.ts` の `sidebar` で構成：

```typescript
sidebar: {
  '/articles/': [
    { text: '修繕記事', items: [
      { text: '屋根', link: '/articles/roof/' },
      { text: '壁', link: '/articles/walls/' }
    ]}
  ]
}
```

## トラブルシューティング

| 問題 | 原因 | 解決策 |
|------|------|--------|
| `npm: 用語が認識されない` | PowerShell実行ポリシー | `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` |
| 記事がサイトに表示されない | Front Matter形式エラー | YAML形式を確認（タイムをチェック）|
| ビルドエラー | 依存パッケージ破損 | `rm -r node_modules && npm install` |
| ローカル画像が表示されない | パス間違い | 画像パスを確認（絶対パスを推奨） |

## 開発のベストプラクティス

1. **常にローカルでプレビュー** - `npm run dev` で確認後、ビルド
2. **ファイル名は小文字** - URLが小文字になるためWindows互換性向上
3. **定期的なコミット** - `.gitignore` には `dist/` と `node_modules/` が設定済み
4. **サンプル記事の削除** - 実際の記事に置き換える際、`first-post.md` は削除

## 参考リンク

- [VitePress 公式ドキュメント](https://vitepress.vuejs.org/)
- [Markdown チートシート](https://www.markdownguide.org/cheat-sheet/)
- [GitHub Pages ドキュメント](https://docs.github.com/ja/pages)

---

**最終更新**: 2026-01-12
