#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

echo "[1/7] 專案路徑：$PROJECT_DIR"

if ! command -v node >/dev/null 2>&1; then
  echo "❌ 未安裝 Node.js。請先安裝 Node.js 18+。"
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "❌ 未安裝 npm。請先安裝 npm。"
  exit 1
fi

echo "[2/7] Node 版本：$(node -v)"
echo "[3/7] npm 版本：$(npm -v)"

echo "[4/7] 設定 npm registry 為官方來源"
npm config set registry https://registry.npmjs.org/

echo "[5/7] 清除可能造成 403 的 proxy 設定"
npm config delete proxy || true
npm config delete https-proxy || true

echo "[6/7] 清理舊安裝快取與 lock 檔"
rm -rf node_modules package-lock.json
npm cache clean --force

echo "[7/7] 安裝依賴"
npm install

echo "✅ 安裝完成。"
echo "下一步："
echo "  npm run dev     # 本地開發"
echo "  npm run build   # 建置"
