<img src="https://github.com/user-attachments/assets/d4a29c7d-2856-4075-8f00-6b5cd8ef2507" height="480" />


# next-hono-d1

`hono` を利用したAPIを作成したので、フロントとなるtodoアプリを作成

shadcn.uiを利用したUI

zodのバリデーションチェック

urlはこちら
https://github.com/massu-159/next-hono-d1

バックエンド側の実装
https://github.com/massu-159/hono-d1-drizzle

## 目次
1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install
# または
yarn
# または
pnpm install
# または
bun install
```

### 1-2. アプリケーション実行

```
npm run dev
# または
yarn run dev
# または
pnpm run dev
# または
bun run dev
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- Todo
  - Todo一覧表示
  - Todo新規登録
  - Todo更新処理
  - Todo削除処理

### 2-2. 構成技術
```
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slot": "^1.1.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.477.0",
    "next": "15.2.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "tailwind-merge": "^3.0.2",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.2.0",
    "tailwindcss": "^4",
    "typescript": "^5"
```
