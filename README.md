# 熱海、どこ行く？

2026年11月29日（日）の熱海日帰りドライブに向けた、観光スポット10件の比較サイトです。ジャンルと大人1人分の予算で絞り込めます。地図の番号を押すと該当カードへ移動し、そのカードが非表示の場合は絞り込みを解除します。

## ローカルで見る

ルートの `index.html` をブラウザで開きます。ビルドや依存パッケージのインストールは不要です。HTTPで確認する場合は、リポジトリのルートで `python3 -m http.server 8000` を実行し、`http://localhost:8000/` を開きます。

## GitHub Pagesで公開

1. 変更を GitHub の `rysakamo/atami-drive` の `main` ブランチに反映します。GitHub Free で公開する場合は公開リポジトリを使います。
2. リポジトリの **Settings → Pages** を開きます。
3. **Build and deployment** の **Source** で **Deploy from a branch** を選び、**Branch** を **main**、フォルダを **/ (root)** にして **Save** を押します。
4. デプロイ完了後に [公開URL](https://rysakamo.github.io/atami-drive/) を開き、LINEで共有します。

[GitHub公式の公開設定手順](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 掲載情報・写真を更新

- スポットの情報は `spots.js` で管理しています。比較には大人の通常入場料または往復乗車料を使います。未確認の料金は `price: null` にし、確認できた下限があれば `minimumPrice` に記載します。下限が2,000円を超える施設は「2,000円超」と「当日料金は要確認」の両方に表示されます。
- 既存HTMLに埋め込まれていた10枚を `assets/photos/` に移しました。写真を差し替えるには画像を配置して `img` の相対パスを更新します。空欄や読み込みエラーの場合は「写真準備中」を表示します。既存写真の提供元と公開利用条件はリポジトリから確認できなかったため、公開前に確認してください。
- 概略地図のピン位置は `mapPosition` の左・上からの割合で調整できます。正確な位置は各カードのGoogleマップにリンクしています。
