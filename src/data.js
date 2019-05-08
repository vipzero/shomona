export const teams = {
  A: {
    id: "A",
    name: "脳死ㄘんㄘんガイジーズ",
    shortname: "脳死",
    members: { 1: "そららら", 2: "むめい", 3: "lemon", 4: "あの" },
  },
  B: {
    id: "B",
    name: "†万里を韜晦せし無窮の暁闇†",
    shortname: "暁闇",
    members: { 1: "maxi", 2: "山岡", 3: "めぎゅ", 4: "ふみん" },
  },
  C: {
    id: "C",
    name: "住所不定無職童貞",
    shortname: "童貞",
    members: { 1: "がお", 2: "プラナス", 3: "みんと", 4: "かばん" },
  },
}

export const buttles = [
  [
    {
      team1: {
        win: true,
        id: "B",
      },
      team2: {
        win: false,
        id: "C",
      },
      rules: {
        rule: "ヤグラ",
        where: "ザトウ",
        who: "B: 全員, C: がお, プラナス",
        what: "2400以上サブスペ禁止 2400未満スペ禁止",
      },
    },
    {
      team1: {
        win: false,
        id: "B",
      },
      team2: {
        win: true,
        id: "C",
      },
      rules: {
        rule: "アサリ",
        where: "スメシ",
        who: "B: 全員, C: がお, プラナス",
        what: "負けた場合に好きなエロ画像を貼る",
      },
    },
    {
      team1: {
        win: true,
        id: "B",
      },
      team2: {
        win: false,
        id: "C",
      },
      rules: {
        rule: "エリア",
        where: "ホッケ",
        who: "スプラトゥーン嫌いなやつ",
        what: "得意武器以外を使う",
      },
    },
    {
      team1: {
        win: false,
        id: "B",
      },
      team2: {
        win: true,
        id: "C",
      },
      rules: {
        rule: "ホコ",
        where: "コンブ",
        who: "健常者",
        what: "キル取ったらリスジャン",
      },
    },
    {
      team1: {
        win: true,
        id: "B",
      },
      team2: {
        win: false,
        id: "C",
      },
      rules: {
        rule: "ナワバリ",
        where: "コンブ",
        who: "ガイジ",
        what: "初恋の人の下の名前を言う",
      },
    },
  ],
  [
    {
      team1: {
        win: false,
        id: "A",
      },
      team2: {
        win: true,
        id: "B",
      },
      rules: {
        rule: "ヤグラ",
        where: "アロワナ",
        who: "やまおか, むめい",
        what: "イカちゃんのエロSSを書く",
      },
    },
    {
      team1: {
        win: true,
        id: "A",
      },
      team2: {
        win: false,
        id: "B",
      },
      rules: {
        rule: "アサリ",
        where: "ムツゴ",
        who: "2400以上是認",
        what: "アーマーハイプレ使用可能",
      },
    },
    {
      team1: {
        win: true,
        id: "A",
      },
      team2: {
        win: false,
        id: "B",
      },
      rules: {
        rule: "エリア",
        where: "タチウオ",
        who: "全員",
        what: "やまおかの得意武器苦手武器",
      },
    },
    {
      team1: {
        win: true,
        id: "A",
      },
      team2: {
        win: false,
        id: "B",
      },
      rules: {
        rule: "ホコ",
        where: "モンガラ",
        who: "ふみん あの",
        what: "今までで一番抜いたキャラ晒す",
      },
    },
  ],
  [
    {
      team1: {
        win: false,
        id: "C",
      },
      team2: {
        win: true,
        id: "A",
      },
      rules: {
        rule: "ヤグラ",
        where: "チョウザメ",
        who: "リーダー",
        what: "デスしたら10秒マップ開く",
      },
    },
    {
      team1: {
        win: true,
        id: "C",
      },
      team2: {
        win: false,
        id: "A",
      },
      rules: {
        rule: "アサリ",
        where: "チョウザメ",
        who: "スプラ1からのプレイヤー",
        what: "みそボン状態(キルされたらサブのみキルしたらメインのみ)",
      },
    },
    {
      team1: {
        win: true,
        id: "C",
      },
      team2: {
        win: false,
        id: "A",
      },
      rules: {
        rule: "エリア",
        where: "モンガラ",
        who: "スプラ2からのプレイヤー",
        what: "苦手武器持つ",
      },
    },
    {
      team1: {
        win: true,
        id: "C",
      },
      team2: {
        win: false,
        id: "A",
      },
      rules: {
        rule: "ホコ",
        where: "スメシ",
        who: "むめい lemon がお",
        what: "メインギア爆減改のみ",
      },
    },
  ],
]

export const resultTable = {
  A: {
    B: 3,
    C: 1,
  },
  B: {
    A: 1,
    C: 3,
  },
  C: {
    A: 3,
    B: 2,
  },
}
