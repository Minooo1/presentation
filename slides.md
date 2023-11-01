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

<h1 class="h1 text-center">大幅な作業時間の短縮</h1>

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
- 品質を保証するためのもの
- items3

</v-clicks>


---
layout: center
---

# 取り組みの目的
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

# Components

<div grid="~ cols-2 gap-4">
<div>

You can use Vue components directly inside your slides.

We have provided a few built-in components like `<Tweet/>` and `<Youtube/>` that you can use directly. And adding your custom components is also super easy.

```html
<Counter :count="10" />
```

<!-- ./components/Counter.vue -->
<Counter :count="10" m="t-4" />

Check out [the guides](https://sli.dev/builtin/components.html) for more.

</div>
<div>

```html
<Tweet id="1390115482657726468" />
```

<Tweet id="1390115482657726468" scale="0.65" />

</div>
</div>

<!--
Presenter note with **bold**, *italic*, and ~~striked~~ text.

Also, HTML elements are valid:
<div class="flex w-full">
  <span style="flex-grow: 1;">Left content</span>
  <span>Right content</span>
</div>
-->

---
class: px-20
---

# Themes

Slidev comes with powerful theming support. Themes can provide styles, layouts, components, or even configurations for tools. Switching between themes by just **one edit** in your frontmatter:

<div grid="~ cols-2 gap-2" m="-t-2">

```yaml
---
theme: default
---
```

```yaml
---
theme: seriph
---
```

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-default/01.png?raw=true" alt="">

<img border="rounded" src="https://github.com/slidevjs/themes/blob/main/screenshots/theme-seriph/01.png?raw=true" alt="">

</div>

Read more about [How to use a theme](https://sli.dev/themes/use.html) and
check out the [Awesome Themes Gallery](https://sli.dev/themes/gallery.html).

---
layout: end
---
