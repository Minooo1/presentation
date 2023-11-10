---
theme: default
layout: center
colorSchema: dark
highlighter: shiki
lineNumbers: false
title: アドベンチャーカップ
fonts:
  sans: "Noto Sans JP"
info: アドベンチャーカップ
drawings:
  persist: false
mdc: true
transition: slide-left
canvasWidth: 1300
---

<h1 class="strong">Adventure Cup</h1>

---
title: 自己紹介
---

<div class="slidev-layout two-columns w-full h-full grid grid-cols-2 items-center">
  <div class="pl-30">
    <img src="/images/intro.png" class="rounded-full w-80 h-80 border-4 image" alt="自己紹介用の画像" />
  </div>

  <div class="flex flex-col justify-between">
    <div class="mb-4">
      <p class="text-5xl font-bold pb-2">美野佑太</p>
      <p class="mb-2">Yuta Mino</p>
    </div>
    <ul>
      <li class="mb-1.5 list-none	">
        <carbon-login />
        <span class="ml-2">2023年5月1日入社</span>
      </li>
      <li class="mb-1.5 list-none	">
        <carbon-building />
        <span class="ml-2">福岡オフィス</span>
      </li>
      <li class="mb-1.5 list-none	">
        <carbon-events-alt />
        <span class="ml-2">開発部 開発課 WEBチーム</span>
      </li>
      <li class="mb-1.5 list-none	">
        <carbon-laptop />
        <span class="ml-2">エンジニア</span>
      </li>
    </ul>
  </div>
</div>

<style>
.image {
  border-color: #56ffff;
}
</style>

---
layout: center
---

<h1 class="strong">Start</h1>

---
layout: center
---

<div class="flex justify-center mb-20" :class="{ active: $clicks === 1 }">
  <div class="text-center flex items-center">
    <p class="text-7xl font-bold">0</p>
  </div>

  <div class="slidev-vclick-target flex ml-10">
    <mdi-arrow-right-bold class="h-30 w-30" />
    <div class="flex flex-col justify-center ml-10">
      <p class="text-9xl font-bold strong">1</p>
    </div>
  </div>
</div>

<div class="flex justify-center mb-20 mr-30" v-click-hide>
  <div class="text-center flex items-center">
    <p class="text-7xl font-bold">1000</p>
  </div>

  <div class="slidev-vclick-target flex ml-10">
    <mdi-arrow-right-bold class="h-30 w-30" />
    <div class="flex flex-col justify-center ml-10">
      <p class="text-9xl font-bold strong">8</p>
    </div>
  </div>
</div>

<style>
.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  display: none;
}
</style>

---
layout: center
---

<h1>自動テストの導入</h1>

---
layout: center
title: 自動テストの導入
---

<h4 class="font-bold mb-5">全体構成</h4>

<img src="/images/composition-test.png" class="w-full h-full" alt="今回導入したシステムの構成画像" />

---
layout: center
title: 自動テストの導入
---

<h2 class="text-center font-bold">テストとは？</h2>

<ul class="mt-10">
  <li v-click class="pb-4 text-2xl">リリース前にバグや不具合等を検知するもの</li>
  <li v-click class="pb-4 text-2xl">コードの品質を担保するもの</li>
  <li v-click class="text-2xl">保守性を高めるもの</li>
</ul>

<div class="text-center my-5">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-click class="text-center font-bold strong">開発の助けになる</h2>

---
layout: center
title: 自動テストの導入
---

<h2 class="text-center font-bold">他の業務で例えてみる</h2>

<ul class="mt-10">
  <li v-click class="pb-4 text-2xl">プロテインの検品がなかったら？</li>
  <!-- どういうダブルチェックがあるのか知りたい。 -->
  <li v-click class="pb-4 text-2xl">LPの法務チェックがなかったら？</li>
  <li v-click class="text-2xl">保守性を高めるもの</li>
</ul>

<div class="text-center my-5">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-click class="text-center font-bold strong">開発の助けになる</h2>

---
layout: statement
---

# 導入結果

<!-- 以前の構成はそもそもテストなかった -->
<!-- そもそも検知できる仕組みがなかった -->
<!-- もしバク等が発生した場合はリリースしてから気づく or もしくはそもそも気付けない状態だった。 -->
<!-- 安心してコードを書けるようになった -->
<!-- 法務チェック -->
<!-- PR Times プレスリリース -->

<!-- 1000分 => 8分 -->
<!-- 自動化したという所です -->
<!-- もし手動でやっていたら1000分かかるところだった。 -->
<!-- プロテインの検品ないのめっちゃ怖いですよね？ -->
<!-- それと同じことが起こっている状況でした。 -->

---
layout: statement
title: 導入結果①
transition: fade-in
---
<h3 class="font-bold mb-5">①バグの検知</h3>

<div v-click>
  <h4 class="text-left font-bold mb-5">導入前</h4>

  <img src="/images/cs-top.png" class="block aspect-auto h-4/5" alt="自動テストを導入する前の構成" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-click class="text-center font-bold strong">検知する仕組みがなかった</h2>

---
layout: statement
title: 導入結果①
---
<h3 class="font-bold mb-5">①バグの検知</h3>

<div v-click>
  <h4 class="text-left font-bold mb-5">導入後</h4>

  <img src="/images/composition-test.png" class="w-full h-full" alt="今回導入したシステムの構成画像" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-click class="text-center font-bold strong">事前にバグを検知できる</h2>

---
layout: statement
transition: fade-in
title: 導入結果②
---
<h3 class="font-bold mb-5">②自動化</h3>

<div v-click>
  <h4 class="text-left font-bold mb-5">手動の場合</h4>

  <img src="/images/composition-manual.png" class="w-full h-full" alt="今回導入したテストの構成の手動バージョン" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-click class="text-center font-bold strong">1000分</h2>

---
layout: statement
title: 導入結果②
---
<h3 class="font-bold mb-5">②自動化</h3>

<div v-click>
  <h4 class="text-left font-bold mb-5">自動化</h4>

  <img src="/images/composition-test.png" class="w-full h-full" alt="今回導入したテストの構成" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-click class="text-center font-bold strong">8分</h2>

---
layout: statement
---

# どんなテストをしているのか

---
title: テストの紹介
---

<h2 class="text-center font-bold mb-10">コードチェック</h2>

```ts {1,10|2|4|6-9}
export const usePolitePopup = () => {
  const visible = ref(false);

  const trigger = () => {}

  return {
    visible,
    trigger,
  };
};
```

---
title: テストの紹介
---

<h2 class="text-center font-bold">お問い合わせフォーム</h2>

---
title: テストの紹介
---

<h2 class="text-center font-bold">UIテスト</h2>

---
layout: end
---
