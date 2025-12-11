# VitePress ブログの使い方

このブログは **VitePress** で作られています。ここではブログの基本的な使い方を説明します。

## ローカルでの確認（開発モード）

ブラウザでブログをプレビューしながら記事を書きたい場合：

```bash
npm run dev
```

実行すると、`http://localhost:5173/` でブログが見られます。
Markdown ファイルを保存すると、自動的にブラウザに反映されます。

## 本番用ファイルを生成

FC2にアップロードするための静的HTML・CSSを生成します：

```bash
npm run build
```

実行後、`dist/` フォルダが作成されます。このフォルダ内のすべてのファイルをFC2にアップロードしてください。

## ファイル構成

```
docs/
├── index.md              ← ホームページ
├── articles/             ← ブログ記事はここに
│   ├── index.md         （記事一覧）
│   └── first-post.md
├── guide/               ← このガイド
│   └── index.md
└── .vitepress/
    └── config.ts        ← サイト設定（タイトルなど）
```

## 記事の書き方

### 新しい記事を追加する

1. `docs/articles/` フォルダに新しい `.md` ファイルを作成
2. 例：`docs/articles/2025-12-11-first-repair.md`
3. 以下のテンプレートで始める：

```markdown
---
title: 記事のタイトル
description: 記事の説明
date: 2025-12-11
---

# 記事のタイトル

本文をここに書きます。

## 見出し

Markdown形式で自由に書けます。
```

### Front Matter（ファイルの先頭情報）

| 項目 | 説明 | 例 |
|------|------|-----|
| `title` | 記事のタイトル | `「屋根の修理」` |
| `description` | 簡単な説明 | `「屋根からの雨漏り修理の記録」` |
| `date` | 投稿日 | `2025-12-11` |

## Markdown の基本

### テキスト装飾

- `**太字**` → **太字**
- `*斜体*` → *斜体*
- `` `コード` `` → `コード`

### リスト

```markdown
- 項目1
- 項目2
  - サブ項目2.1
  - サブ項目2.2
```

### コードブロック

\`\`\`python
def hello():
    print("Hello World")
\`\`\`

### リンク

```markdown
[テキスト](URL)
[VitePress公式](https://vitepress.vuejs.org/)
```

### 画像

```markdown
![代替テキスト](相対パスまたはURL)
```

## トラブルシューティング

### ブログがブラウザに表示されない

```bash
npm install
npm run dev
```

### 新しい記事がサイドバーに表示されない

`docs/.vitepress/config.ts` の `sidebar` 設定を確認してください。

または記事一覧ページ（`docs/articles/index.md`）を手動で更新してください。

## FC2 へのアップロード方法

1. `npm run build` を実行
2. `dist/` フォルダが作成される
3. FTP ソフト（WinSCP、FileZilla など）で FC2 へ接続
4. `dist/` フォルダ内のすべてのファイルをアップロード
5. FC2 で公開設定を確認

## さらに詳しく

- [VitePress 公式ドキュメント](https://vitepress.vuejs.org/)
- [Markdown チートシート](https://www.markdownguide.org/cheat-sheet/)
