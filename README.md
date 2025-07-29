# MUNOLOGY - 模擬国連情報サイト

模擬国連参加者のための国際法・国際関係情報サイトです。

## 🚀 プロジェクト構造

```
/
├── public/                 # 静的ファイル
│   ├── images/            # 画像ファイル
│   └── favicon.svg        # ファビコン
├── src/
│   ├── components/        # コンポーネント
│   ├── content/          # 記事コンテンツ
│   ├── layouts/          # レイアウト
│   ├── pages/            # ページ
│   └── styles/           # スタイル
├── docs/                 # ドキュメント
│   ├── GIT_GUIDE.md     # Git管理ガイド
│   └── GIT_QUICK_REFERENCE.md # クイックリファレンス
└── package.json
```

## 🧞 コマンド

| コマンド | アクション |
| :------- | :--------- |
| `npm install` | 依存関係をインストール |
| `npm run dev` | ローカル開発サーバーを起動 |
| `npm run build` | 本番用ビルド |
| `npm run preview` | ビルドのプレビュー |
| `npm run lint` | コード品質チェック |
| `npm run format` | コードフォーマット |
| `npm run type-check` | 型チェック |
| `npm run clean` | ビルドファイルをクリア |

## 📚 ドキュメント

- [Git管理ガイド](./docs/GIT_GUIDE.md) - Git初心者向けの包括的なガイド
- [Gitクイックリファレンス](./docs/GIT_QUICK_REFERENCE.md) - 日常的なGit操作の早見表

## 🎯 開発ガイドライン

### Git管理
- ブランチ戦略: Git Flow
- コミットメッセージ: Conventional Commits
- レビュー: プルリクエスト必須

### コーディング規約
- TypeScript使用
- ESLint + Prettier
- コンポーネント指向設計

## 🌐 技術スタック

- **フレームワーク**: Astro
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **コンテンツ管理**: Markdown + Content Collections

## 📝 記事投稿

記事は `src/content/articles/` ディレクトリにMarkdownファイルとして配置します。

### 記事のフロントマター例
```yaml
---
title: "記事タイトル"
description: "記事の説明"
author: "MUNOLOGY編集部"
date: 2024-12-01T00:00:00.000Z
category: "カテゴリ"
tags: ["タグ1", "タグ2"]
image: ""
draft: false
---
```

## 🤝 貢献方法

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/新機能`)
3. 変更をコミット (`git commit -m "feat: 新機能追加"`)
4. ブランチにプッシュ (`git push origin feature/新機能`)
5. プルリクエストを作成

## 📞 お問い合わせ

質問や提案があれば、お気軽にお声がけください。

---

*MUNOLOGY - Beyond the Conference*
