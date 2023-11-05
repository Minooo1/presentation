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
    <img src="/images/intro.png" class="rounded-full w-80 h-80" alt="自己紹介用の画像" />
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

---
layout: center
---

<h1>Start</h1>

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
      <p class="text-9xl font-bold text-red-300">1</p>
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
      <p class="text-9xl font-bold text-red-300">8</p>
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
---

<h4 class="font-bold mb-5">全体構成</h4>

<img src="/images/composition.png" class="block aspect-auto h-4/5" alt="今回導入したシステムの構成画像" />

---
layout: center
---

<h2 class="text-center font-bold">テストとは？？</h2>

<ul class="mt-20">
  <li v-click class="pb-4 text-2xl">事前にバグや不具合等を検知するもの</li>
  <li v-click class="text-2xl">保守性を高めるもの</li>
</ul>

<div class="text-center my-10">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h2 v-click class="text-center font-bold">開発の助けになる</h2>
---
layout: center
---

<h2 class="text-center font-bold">導入目的</h2>

<ul class="mt-20">
  <li v-click class="pb-4 text-2xl">チーム内でテストに関する知見を増やす</li>
  <li v-click class="pb-4 text-2xl">今後新規で開発する際の参考にできる</li>
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

# 自動化の実現


---
layout: center
---

<div class="flex justify-center mb-20" v-click-hide>
  <div class="text-center flex items-center">
    <p class="text-7xl font-bold">0</p>
  </div>

  <div class="slidev-vclick-target flex ml-10">
    <mdi-arrow-right-bold class="h-30 w-30" />
    <div class="flex flex-col justify-center ml-10">
      <p class="text-9xl font-bold text-red-300">1</p>
    </div>
  </div>
</div>

<div class="flex justify-center mb-20 mr-30" :class="{ active: $clicks === 1 }">
  <div class="text-center flex items-center">
    <p class="text-7xl font-bold">1000</p>
  </div>

  <div class="slidev-vclick-target flex ml-10">
    <mdi-arrow-right-bold class="h-30 w-30" />
    <div class="flex flex-col justify-center ml-10">
      <p class="text-9xl font-bold text-red-300">8</p>
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

<h4 class="font-bold mb-5">自動化</h4>

<img src="/images/composition-auto.png" class="block aspect-auto h-4/5" alt="今回導入したシステムの構成で自動化をした部分を切り取った画像" />


---
layout: center
---

振り返り


---
layout: end
---
