---
theme: default
layout: image
image: /images/slide-top.png
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



<!--
開発部は日々様々な技術を駆使しながら、いろんな課題を解決して、会社に貢献しています。

今日はその一部をお見せできる良い機会だと思いますので、開発部を代表する気持ちでプレゼンをしたいと思います。それではプレゼンを始めます。
-->

---
src: "./pages/start.md"
---

---
layout: center
---

<h1 v-click class="text-center font-bold"><span class="strong">自動テスト</span>の導入</h1>

<!--
今回自分が何に取り組んだのか。ここでお伝えしたいことは一つです。

それが、

- ⭐️会社の信頼を守るために必要不可欠なテストのシステムを導入したこと
です。

今回導入した対象のサイトは、会社の「顔」の役割を持つコーポレートサイトです。それではテストの導入について見てきたいと思います。
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
まずはテストについてイメージをしていただくために、普段の業務からイメージできそうなものをあげてみたいと思います。

== リスト表示させる ==

もしこれらがない場合、不良品や欠陥品（けっかんひん）を出荷したり、誇大広告をしてしまったり、サーバーダウンを引き起こしてしまったりと、会社の信頼を失う一つの要因になってしまいます。

⭐️そのため今挙げた工程は、会社や事業の信頼を守るためにとても重要な工程の一つだと言えます。
今回導入したテストと言うのはこれらと同じようなシステムになります。
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
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong" >テストが存在していなかった</h3>

<!--
次に導入前の状態がどうだったかを見ていきたいと思います。

⭐️そもそも以前はテストというものが存在してませんでした。
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

<!--
⭐️なのでぶっつけ本番でリリースする状態だったため、
バクなどが発生した場合はリリースしてから気づく、もしくは気づかずにそのままの状態で運用されてしまう、という状況でした。
-->

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
今回テストを行うシステムを導入したことで、リリース前に必ずテストが実行されるようになりました。

⭐️これにより事前にバグを検知できるようになりました。
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
一つ目が「お問わせフォーム」です。
例えばどんなテストをしているかというと、

1. 正常にメールが送信できているか

2. 入力欄の検証ができているか

3. 送信エラー時の挙動

このように様々なケースを洗い出し、テストを実行するプログラムを書いています。これによりメールが届かない、などのお問い合わせ関連の問題はリリース前に検知できるようにしています。


⭐️今回は「正常にメールが送信できているか」のテストが実際に動いているところを紹介します。
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
この動画は、この後の「自動化」の部分にもつながるのですが、最初から最後まで自動で実行しています。またこの動画の録画自体も自動でするようにプログラムを書いています。

=== 本体の画面を操作して動画再生する ===

他にも、前のスライドでお伝えしたように複数のケースのテストを洗い出してプログラムを書いるため、実際は同時に複数のブラウザを一気に立ち上げてテストを実行をする、というのをやっています。
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
それでは、次に2つ目のテストをご紹介したいと思います。

⭐️UIテストとは、手を加える前と後でどの部分の見た目が変わったかを確認するテストです。

⭐️自分が修正した箇所が他のページにもしまうことがあるので、そういった想定外の影響を事前に検知することを目的としています。

これは修正前と修正後に撮ったページのスクリーンショットを比較することで差分を抽出するということを行っています。
-->

---
layout: default
---

<iframe id="iframe" title="reg-suit が出力したレポートの URL" src="https://lev-corporate-vrt-screenshots.s3.amazonaws.com/d9046f8f8e1825dee55f8b68c18e0f14719f8b57/index.html" width="100%" height="100%" allow="fullscreen"></iframe>

<OpenFullScreenButton />

<!--
今から見ていただくのはそのスクリーンショットを比較した結果のレポートになります。
このレポートを見ることで、どのページに差分が発生したのかが一目でわかるようになります。もちろんスクリーンショットを撮る、差分を比較する、レポートを出力する、も全て自動化しています。

=== 本体の画面でフルスクリーンで表示する ===

ポイントは Chrome や Firefox, Safari など複数のブラウザで、かつ PCサイズやスマホサイズでスクリーンショットを撮れるところで、様々な組み合わせで前後の比較ができるところです。現在はテスト毎に約500枚ほどのスクリーンショットを撮って比較しています。

なので絶対に自分の目視だけでは追えない範囲までを全て自動で網羅できるので、ページの見た目の崩れや表示がおかしいなどの想定外の影響が発生した時はこれで検知ができるようになります。

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

<div>
  <img src="/images/composition-manual.png" class="w-full h-full" alt="今回導入したテストの構成の手動バージョン" />
</div>

<div class="text-center">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong">1000分</h3>

<!--
先ほど少しお話ししたように様々なパターンでテストをしたり、大量のスクリーンショットを細かいところまで比較したり、その他にも紹介した以外でたくさんのテストを実行しています。

⭐️なのでもし今回のテストを手動でやるとなったら場合は、およそ1000分ほどかかります。

時間にすると約16時間40分
例えば筋トレに換算すると、1時間弱のパーソナルトレーニング2週間分受けることができるくらい長いです。
-->

---
layout: center
title: テストの自動化
transition: fade-out
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
今回テストを導入しつつ、全て自動で実行するようにプログラムを書いてシステムを構築したので、⭐️約7 - 8分でこれら全てのテストが完了できるようになりました。
-->

---
layout: center
title: テストの自動化
---

<h4 class="font-bold mb-10 text-center">自動化</h4>

<video controls width="500" class="mx-auto">
  <source src="/videos/pr.mp4" type="video/mp4" />
</video>

<!--
ではこちらも実際に自動で実行されていることを実際に見ていただきたいなと思います。

ポイントは、自動化したことで、大幅な時間短縮を実現しつつ、開発者は今までと開発フローが変わらないままで、手間が増えていない、というところです。

手間が増えてないけど、テストがあることで安心・安全に開発できるようになりました。
-->

---
src: "./pages/title04.md"
---

---
layout: center
transition: fade-in
title: 導入結果
---

<h3 class="mb-10 text-center font-bold">自動テストの導入</h3>

<ul class="mt-20 table text-left mx-auto">
  <li v-click class="pb-4 text-3xl" :style="$clicks > 3 ? 'text-decoration: line-through;' : ''">ページの一部が表示されていない</li>
  <li v-click class="pb-4 text-3xl" :style="$clicks > 3 ? 'text-decoration: line-through;' : ''">ページの見た目が崩れている</li>
  <li v-click class="pb-4 text-3xl" :style="$clicks > 3 ? 'text-decoration: line-through;' : ''">メールが届かない</li>
</ul>

<div class="text-center mb-2">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong"><mdi-checkbox-marked class="h-1/12 w-1/12" />会社の信頼を守る仕組み</h3>

<!--
今回今までなかったテストのシステムを導入をしました。

導入する前にはこのような仕組みがなかったため、

=== リスト表示 ===

こういったバグや不具合を含んだままリリースしてしまう、リリースしても気づくことができない、といった状況でした。

⭐️導入後はこういったバグがリリース前に検知できるようになりました。
結果的に、会社の信頼を守るための仕組みができ、会社の「顔」としての役割を持つコーポレートサイトの品質を担保することできるようになりました。
-->

---
layout: center
transition: fade-in
title: 導入結果
---

<h3 class="mb-10 text-center font-bold">テストの自動化</h3>

<ul class="mt-20 table text-left mx-auto">
  <li v-click class="pb-4 text-3xl">リリース前に必ずテストが実行される</li>
  <li v-click class="pb-4 text-3xl">安心・安全に開発ができる</li>
</ul>

<div class="text-center mb-2">
  <mdi-arrow-down-bold v-click class="h-30 w-30" />
</div>

<h3 v-after class="text-center font-bold strong">品質の向上</h3>

<!--
⭐️そしてテストを自動化したことで、大幅な時間短縮はもちろんのこと、開発者も安心して開発できるようになりました。

⭐️安心・安全に開発できることで、書くプログラムの品質が向上し、より良いサイト作りに繋がります。最終的には会社の信頼を守りつつ良いサイトづくりができ、会社に貢献ができるのような仕組みを導入することができました。
-->

---
layout: end
---

<!--
これで僕のプレゼンは以上とさせていただきます。
ご静聴ありがとうございました。
-->
