---
title: 3ヶ月やってみての振り返り
layout: default
---

# 👍 構文が統一的（gofmtいいね！）

フロントエンドの場合

```json
// .prettierrc.json フォーマッター
{
  "bracketSpacing": true,
  "bracketSameLine": false,
  ...
}
```

```json
// .eslintrc.json 静的構文解析
{
  "root": true,
  "env": {},
  "extends": [],
  "plugins": [],
  "rules": {},
  ...
}

```

<!--
`gofmt`によるフォーマッターの設定は基本的に変えることができないので、良い意味で書き方に自由度がなく、統一されている。

フロントエンドエンジニアをしていた時は、prettier や eslint を使っていたのですが、柔軟に設定ができる分、設定が結構めんどくさかったり、チームごとに設定が違うこともあったのですが、goでは基本的にこの辺りは全て統一されるのかなと思っていて、コードを読み書きにおいて良い点だなと感じました。
-->

---
title: 3ヶ月やってみての振り返り
layout: default
---

# 👍 未使用変数/インポートはエラーになる

Go

```go
import (
  "fmt"
)

func main() {
  var number = 2
  fmt.Println("hello world")
}

// go run main.go => エラー: number declared and not used
```

JavaScript

```js
function main() {
    const number = 2;
    console.log("hello world");
}
main(); // エラーはでない
```

<!--
Goはコンパイル時にエラーとして扱ってくれるため、このコードが使われているかどうかなどを考える必要がなく、コードを読む方にもやさしい。

最初JavaScriptで開発していた時は未使用変数などが混在しているコードもあったりでコードを読むときに若干ノイズになっていた。

またフロントエンドでもeslintを使ってエラーを出すことは可能だか、設定が必要だったので、元々備わっているのは良いなと思いました。
-->

---
title: 3ヶ月やってみての振り返り
layout: default
---

# 👍 命名規則が定まっている

推奨される[命名規則](https://go.dev/doc/effective_go#names)が定まっている。<br>

変数名の省略

```go

```

関数名

```go
func xxxx()
```

```js
function xxxx()
```

<!--
命名の対象として変数、関数、構造体、パッケージ、インターフェースがあるが、推奨される[命名規則](https://go.dev/doc/effective_go#names)が定まっている。<br>
開発者間で命名について議論が必要最小限になったり、開発時に悩むことが少なくなる。

 変数名の省略や関数がfunctionではなく、func などGoならではの規則もあるのが面白いなと感じました。
-->

---
title: 3ヶ月やってみての振り返り
layout: default
---

# 👍 ゼロ値について知ることができた
ゼロ値は変数に初期値を与えずに宣言した場合に与えられる、デフォルトの値。デフォルト値は型によって変化する。

<div>
  <table class="table-fixed">
   <thead class="bg-gray-100">
      <tr>
        <th>型</th>
        <th>ゼロ値</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>int, uint, float</td>
        <td>0</td>
      </tr>
      <tr>
        <td>byte, rune</td>
        <td>0</td>
      </tr>
      <tr>
        <td>bool</td>
        <td>false</td>
      </tr>
      <tr>
        <td>string</td>
        <td>""</td>
      </tr>
      <tr>
        <td>error</td>
        <td>nil</td>
      </tr>
      <tr>
        <td>pointer,interface,slice,map, channel, function...</td>
        <td>nil</td>
      </tr>
    </tbody>
  </table>
</div>

JavaScriptで初期値なしの変数宣言をした場合は`undefined`が入る

```js
let message; // undefined
```

---
title: 3ヶ月やってみての振り返り
layout: default
---

# 🎉 まとめ

- Goでの開発は楽しい
- 社内勉強会を通じてスキルアップしていきたい
