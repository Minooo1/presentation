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
---

<h1>Adventure Cup</h1>

---
layout: two-cols-header
---

<h2 class="text-center">0から仕組みを導入</h2>

::left::
<v-click>
  <div class="text-center">
    <h3>hello World</h3>
  </div>
</v-click>


::right::
<div v-click class="text-center">
  <h3>hello World</h3>
</div>

<style>
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
</style>

---

<h2 class="text-center">自動化による工数削減</h2>

<div class="flex mt-50 text-center">
  <div class="flex-grow">
    <h3>1000分</h3>
  </div>

  <div class="flex-grow" v-click>
    <h2> => </h2>
  </div>

  <div class="flex-grow" v-click>
    <h2>7分</h2>
  </div>
</div>

---
layout: center
---

<h1>挑戦したこと</h1>

---
layout: center
---

<h1>自動テストの導入👏</h1>

<!-- <img
  src="/images/top.png"
  alt="コーポレートサイトのメインビジュアル"
/> -->

---
layout: center
---

<h1 class="text-center">テストとは</h1>

<v-clicks>

- 事前にバグや不具合等を検知できるようにするもの
- コード/成果物の品質を保証するためのもの
- items3

</v-clicks>


---
layout: center
---

# テストを導入した目的
<v-clicks>

- そもそも開発において、テストは必要。
- 現状網羅的にテストを書ける人、知見がある人がいない。
- このママだと今後の開発に向けて不安があった

</v-clicks>


---
layout: statement
---

# 導入したテストの紹介

---

# 構文タイポテスト

---

# お問い合わせフォームのテスト

---

# 見た目の差分を検知するテスト


---
layout: statement
---

# 自動化を実現する



---

# 苦労したこと
<v-clicks>

- items1
- items2
- items3
- items4

</v-clicks>
---

# 挑戦してどうなった


---
layout: end
---
