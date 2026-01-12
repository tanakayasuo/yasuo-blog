---
title: 最初のブログ記事
description: VitePress ブログの初めての投稿です
date: 2025-12-11
---

# 最初のブログ記事

これはサンプル記事です。このファイルを参考にして、自分の記事を書いてください。

## 記事の構造

ファイルの先頭に **Front Matter** という情報を書きます：

```yaml
---
title: 記事のタイトル
description: 記事の説明
date: 2025-12-11
---
```

## Markdown で記事を書く

普通のMarkdown形式で記事を書けます。

### 見出し

`# 大見出し`
`## 中見出し`
`### 小見出し`

### リスト

- 箇条書き1
- 箇条書き2
- 箇条書き3

### コード

\`\`\`javascript
console.log('Hello World');
\`\`\`

### リンク

[リンクテキスト](https://example.com)

### 画像

```
![画像の説明](./image.jpg)
```

> **注意**: 実際の画像を使用する場合は、まず画像ファイルを配置してください。

## 記事を更新するには

1. `docs/articles/` フォルダに `.md` ファイルを作成
2. VS Code で Markdown を書く
3. ブラウザで確認するには：`npm run dev`
4. 本番公開するには：
   - `npm run build` を実行して `dist/` フォルダを生成します
   - `dist/` を GitHub Pages にデプロイします（例）
     - `gh-pages` ブランチへ `dist/` の中身を push する
     - または GitHub Actions（例: peaceiris/actions-gh-pages）を使って自動デプロイする
   - GitHub Pages をプロジェクトページで使う場合、`docs/.vitepress/config.ts` の `base` を `/yasuo-blog/` に設定してください（画像やリンクのパスに注意）

詳しくは[ガイド](../guide/)を参照してください。
