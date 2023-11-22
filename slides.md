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
---

<h2 class="text-center font-bold">伝えたいこと</h2>

<ul class="mt-30 table text-left mx-auto">
  <li v-click class="pb-4 text-5xl font-bold"><span class="strong">テスト</span>の導入</li>
  <li v-click class="pb-4 text-5xl font-bold">テストの<span class="strong">自動化</span></li>
</ul>

<!--
1. テストという防御する役割のシステムを導入したこと
2. そして導入したテストを自動化したこと

対象はコーポレートサイト。
それを前提で進めさせていただきます。
-->

---
src: "./pages/title01.md"
---

---
layout: center
transition: fade-in
title: テストの導入
---

<h3 class="text-center font-bold">テスト</h3>

<ul class="mt-20 table text-left mx-auto">
  <li v-click class="pb-4 text-3xl">プロテイン / トレーニンググッズ / アパレルの検品</li>
  <li v-click class="pb-4 text-3xl">LP / SNS / YouTube の法務チェック</li>
  <li v-click class="pb-4 text-3xl">サーバーの負荷テスト</li>
</ul>

<div class="text-center mb-2">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong">会社の信頼を守る重要な工程</h3>

---
layout: center
title: テストの導入
transition: fade-in
---

<h4 class="font-bold mb-10 text-center">導入前</h4>

<div v-click>
  <img src="/images/cs-top.png" class="block aspect-auto h-4/5" alt="自動テストを導入する前のリリースフロー" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong" >検知する仕組みがなかった</h3>

<!--
以前の構成はそもそもテストなかった。

そもそも検知できる仕組みがなかった
もしバク等が発生した場合はリリースしてから気づく or もしくはそもそも気付けない状態だった。

プロテインの検品ないのめっちゃ怖いですよね？
それと同じことが起こっている状況でした。
-->

---
layout: center
title: テストの導入
transition: fade-in
---
<h4 class="font-bold mb-10 text-center">導入前</h4>

<div>
  <img src="/images/cs-top.png" class="block aspect-auto h-4/5" alt="自動テストを導入する前のリリースフロー" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold class="h-30 w-30" />
</div>

<h3 v-click class="text-center font-bold strong" >ぶっつけ本番リリース</h3>

---
layout: center
title: テストの導入
transition: fade-in
---

<h4 class="font-bold mb-10 text-center">導入後</h4>

<div>
  <img src="/images/composition-test.png" class="w-full h-full" alt="今回導入したシステム後のリリースフロー" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong">バグを検知できる仕組み</h3>

---
src: "./pages/title02.md"
---

---
title: テストの紹介
layout: center
clicks: 4
---

<h3 class="text-center font-bold mb-30">お問い合わせフォーム</h3>

<ul class="mt-10 table text-left m-auto">
  <li v-click class="pb-4 text-3xl">入力欄の入力チェックができているか</li>
  <li v-click class="pb-4 text-3xl">送信エラーになった場合の挙動</li>
  <li v-click class="pb-4 text-3xl" :style="$clicks === 4 ? 'color: #56ffff;' : ''">正常にメールが送れるか</li>
</ul>

<!--
もしエラーに引っかからないように入力して送信した場合は、正常にメールが送信できることを確認するテスト。
もちろん他にもわざと入力欄を空欄のまま送信させるようなテストを実行したりもしています。
-->

---
title: テストの紹介
layout: center
---

<h3 class="text-center font-bold mb-30">お問い合わせフォーム</h3>

<video controls width="500" class="mx-auto">
  <source src="/videos/contact.mp4" type="video/mp4" />
</video>

---
title: テストの紹介
layout: center
---

<h3 class="text-center font-bold mb-20">UIテスト</h3>

<ul class="mt-10 table text-left m-auto">
  <li v-click class="pb-4 text-3xl">修正前と修正後の見た目の差分を確認するテスト</li>
  <li v-click class="pb-4 text-3xl">意図していない見た目の差分が出ていないか</li>
</ul>

---
layout: default
---

<iframe id="iframe" title="reg-suit が出力したレポートの URL" src="https://lev-corporate-vrt-screenshots.s3.amazonaws.com/d9046f8f8e1825dee55f8b68c18e0f14719f8b57/index.html" width="100%" height="100%" allow="fullscreen"></iframe>

<OpenFullScreenButton />



<!--
Report URL: https://lev-corporate-vrt-screenshots.s3.amazonaws.com/d9046f8f8e1825dee55f8b68c18e0f14719f8b57/index.html

PR URL: https://github.com/Leverage-Inc/leverage-inc-v2/pull/511
 -->

---
src: "./pages/title03.md"
---

---
layout: center
title: テストの自動化
---

<h4 class="font-bold mb-10 text-center">手動の場合</h4>

<div v-click>
  <img src="/images/composition-manual.png" class="w-full h-full" alt="今回導入したテストの構成の手動バージョン" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong">1000分</h3>

---
layout: center
title: テストの自動化
---

<h4 class="font-bold mb-10 text-center">自動化</h4>

<div>
  <img src="/images/composition-auto.png" class="w-full h-full" alt="今回導入したテストの構成で自動化した部分" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong">8分</h3>

<!--
自動化のところだけ動画見せる。
-->

---
src: "./pages/title04.md"
---

---
layout: center
transition: fade-in
title: 導入結果
---

<h3 class="mb-10 text-center font-bold">テストの導入</h3>

<ul class="mt-20 table text-left mx-auto">
  <li v-click class="pb-4 text-3xl" :style="$clicks > 3 ? 'text-decoration: line-through;' : ''">ページの一部分が表示されていない</li>
  <li v-click class="pb-4 text-3xl" :style="$clicks > 3 ? 'text-decoration: line-through;' : ''">ページの見た目が崩れている</li>
  <li v-click class="pb-4 text-3xl" :style="$clicks > 3 ? 'text-decoration: line-through;' : ''">メールが届かない</li>
</ul>

<div class="text-center mb-2">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong"><mdi-checkbox-marked class="h-1/13 w-1/13" />会社の信頼を失わない仕組み</h3>

<!--
導入する前にはこのような仕組みがなかったため、いつバグや不具合が発生してもおかしくない状況でしたが、
導入後はリリース前にバグや不具合を検知できるようになった。
-->

---
layout: center
transition: fade-in
title: 導入結果
---

<h3 class="mb-10 text-center font-bold">テストの自動化</h3>

<ul class="mt-20 table text-left mx-auto">
  <li v-click class="pb-4 text-3xl">必ずリリース前にテストが実行できる</li>
  <li v-click class="pb-4 text-3xl">開発者の手間が増えない</li>
</ul>

---
layout: end
---