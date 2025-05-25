## 準備
pnpmの用意から始めます。

https://pnpm.io/ja/installation

それが終わったら次のコマンドで必要なパッケージをインストールします。

```
pnpm install
```

Node.jsのバージョンを確認してください。
```
node -v
```
もし入っていない場合はこちらからダウンロードしてください。
[Node.js®をダウンロードする](https://nodejs.org/ja/download)

FirebaseCLIのインストール
```
pnpm install -g firebase-tools
```

Firebaseアカウントにログインしてください。

```
firebase login
```

ファイル名などは自身の設定したものなどに変えやすいように、以下の通りに書いています。
各々変更をしてください。

 `your-app`  
ファイル名に変更してください。

 `firebase-your-app-id`  
Firebase上のプロジェクトIDに変更してください。

 `firebase-your-test-results-id`  
Firebase上のテスト結果用プロジェクトIDに変更してください。

 `YOUR _API＿KEY`  
GitHub Secretsに登録したFirebaseのプロジェクトAPIキーのRepository secrets名に変更してください。

## 開発環境
```shellscript
pnpm run build
```

```shellscript
pnpm run dev
```

