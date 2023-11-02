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


<h1 class="h1">Adventure Cup</h1>

<style>
.h1 {
  font-size: 5vw;
}
</style>


---
layout: two-cols-header
---

<h1 class="h1 text-center">0から仕組みを導入</h1>

::left::
<v-click>
  <h1 class="h1">hello World</h1>
</v-click>


::right::
<div v-click>
  <h1 class="h1">hello World</h1>
</div>

<style>
.h1 {
  font-size: 5vw;
}
.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
</style>

---
layout: two-cols-header
---

<h1 class="h1 text-center">自動化による工数削減</h1>

::left::
<v-click>
  <div class="text-right">
    <h3 class="h3">XX分 <span class="ml-30">==></span> </h3>
  </div>
</v-click>

::right::
<div v-click class="text-center">
  <h2 class="h1 ">X分</h2>
</div>

<style>
.h1 {
  font-size: 4.8vw;
}

.h3 {
  font-size: 3.6vw;
}
</style>

---
layout: center
---

<h1 class="h1">挑戦したこと</h1>

<style>
.h1 {
  font-size: 4.8vw;
}
</style>

---
layout: center
---

<h1 class="h1">自動テストの導入👏</h1>


<style>
.h1 {
  font-size: 5.6vw;
  font-weight: bold
}
</style>
<!-- <img
  src="/images/top.png"
  alt="コーポレートサイトのメインビジュアル"
/> -->
---
layout: center
---

# テストとは

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

# UIテスト


---

# 苦労したこと
<v-clicks>

- items1
- items2
- items3
- items4

</v-clicks>


---

# 完全自動化する

---

# 挑戦してどうなった


---
layout: end
---
