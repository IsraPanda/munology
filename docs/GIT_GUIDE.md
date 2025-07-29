# Git管理ガイド - MUNOLOGY開発チーム

## 📚 目次
1. [Gitとは](#gitとは)
2. [基本的な概念](#基本的な概念)
3. [日常的な作業フロー](#日常的な作業フロー)
4. [ブランチ戦略](#ブランチ戦略)
5. [コミットメッセージの規約](#コミットメッセージの規約)
6. [トラブルシューティング](#トラブルシューティング)
7. [便利なコマンド集](#便利なコマンド集)

---

## Gitとは

### 概要
Gitは、ソフトウェア開発における**バージョン管理システム**です。ファイルの変更履歴を追跡し、複数人での協力開発を可能にします。

### 主な機能
- ✅ **変更履歴の管理**: いつ、誰が、何を変更したかを記録
- ✅ **バージョン管理**: 過去の状態に戻すことが可能
- ✅ **並行開発**: 複数人が同時に異なる機能を開発
- ✅ **コードの統合**: 各人の作業を安全に統合

---

## 基本的な概念

### 1. リポジトリ（Repository）
```
プロジェクトの全体 = リポジトリ
├── ファイル群
├── 変更履歴
└── 設定情報
```

### 2. コミット（Commit）
```
変更の「スナップショット」
├── 変更内容
├── コミットメッセージ
├── 作成者
└── タイムスタンプ
```

### 3. ブランチ（Branch）
```
開発の「枝分かれ」
main（本番） ← 安定版
├── develop（開発） ← 開発版
├── feature/A（機能A） ← 機能開発
└── hotfix/B（修正B） ← 緊急修正
```

### 4. リモート（Remote）
```
GitHubなどの外部サーバー
├── コードの共有
├── バックアップ
└── チーム協力
```

---

## 日常的な作業フロー

### 🚀 開発開始時

```bash
# 1. 最新の状態を取得
git pull origin main

# 2. 新しい機能ブランチを作成
git checkout -b feature/新機能名

# 3. 開発開始
npm run dev
```

### 📝 作業中

```bash
# 変更を確認
git status
git diff

# 変更をステージング
git add ファイル名
git add .  # 全ての変更

# コミット
git commit -m "feat: 新機能を追加"
```

### 🔄 作業完了時

```bash
# 1. 最新の状態を取得
git pull origin main

# 2. 変更をプッシュ
git push origin feature/新機能名

# 3. プルリクエスト作成（GitHub上で）
```

---

## ブランチ戦略

### 🌳 ブランチの種類

| ブランチ名 | 用途 | 例 |
|-----------|------|-----|
| `main` | 本番環境 | 安定版のコード |
| `develop` | 開発環境 | 開発中のコード |
| `feature/*` | 機能開発 | `feature/new-article` |
| `hotfix/*` | 緊急修正 | `hotfix/security-fix` |

### 📋 ブランチ作成のルール

```bash
# 機能開発
git checkout -b feature/記事投稿機能

# バグ修正
git checkout -b fix/ロゴ表示エラー

# 緊急修正
git checkout -b hotfix/セキュリティ修正
```

---

## コミットメッセージの規約

### 📝 基本形式
```
種類: 簡潔な説明

詳細な説明（必要に応じて）
```

### 🏷️ 種類の一覧

| 種類 | 説明 | 例 |
|------|------|-----|
| `feat` | 新機能 | `feat: 記事投稿機能を追加` |
| `fix` | バグ修正 | `fix: ロゴ表示エラーを修正` |
| `docs` | ドキュメント | `docs: READMEを更新` |
| `style` | コードスタイル | `style: インデントを修正` |
| `refactor` | リファクタリング | `refactor: 関数を分割` |
| `test` | テスト | `test: ユニットテスト追加` |
| `chore` | その他 | `chore: 依存関係を更新` |

### ✅ 良い例
```bash
git commit -m "feat: 記事投稿機能を追加"
git commit -m "fix: ロゴ表示エラーを修正"
git commit -m "docs: セットアップ手順を更新"
```

### ❌ 悪い例
```bash
git commit -m "修正"
git commit -m "更新"
git commit -m "a"
```

---

## トラブルシューティング

### 🔄 よくある問題と解決方法

#### 1. 変更を取り消したい
```bash
# 特定のファイルの変更を取り消し
git checkout -- ファイル名

# 全ての変更を取り消し
git checkout -- .
```

#### 2. コミットを取り消したい
```bash
# 直前のコミットを取り消し（変更は保持）
git reset --soft HEAD~1

# 直前のコミットを完全に削除
git reset --hard HEAD~1
```

#### 3. ブランチを間違えた
```bash
# 現在の変更を一時保存
git stash

# 正しいブランチに移動
git checkout 正しいブランチ名

# 保存した変更を適用
git stash pop
```

#### 4. コンフリクト（競合）が発生
```bash
# 1. コンフリクトファイルを確認
git status

# 2. ファイルを編集して競合を解決

# 3. 解決後
git add ファイル名
git commit -m "fix: コンフリクトを解決"
```

---

## 便利なコマンド集

### 📊 状態確認
```bash
# 現在の状態
git status

# 変更内容の確認
git diff

# コミット履歴
git log --oneline

# ブランチ一覧
git branch -a
```

### 🔄 基本的な操作
```bash
# ファイルをステージング
git add ファイル名
git add .  # 全て

# コミット
git commit -m "メッセージ"

# プッシュ
git push origin ブランチ名

# プル
git pull origin ブランチ名
```

### 🌿 ブランチ操作
```bash
# ブランチ作成・切り替え
git checkout -b ブランチ名

# ブランチ切り替え
git checkout ブランチ名

# ブランチ削除
git branch -d ブランチ名
```

### 📦 その他
```bash
# 変更を一時保存
git stash

# 保存した変更を適用
git stash pop

# リモートの最新情報を取得
git fetch

# 特定のコミットに戻る
git reset --hard コミットハッシュ
```

---

## 🎯 実践的なワークフロー例

### 記事投稿機能の開発例

```bash
# 1. 開発開始
git checkout main
git pull origin main
git checkout -b feature/article-posting

# 2. 開発作業
# ファイルを編集...

# 3. 変更をコミット
git add .
git commit -m "feat: 記事投稿フォームを追加"
git commit -m "feat: 画像アップロード機能を追加"
git commit -m "test: 投稿機能のテストを追加"

# 4. プッシュ
git push origin feature/article-posting

# 5. プルリクエスト作成（GitHub上）
# 6. レビュー・マージ
```

---

## 📚 学習リソース

### オンライン学習
- [Git公式ドキュメント](https://git-scm.com/doc)
- [GitHub Learning Lab](https://lab.github.com/)
- [Pro Git Book](https://git-scm.com/book/ja/v2)

### 便利なツール
- **GitHub Desktop**: GUIでGit操作
- **SourceTree**: 高度なGit GUI
- **VS Code**: エディタ内でGit操作

---

## 🚨 注意事項

### やってはいけないこと
- ❌ `main`ブランチで直接開発
- ❌ 意味のないコミットメッセージ
- ❌ 大きな変更を一度にコミット
- ❌ パスワードなどの機密情報をコミット

### 推奨事項
- ✅ 小さな単位でコミット
- ✅ 分かりやすいコミットメッセージ
- ✅ 定期的なプル・プッシュ
- ✅ ブランチ名は分かりやすく

---

## 📞 困ったときは

1. **まずは落ち着く**
2. **`git status`で状況確認**
3. **変更をバックアップ**
4. **チームメンバーに相談**
5. **必要に応じてリセット**

---

*このガイドは随時更新されます。質問や改善提案があれば、お気軽にお声がけください！* 