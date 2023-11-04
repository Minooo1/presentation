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
transition: fade
canvasWidth: 1300
---

<h1>Adventure Cup</h1>

---

<div class="slidev-layout two-columns w-full h-full grid grid-cols-2 items-center">
  <div class="pl-30">
    <img src="/images/intro.png" class="rounded-full w-80 h-80" alt="" />
  </div>

  <div class="flex flex-col justify-between">
    <div class="mb-4">
      <p class="text-5xl font-bold pb-2">美野佑太</p>
      <p class="mb-2">Yuta Mino</p>
      <p class="py-2">
        フロントエンドフレームワークを使った運用・改修、 <br /> 開発環境周りの整備・構築等を行なっています。
      </p>
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
        <span class="ml-2">フロントエンドエンジニア</span>
      </li>
    </ul>
  </div>
</div>

---
layout: center
---

<h1>Start</h1>

---
layout: center
---

<h1>挑戦したこと</h1>

---
layout: center
---

<h1>自動テストシステムの導入</h1>

---
layout: center
---

<h2 class="mb-15 text-center">全体の構成図</h2>

<img src="/images/composition-sample.png" alt="今回導入したシステムの構成画像" />


---
layout: center
---

<h2 class="text-center font-bold">テストとは</h2>


<ul class="mt-10">
  <li v-click class="pb-4 text-2xl">事前にバグや不具合等を検知できるようにするもの</li>
  <li v-click class="pb-4 text-2xl">事前にバグや不具合等を検知できるようにするもの</li>
  <li v-click class="pb-4 text-2xl">事前にバグや不具合等を検知できるようにするもの</li>
</ul>

---
layout: center
---

<h2 class="text-center font-bold">テストを導入した目的</h2>

<ul class="mt-10">
  <li v-click class="pb-4 text-2xl">テスト</li>
  <li v-click class="pb-4 text-2xl">チーム内でテストに関する知見を持っている人がいなかった。</li>
  <li v-click class="pb-4 text-2xl">今後新規で開発する際の参考にできるため。</li>
</ul>

---
layout: statement
---

# 導入したテストの紹介

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

<h2 class="text-center font-bold">お問い合わせフォーム</h2>

---

<h2 class="text-center font-bold">UIテスト</h2>

---
layout: statement
---

# 自動化を実現する

---
layout: center
---

<h2 class="text-center">自動化による工数削減</h2>

<div class='flex mt-15 justify-center'>
  <div class='text-center flex items-center'>
    <p class="text-4xl font-bold">1000分</p>
  </div>

  <div class='slidev-vclick-target flex ml-10' v-click>
    <mdi-arrow-right-bold class='h-30 w-30 text-sky-300' />
    <div class='flex flex-col justify-center ml-10'>
      <p class="text-8xl font-bold">8分</p>
    </div>
  </div>
</div>

---

# 苦労したこと
<v-clicks>

- items1
- items2
- items3
- items4

</v-clicks>
---
layout: statement
---

# 挑戦してどうなった

---
layout: center
---

振り返り


---
layout: end
---
