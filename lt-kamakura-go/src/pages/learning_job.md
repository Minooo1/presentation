---
title: 3ヶ月経ったので振り返ってみる
layout: default
---

# 👍 構文が統一的（gofmtいいね！）

<p class="text-2xl">フロントエンドの場合</p>

```json
// .prettierrc.json フォーマッター
{
  "bracketSpacing": true,
  "bracketSameLine": false,
  ...
}
```

```json
// .eslintrc.json 静的解析
{
  "root": true,
  "env": {...},
  "extends": [...],
  "plugins": [...],
  "rules": {...},
  ...
}

```

<style>
code.language-json {
  font-size: 20px;
}
</style>

<!--
フロントエンドエンジニアをしていた時は、prettier や eslint のようなツールを使ってフォーマッターの設定や構文のルールを設定していたのですが、柔軟に設定ができる分、設定が結構めんどくさかったり、チームごとに設定が違うこともあったのですが、Goでは基本的にこの辺りは全て統一的にされるのかなと思っていて、コードの読み書きがしやすいなという印象を受けました。

`gofmt`によるフォーマッターの設定は基本的に変えることができないので、良い意味で書き方に自由度がなく、統一されているなという印象を受けました。

-->

---
title: 3ヶ月経ったので振り返ってみる
layout: default
---

# 👍 未使用変数はエラーになる

<p class="text-2xl">Go</p>

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

<p class="text-2xl">JavaScript</p>

```js
function main() {
    const number = 2;
    console.log("hello world");
}
main(); // エラーはでない
```

<!--
Goはコンパイル時にエラーとして扱ってくれるため、このコードが使われているかどうかなどを考える必要がないのは、コードを読む時に優しいなと感じました。

フロントエンドで開発していた時は未使用変数が混在しているようなプロジェクトもあり、コードを読むときにノイズになっていた。また実際にエラーを出したい時には先ほど紹介したようなツールたtsconfigなどの設定が必要だったので、元々備わっているのは良いなと思いました。

またGoでは未使用のimportもエラーになるのも良いなと思いました。
-->

---
title: 3ヶ月経ったので振り返ってみる
layout: default
---

# 👍 テストの読み書きがしやすい

```go
import (
  "testing"
  "github.com/stretchr/testify/assert"
)

func TestAdd(t *testing.T) {
    tests := []struct {
        name     string
        a, b     int
        expected int
    }{
        {"1+1", 1, 1, 2},
        {"2+3", 2, 3, 5},
    }

    for _, tt := range tests {
      result := Add(tt.a, tt.b)
      assert(t, tt.expected, result, tt.name)
    }
}
```

<!--
普段テーブルドリブンテストでテストを書いているのですが、テストケースを記述するテーブルの部分とテストのロジックが分離しているので、テストが書きやすいし、読みやすいなと感じました。
また、フロントエンドだとユニットテスト、E2Eテスト、ビジュアルリグレッションテストなど様々なテストタイプがあったり、各テストで使えるツールが多彩でもう少し考えることが多くそのあたりの難易度が高かった印象だったのですが、Goだとそのあたりのことを考えることがそこまでないかなという印象を受けています。
-->

---
title: 3ヶ月経ったので振り返ってみる
layout: default
---

# 👍 ゼロ値について知ることができた

<p class="text-2xl">JavaScript / TypeScript</p>

```js
let message; // undefined
```

<p class="text-2xl">Go</p>

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
        <td>int系, uint系, float系, complex系</td>
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
        <td>pointer,interface,slice,map, channel, function</td>
        <td>nil</td>
      </tr>
    </tbody>
  </table>
</div>

<!--
JavaScriptやTypeScriptだと初期値なしの場合はundefinedになるのですが、Goではゼロ値によって型を持つ値が与えられるので、安全に扱うことができるのは良いなと思いました。
-->

---
title: 3ヶ月経ったので振り返ってみる
layout: default
---

# 🎉 まとめ

<ul>
  <li class="text-2xl">言語の比較を考えながら開発するのは楽しい</li>
  <li class="text-2xl">Goを使っての開発は楽しい</li>
  <li class="text-2xl">更にGoについて詳しくなっていきたい</li>
</ul>

<!--
最後に簡単にまとめです。
2つ目ですが、結果的に思い切ってバックエンドエンジニアに転向して良かったなと感じています。
3つ目ですが、弊社ではバックエンドエンジニアで社内勉強会や輪読会も行っているので、普段の業務で吸収できるところは吸収しつつ、チーム全体でGoの知見を深めていきたいなと思っています。
-->