# Git クイックリファレンス

## 🚀 日常的な作業フロー

### 開発開始
```bash
git pull origin main                    # 最新を取得
git checkout -b feature/新機能名        # ブランチ作成
npm run dev                             # 開発開始
```

### 作業中
```bash
git status                              # 状態確認
git add .                               # 変更をステージング
git commit -m "feat: 新機能追加"        # コミット
```

### 作業完了
```bash
git push origin feature/新機能名        # プッシュ
# GitHubでプルリクエスト作成
```

---

## 📝 コミットメッセージ

### 基本パターン
```bash
git commit -m "種類: 簡潔な説明"
```

### 種類一覧
- `feat:` 新機能
- `fix:` バグ修正
- `docs:` ドキュメント
- `style:` コードスタイル
- `refactor:` リファクタリング
- `test:` テスト
- `chore:` その他

---

## 🔧 トラブル解決

### 変更を取り消し
```bash
git checkout -- ファイル名              # 特定ファイル
git checkout -- .                      # 全て
```

### コミットを取り消し
```bash
git reset --soft HEAD~1                # 変更は保持
git reset --hard HEAD~1                # 完全削除
```

### ブランチを間違えた
```bash
git stash                              # 変更を保存
git checkout 正しいブランチ名           # ブランチ移動
git stash pop                          # 変更を復元
```

---

## 📊 状態確認

```bash
git status                             # 現在の状態
git diff                               # 変更内容
git log --oneline                      # 履歴
git branch -a                          # ブランチ一覧
```

---

## 🌿 ブランチ操作

```bash
git checkout -b feature/名前            # 作成・移動
git checkout ブランチ名                 # 移動
git branch -d ブランチ名               # 削除
```

---

## 📦 その他の便利コマンド

```bash
git stash                              # 変更を一時保存
git stash pop                          # 保存した変更を復元
git fetch                              # リモート情報取得
git pull origin main                   # 最新を取得
git push origin ブランチ名             # プッシュ
```

---

## 🚨 注意事項

### ❌ やってはいけないこと
- mainブランチで直接開発
- 意味のないコミットメッセージ
- 大きな変更を一度にコミット

### ✅ 推奨事項
- 小さな単位でコミット
- 分かりやすいコミットメッセージ
- 定期的なプル・プッシュ

---

*詳細は `GIT_GUIDE.md` を参照してください* 