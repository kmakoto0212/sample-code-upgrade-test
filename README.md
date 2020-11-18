# sample-code-upgrade-test

サンプルコードのテスト用リポジトリ

## インストール

```bash
npm install

#Or install parent and childlen directories
npm run all-install
```

## 用途

- renovate bot を用いて最新パッケージの更新通知を取得する
- サンプルコードが最新パッケージで使えなくなった(または挙動が変更された)場合に素早く手を打つ
- 一定以上のサイズを持つリポジトリで運用することで細かい仕様を把握する

## 仕様

- コミット時に自動で ESLint と Prettier が走る
- 円滑なインストールとアップデートをサポート
- 軸となるパッケージごとにサブディレクトリを作成し、monorepo 構成としての運用を行う

## 🤝 貢献する

問題を発見した場合は[issues](https://github.com/kmakoto0212/sample-code-upgrade-test/issues)まで

## 📝 License

Copyright © 2020 kmakoto0212  
This project is released under the MIT License, see LICENSE.
