# Portfolio Site

モダンでダークなデザインの個人開発者向けポートフォリオサイトです。React + Viteで構築されています。

## 特徴

- ダーク・モダンなデザイン
- レスポンシブ対応
- スムーズなスクロールとアニメーション
- GitHub Pages対応

## セクション

- **Hero/About**: 自己紹介とスキルの紹介
- **Projects**: ポートフォリオ・プロジェクトの展示
- **Contact**: SNSリンクと連絡先

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルドのプレビュー
npm run preview
```

## カスタマイズ方法

### 個人情報の更新

以下のファイルで個人情報をカスタマイズしてください：

1. **Hero.jsx** (`src/components/Hero.jsx`)
   - 名前、肩書き、自己紹介文を変更

2. **Projects.jsx** (`src/components/Projects.jsx`)
   - プロジェクト情報を追加・編集
   - 各プロジェクトのタイトル、説明、技術スタック、リンクを更新

3. **Footer.jsx** (`src/components/Footer.jsx`)
   - SNSリンクを自分のアカウントに変更
   - メールアドレスを更新

### スタイルの変更

各コンポーネントには対応する `.css` ファイルがあります：
- `Header.css` - ヘッダー・ナビゲーション
- `Hero.css` - メインビジュアル
- `Projects.css` - プロジェクト一覧
- `Footer.css` - フッター

グラデーションカラーは主に以下を使用しています：
- プライマリ: `#667eea` (紫がかった青)
- セカンダリ: `#764ba2` (濃い紫)

## GitHub Pagesへのデプロイ

### 1. リポジトリの準備

```bash
# Gitリポジトリの初期化（まだの場合）
git init
git add .
git commit -m "Initial commit"

# GitHubリポジトリに接続
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

### 2. base URLの設定

`vite.config.js` で `base` を設定：

- `<username>.github.io` の場合: `base: '/'`
- `<username>.github.io/<repo-name>` の場合: `base: '/<repo-name>/'`

### 3. GitHub Pages設定

1. GitHubリポジトリの `Settings` > `Pages` に移動
2. Source を `GitHub Actions` に設定
3. mainブランチにプッシュすると自動デプロイが開始されます

### 4. デプロイ確認

数分後、以下のURLでサイトが公開されます：
- `https://<username>.github.io/`
- または `https://<username>.github.io/<repo-name>/`

## プロジェクト構造

```
portfolio-site/
├── src/
│   ├── components/
│   │   ├── Header.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── index.html
├── vite.config.js
└── package.json
```

## 使用技術

- React 18
- Vite 7
- CSS3 (Gradients, Flexbox, Grid)
- GitHub Actions (CI/CD)

## ライセンス

MIT License - 自由にカスタマイズしてご使用ください。
