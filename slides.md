---
theme: default
layout: cover
colorSchema: dark
highlighter: shiki
lineNumbers: false
fonts:
  sans: "Noto Sans JP"
info: アドベンチャーカップ
drawings:
  persist: false
mdc: true
transition: slide-left
canvasWidth: 1200
---

<h1 class="strong">Adventure Cup</h1>

---
title: 自己紹介
layout: default
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
transition: fade-in
---

<div class="flex justify-center">
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

---
src: "./pages/title01.md"
---


---
layout: center
title: 自動テストの導入
transition: fade-in
---

<h4 class="font-bold mb-5">全体構成</h4>

<img src="/images/composition.png" class="w-full h-full" alt="今回導入したシステムの構成画像" />

---
layout: center
title: 自動テストの導入
---

<h4 class="font-bold mb-5">全体構成</h4>

<img src="/images/composition-auto.png" class="w-full h-full" alt="今回導入したシステムの構成画像" />

---
layout: center
title: 自動テストの導入
---

<h2 class="text-center font-bold">テストとは？</h2>

<ul class="mt-15 w-3/4 m-auto">
  <li v-click class="pb-4 text-2xl">リリース前にバグや不具合等を検知するもの</li>
  <li v-click class="pb-4 text-2xl">サイトの品質を担保するもの</li>
  <!-- <li v-click class="pb-4 text-2xl">コードの品質を担保するもの</li> -->
  <li v-click class="text-2xl">保守性を高めるもの</li>
</ul>

<div class="text-center my-5">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-click class="text-center font-bold strong">開発における重要な工程</h2>

---
layout: default
transition: fade-in
title: 自動テストの導入
---

<h2 class="text-center font-bold mt-10">他の業務で例えてみる</h2>

<ul class="mt-15 w-3/5 m-auto">
  <li v-click class="pb-4 text-2xl">プロテインの検品がなかったら？</li>
  <!-- どういうダブルチェックがあるのか知りたい。 -->
  <li v-click class="pb-4 text-2xl">LPの法務チェックがなかったら？</li>
  <!-- <li v-click class="pb-4 text-2xl">デザイン</li>
  <li v-click class="text-2xl">保守性を高めるもの</li> -->
</ul>

<!-- <div class="text-center my-5">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-click class="text-center font-bold strong">信用に関わる大事な工程</h2> -->

---
src: "./pages/title02.md"
---

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
layout: center
title: 導入結果①
transition: fade-in
---
<h3 class="font-bold mb-5 text-center">①バグの検知</h3>

<div v-click>
  <h4 class="text-left font-bold mb-5">導入前</h4>

  <img src="/images/cs-top.png" class="block aspect-auto h-4/5" alt="自動テストを導入する前の構成" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-after class="text-center font-bold strong" >検知する仕組みがなかった</h2>

---
layout: center
title: 導入結果①
transition: fade-in
---
<h3 class="font-bold mb-5 text-center">①バグの検知</h3>

<div>
  <h4 class="text-left font-bold mb-5">導入前</h4>

  <img src="/images/cs-top.png" class="block aspect-auto h-4/5" alt="自動テストを導入する前の構成" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold class="h-30 w-30" />
</div>

<h2 class="text-center font-bold strong" >ぶっつけ本番リリース</h2>

---
layout: center
title: 導入結果①
---
<h3 class="font-bold mb-5 text-center">①バグの検知</h3>

<div>
  <h4 class="text-left font-bold mb-5">導入後</h4>

  <img src="/images/composition-test.png" class="w-full h-full" alt="今回導入したシステムの構成画像" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-after class="text-center font-bold strong">バグを検知できる仕組み</h2>

---
layout: center
title: 導入結果②
transition: fade-in
---
<h3 class="font-bold mb-5 text-center">②自動化</h3>

<div>
  <h4 class="text-left font-bold mb-5">手動</h4>

  <img src="/images/composition-manual.png" class="w-full h-full" alt="今回導入したテストの構成の手動バージョン" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-after class="text-center font-bold strong">1000分</h2>

---
layout: center
title: 導入結果②
transition: fade-in
---
<h3 class="font-bold mb-5 text-center">②自動化</h3>

<div>
  <h4 class="text-left font-bold mb-5">自動</h4>

  <img src="/images/composition-auto.png" class="w-full h-full" alt="今回導入したテストの構成" />
</div>

<div class="opacity-0">
  <mdi-arrow-down-bold class="h-30 w-30" />
</div>

<h2 class="opacity-0">8分</h2>

---
layout: center
title: 導入結果②
---
<h3 class="font-bold mb-5 text-center">②自動化</h3>

<div>
  <h4 class="text-left font-bold mb-5">自動</h4>

  <img src="/images/composition-release.png" class="w-full h-full" alt="今回導入したテストの構成" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-after class="text-center font-bold strong">8分</h2>

---
layout: default
title: 導入結果②
---

<h2 class="font-bold mt-10 text-center">1000分</h2>

<ul class="mt-15 w-2/4 m-auto">
  <li v-click class="pb-4 text-2xl">約16時間40分</li>
  <li v-click class="pb-4 text-2xl">レバレッジの営業の架電200件</li>
  <li v-click class="pb-4 text-2xl">レバレッジの動画作成100本</li>
  <li v-click class="pb-4 text-2xl">レバレッジのLP法務チェック100本</li>
</ul>


---
layout: default
transition: fade-in
title: 導入まとめ
---

<h2 class="mt-10 text-center font-bold">導入まとめ</h2>

<ul class="mt-15 w-2/4 m-auto">
  <li v-click class="pb-4 text-2xl">バグを検知できる仕組みができた</li>
  <li v-click class="pb-4 text-2xl">リリース前に事前にわかるようになった。</li>
  <li v-click class="pb-4 text-2xl">本番反映時の可能性が減った。</li>
  <li v-click class="pb-4 text-2xl">開発者は工数が増えずにできるようになった</li>
  <li v-click class="text-2xl">自動化したことで必ずリリース前にテストを実行できるようになった</li>
</ul>


---
src: "./pages/title03.md"
---

---
title: テストの紹介
---

<h2 class="text-center font-bold">お問い合わせフォーム</h2>

---
title: テストの紹介
---

<h2 class="text-center font-bold">UIテスト</h2>

---
src: "./pages/title04.md"
---

---
layout: end
---
