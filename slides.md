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
今日ここで伝えたいことは２点です。
1. テストという会社の信頼を守る役割を持つシステムを導入したこと
2. 導入したテストを自動化したこと

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
  <li v-click class="pb-4 text-3xl">LP / SNS / YouTube 等の法務チェック</li>
  <li v-click class="pb-4 text-3xl">サーバーの負荷テスト</li>
</ul>

<div class="text-center mb-2">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong">会社の信頼を守る重要な工程</h3>

<!--
まずは「テスト」について普段の業務でイメージできそうなものをあげてみたいと思います。

これらがない状態で、商品を出荷したり、リリースすることは考えられないのではないかなと思います。
なぜなら、もし異物混入や不良品、誇大広告等に繋がれば一気に会社としての信頼を失うからです。

そのため、会社 / 事業の信頼を守るためにとても重要な工程の一つだと言えます。
今回は「テスト」という名前ではありますが、実際にはこれらと同じようなシステムを導入しました。
-->

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

<h3 v-after class="text-center font-bold strong" >テストが存在していなかった</h3>

<!--
それでは導入前の状態がどうだったか。

そもそもテストなかった。
もしバク等が発生した場合はリリースしてから気づく or もしくは気づかずにそのままの状態で運用される、という状況でした。
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

<!--
今回テストのシステムを導入したことで、リリース前にテストが実行されて、事前にバグを検知できるようになりました。
-->

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
  <li v-click class="pb-4 text-3xl" :style="$clicks === 4 ? 'color: #56ffff;' : ''">正常にメールが送信できているか</li>
  <li v-click class="pb-4 text-3xl">入力欄の検証ができているか</li>
  <li v-click class="pb-4 text-3xl">送信エラー時の挙動</li>
</ul>

<!--
1. 各入力欄に適切な値を入力できたら正常に送信できるか

2. 例えば電話番号入力する欄に氏名を入力してたらエラーを表示できているか

3. 送信エラーだった場合にユーザーに知らせることができているか

今回は「正常にメールが送信できるか」をどのようにテストしているのかを実際に動作しているところを見ていただきたいと思います。
各フォームに適切な値を入れたら正常に送信できていることを確認するテストです。
-->

---
title: テストの紹介
layout: center
---

<h3 class="text-center font-bold mb-30">お問い合わせフォーム</h3>

<!-- TODO: 動画を変えた方がいいかも -->
<video controls width="500" class="mx-auto">
  <source src="/videos/contact.mp4" type="video/mp4" />
</video>

<!--
ちなみに今から見ていただく動画は、この後お伝えする「自動化」にも繋がってくるのですが、最初から最後まで自動で実行しています。またこの動画の録画自体も自動でするようにプログラムを書いています。

他にもわざと入力欄を空欄のまま送信させたり、エラーが出るように送信したりなど複数のパターンのテストのプログラムを書いて同時に複数のブラウザを立ち上げてテストの実行をする、というのを実際にはやっています。

メールが届かないといった問題がリリース前に検知できるようになった。
-->

---
title: テストの紹介
layout: center
transition: fade-out
---

<h3 class="text-center font-bold mb-20">UIテスト</h3>

<ul class="mt-10 table text-left m-auto">
  <li v-click class="pb-4 text-3xl">修正前と修正後の見た目の差分を確認するテスト</li>
  <li v-click class="pb-4 text-3xl">意図していない見た目の差分が出ていないか</li>
</ul>

<!--
2つ目のテスト。

手を加える前と後でどの部分の見た目が変わったかを確認できるテスト。
自分が修正した箇所が他のページにも影響してしまうことがあるので、それを防ぐことを目的としています。

このUIテストを実行すると、まず現在の各ページのスクリーンショットを撮ります。その後に手を加える前のスクリーンショットと見比べることで、差分を比較するというロジックになります。
-->


---
layout: default
---

<iframe id="iframe" title="reg-suit が出力したレポートの URL" src="https://lev-corporate-vrt-screenshots.s3.amazonaws.com/d9046f8f8e1825dee55f8b68c18e0f14719f8b57/index.html" width="100%" height="100%" allow="fullscreen"></iframe>

<OpenFullScreenButton />

<!--
今から見ていただくのはその比較した結果のレポートになります。
このレポートを見ることで、どこに差分が発生したのかが一目でわかるようになります。もちろんスクリーンショットを撮る、差分を比較する、レポートを出力する、も全て自動化しています。

ポイントは Chrome や Firefox, Safari など複数のブラウザで、かつ PCサイズ、スマホサイズでスクリーンショットを撮って前後の比較ができるところです。テスト毎に約500枚ほどのスクリーンショットの比較しています。

なので絶対に自分の目視だけでは追えない範囲までを全て自動で網羅できるので、想定外の影響が発生した時はこれで検知ができるようになり、リリース後にページの崩れや見た目がおかしくなるということを防ぐことができます。

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

<!--
先ほどの少しお話ししたように様々なパターンでテストをしたり、大量のスクリーンショットを細かいところまで比較したり、その他にも紹介した以外でたくさんのテストを実行しています。

なのでもし今回のテストを手動でやる場合は、およそ1000分ほどかかります。
-->

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
今回テストを自動で実行するためのプログラムを書くことで、約7 - 8分でこれら全てのテストが完了できるようになりました。
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

<h3 v-after class="text-center font-bold strong"><mdi-checkbox-marked class="h-1/12 w-1/12" />会社の信頼を守る仕組み</h3>

<!--
今回今までなかったテストの導入をしました。
導入する前にはこのような仕組みがなかったため、いつバグや不具合が発生してもおかしくない状況でしたが、導入後はリリース前にバグや不具合を検知できるようになった。
結果的に、「会社の信頼を守る」という点で一つ良い仕組みができたと思っています。
-->

---
layout: center
transition: fade-in
title: 導入結果
---

<h3 class="mb-10 text-center font-bold">テストの自動化</h3>

<ul class="mt-20 table text-left mx-auto">
  <li v-click class="pb-4 text-3xl">必ずリリース前にテストが実行できる</li>
  <li v-click class="pb-4 text-3xl">エンジニアの手間が増えない</li>
</ul>

<div class="text-center mb-2">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong"><mdi-checkbox-marked class="h-1/12 w-1/12 mr-2" />安心・安全に開発できる</h3>

<!--
1. 必ずリリース前にテストが実行できるようになることで、何かあったらリリース前に気付けるので、エンジニアとしても安心して開発をすることができる。

2. いつも通りリリースの準備をするだけでテストのシステムが実行されるので手間が増えない。

自動化したことで、大幅な時間の短縮はもちろんのことエンジニアとしても恩恵を受けることができた。
-->

---
layout: end
---

<!--
僕のプレゼンは以上になります。
ご静聴ありがとうございました。
-->