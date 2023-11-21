---
theme: default
layout: image
image: "/images/slide-top.png"
colorSchema: dark
highlighter: shiki
lineNumbers: false
fonts:
  sans: Noto Sans JP
info: アドベンチャーカップ
drawings:
  persist: false
mdc: true
transition: slide-left
canvasWidth: 1200
---

---
src: "./pages/start.md"
---

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
transition: fade-in
title: 自動テストの導入
---

<h2 class="text-center font-bold">他の業務で例えてみる</h2>

<ul class="mt-20 w-4/5 m-auto">
  <li v-click class="pb-4 text-2xl">プロテインの検品がなかったら？</li>
  <!-- どういうダブルチェックがあるのか知りたい。 -->
  <li v-click class="pb-4 text-2xl">LP / ECサイトの法務チェックがなかったら？</li>
  <li v-click class="pb-4 text-2xl">YouTubeのチェックがなかったら？</li>
  <!-- <li v-click class="pb-4 text-2xl">デザイン</li>
  <li v-click class="text-2xl">保守性を高めるもの</li> -->
</ul>


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
src: "./pages/title02.md"
---

---
title: テストの紹介
---

<h2 class="text-center font-bold mb-30">お問い合わせフォーム</h2>

<video controls width="500" class="mx-auto">
  <source src="/videos/contact.mp4" type="video/mp4"  />
</video>

---
title: テストの紹介
---

<h2 class="text-center font-bold">UIテスト</h2>

---
src: "./pages/title03.md"
---

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

<!--
以前の構成はそもそもテストなかった。

そもそも検知できる仕組みがなかった
もしバク等が発生した場合はリリースしてから気づく or もしくはそもそも気付けない状態だった。

プロテインの検品ないのめっちゃ怖いですよね？
それと同じことが起こっている状況でした。
-->

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

<h2 v-click class="text-center font-bold strong" >ぶっつけ本番リリース</h2>

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

<div v-click>
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

<!--
リリースの準備をするだけで自動でテストが実行される。
ここでのポイントは、「作業をしてリリースの準備をするだけ」というところです。新しくシステムを導入したのですが、エンジニア自体は以前とやることが変わっていないのです。システムを導入しつつも、エンジニアの作業工程を増やさないといところ工夫しました。
-->

---
layout: default
title: 導入結果②
---

<h2 class="font-bold mt-10 text-center">1000分</h2>

<!-- TODO: もう少し正規な値を入れたい -->
<ul class="mt-20 w-2/4 m-auto">
  <li v-click class="pb-4 text-2xl">約16時間40分</li>
  <li v-click class="pb-4 text-2xl">レバレッジの営業の架電200件</li>
  <li v-click class="pb-4 text-2xl">レバレッジの動画作成100本</li>
  <li v-click class="pb-4 text-2xl">レバレッジのLP法務チェック100本</li>
</ul>

<!--
システムを導入しつつ、自動化により、大幅に時間を短縮しました。
-->

---
layout: default
transition: fade-in
title: 導入まとめ
---

<h2 class="mt-10 text-center font-bold">導入まとめ</h2>

<ul class="mt-15 w-2/3 m-auto">
  <li v-click class="pb-4 text-2xl">リリース前にバグを検知できるようになった。</li>
  <li v-click class="text-2xl">開発者が安心してコードが書けるようになった。</li>
</ul>

---
layout: end
---
