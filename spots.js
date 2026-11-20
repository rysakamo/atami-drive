const spots = [
  {
    "n": 1,
    "name": "熱海城",
    "cat": "遊び",
    "price": 1200,
    "priceText": "1,200円（共通券 2,000円）",
    "time": "60〜90分",
    "parking": "500円／回",
    "desc": "展望台から熱海の景色を楽しめる。トリックアートとの共通券も。",
    "url": "https://atamijyo.com/guide",
    "img": "assets/photos/01.jpg",
    "photoNote": "",
    "mapPosition": [
      69,
      72
    ]
  },
  {
    "n": 2,
    "name": "熱海トリックアート迷宮館",
    "cat": "遊び",
    "price": 1200,
    "priceText": "1,200円（共通券 2,000円）",
    "time": "45〜60分",
    "parking": "熱海城と共通・500円／回",
    "desc": "錯覚アートで写真を撮って楽しめる。友達同士で盛り上がるスポット。",
    "url": "https://www.atamijyo.com/sp/access/index.html",
    "img": "assets/photos/02.jpg",
    "photoNote": "",
    "mapPosition": [
      84,
      71
    ]
  },
  {
    "n": 3,
    "name": "十国峠",
    "cat": "絶景",
    "price": 730,
    "priceText": "730円（ケーブルカー往復）",
    "time": "60〜90分",
    "parking": "無料（山麓）",
    "desc": "富士山や相模湾を望む絶景スポット。ケーブルカーで山頂へ。",
    "url": "https://www.jukkoku-cable.jp/guide/index.html",
    "img": "assets/photos/03.jpg",
    "photoNote": "",
    "parkingUrl": "https://ataminews.gr.jp/spot/120",
    "mapPosition": [
      14,
      13
    ]
  },
  {
    "n": 4,
    "name": "アタミロープウェイ",
    "cat": "絶景",
    "price": 900,
    "priceText": "900円（往復）",
    "time": "30〜60分",
    "parking": "500円／2時間（駐車券提示）",
    "desc": "熱海の街と海を見下ろす空中散歩。熱海城と組み合わせやすい。",
    "url": "https://www.atami-ropeway.jp/price/",
    "img": "assets/photos/04.jpg",
    "photoNote": "",
    "parkingUrl": "https://www.atami-ropeway.jp/cms/storage/1/09e23de82d2d318e8f871e57955b0f84.html",
    "mapQuery": "アタミロープウェイ 山麓駅",
    "mapPosition": [
      82,
      59
    ]
  },
  {
    "n": 5,
    "name": "熱海銀座商店街",
    "cat": "グルメ",
    "price": 0,
    "priceText": "散策無料（飲食・買い物は別途）",
    "time": "45〜90分",
    "parking": "市営中央町 110円／30分",
    "desc": "海鮮やスイーツなど、食べ歩きが楽しい商店街。",
    "url": "https://www.ataminews.gr.jp/features/34",
    "img": "assets/photos/05.jpg",
    "photoNote": "",
    "parkingUrl": "https://times-info.net/P22-shizuoka/C205/park-detail-BUK0048229/",
    "mapPosition": [
      62,
      53
    ]
  },
  {
    "n": 6,
    "name": "熱海サンビーチ",
    "cat": "絶景",
    "price": 0,
    "priceText": "無料",
    "time": "20〜40分",
    "parking": "市営東 110円／30分",
    "desc": "海辺を散歩したり、写真を撮ったりして楽しめる。",
    "url": "https://ataminews.gr.jp/spot/119",
    "img": "assets/photos/06.jpg",
    "photoNote": "",
    "mapPosition": [
      81,
      41
    ]
  },
  {
    "n": 7,
    "name": "來宮神社",
    "cat": "自然・観光",
    "price": 0,
    "priceText": "参拝無料",
    "time": "30〜60分",
    "parking": "有料・金額は要確認",
    "desc": "樹齢2,000年超の大楠が有名な神社。",
    "url": "https://kinomiya.or.jp/",
    "img": "assets/photos/07.jpg",
    "photoNote": "",
    "parkingUrl": "https://kinomiya.or.jp/top/praying/access/",
    "mapPosition": [
      48,
      43
    ]
  },
  {
    "n": 8,
    "name": "熱海梅園",
    "cat": "自然・観光",
    "price": 0,
    "priceText": "入園無料（もみじまつり期間）",
    "time": "45〜75分",
    "parking": "300円／台（まつり期間）",
    "desc": "11月29日はもみじまつりの期間中。紅葉の色づきは公式情報で確認できます。",
    "url": "https://www.ataminews.gr.jp/event/148",
    "img": "assets/photos/08.jpg",
    "photoNote": "梅の開花時期の写真",
    "mapPosition": [
      33,
      51
    ]
  },
  {
    "n": 9,
    "name": "ACAO FOREST",
    "cat": "自然・観光",
    "price": null,
    "minimumPrice": 2500,
    "priceText": "2,500円〜（季節変動・当日料金は要確認）",
    "time": "90〜150分",
    "parking": "有料・金額は要確認",
    "desc": "海を望む庭園やカフェ、フォトスポットが魅力。",
    "url": "https://acao.jp/photospot/information",
    "img": "assets/photos/09.jpg",
    "photoNote": "",
    "priceUrl": "https://www.ataminews.gr.jp/spot/7",
    "mapPosition": [
      71,
      87
    ]
  },
  {
    "n": 10,
    "name": "MOA美術館",
    "cat": "美術",
    "price": 2000,
    "priceText": "2,000円",
    "time": "90〜120分",
    "parking": "無料",
    "desc": "美術作品と建築、海の景色が楽しめる美術館。",
    "url": "https://www.moaart.or.jp/guide/",
    "img": "assets/photos/10.jpg",
    "photoNote": "",
    "mapPosition": [
      65,
      28
    ]
  }
];
