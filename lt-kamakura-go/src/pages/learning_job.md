---
title: 3ヶ月やってみての振り返り
layout: center
---

# positive 👍

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 記述がシンプルかつ構文が統一的

`gofmt`によるフォーマッターの設定は基本的に変えることができないので、構文にいい意味で自由度がなく、統一されている。

コードを書く際にパッケージの書き方を参考にしやすかったり、パッケージが内部でどのように実装されているかのコードリーディングがしやすい。

<!--
過去に僕がフロントエンドエンジニアをしていた時は、prettier や eslint を使っていたのですが、設定が結構めんどくさかったり、チームごとに設定が違ったりもしていた記憶があるのですが、gofmtではそもそも設定することができないので、基本的にこの辺りは全て統一されるのかなと思っていて、良い点だなと感じました。
-->

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 未使用変数/インポートはエラーとして扱ってくれる

コンパイル時にエラーとして扱ってくれるため、実行ファイルに不要なコードが含まれない。またコードを読む方にもやさしい。<br>VSCodeの拡張機能を使うと、コードを保存した時に未使用のインポートは自動で削除してくれる。

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

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 命名規則が定まっている

命名の対象として変数、関数、構造体、パッケージ、インターフェースがあるが、推奨される[命名規則](https://go.dev/doc/effective_go#names)が定まっている。<br>
開発者間で命名について議論が必要最小限になったり、開発時に悩むことが少なくなる。

ちなみに最近頭字語というのを知りました😅
<br>
頭字語・・複数の単語の頭文字を組み合わせた造語

```go
userId → userID
baseUrl → baseURL
ServeHttp → ServeHTTP
```

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 標準/外部パッケージが充実している

**構造体の比較ができる [go-cmp](https://pkg.go.dev/github.com/google/go-cmp/cmp)**

```go
if diff := cmp.Diff(got, want); diff != "" {
  t.Fatalf("...%s", diff)
}

// 一部のフィールドを無視して比較する
ignoreField := cmpopts.IgnoreFields(got, "ID")
if diff := cmp.Diff(got, want); diff != "" {
  t.Fatalf("...%s", diff)
}
```

**httpリクエストをモックできる[httpmock](https://github.com/jarcoal/httpmock)**

**ShopifyAPIのGoクライアントである[go-shopify](https://github.com/bold-commerce/go-shopify)**

<!--
Goはfmtやjsonなど標準パッケージが揃っている印象を受けました。
また外部パッケージなどでも普段の業務で使える場面が多く、開発する上での助けになっていると感じています。
-->

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 ゼロ値について知ることができた
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
layout: center
---

# hard 🤨

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 🤨 fmt関数を覚えるの大変

PrefixとSuffixによって用途が違い、どのような時に何を使うのかが分からなかった。<br>
実務を通して覚えていくことで今は大変さを感じることは無くなった。

<div>
  <table class="table-fixed">
   <thead class="bg-gray-100">
      <tr>
        <th>fmt関数</th>
        <th>使い方</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>fmt.Print, fmt.Printf, fmt.Println</td>
        <td>標準出力への出力する</td>
      </tr>
      <tr>
        <td>fmt.Sprint, fmt.Sprintf, fmt.Sprintln</td>
        <td>文字列を生成する</td>
      </tr>
      <tr>
        <td>fmt.Fprint, fmt.Fprintf, fmt.Fprintln</td>
        <td>書き込み先を指定して出力</td>
      </tr>
    </tbody>
  </table>
</div>

実際の実務で使うことが多い
```go
url := fmt.Sprintf("/api/users/%d", userID)
```

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 🤨 interface難しい

interfaceとは何かという表面的なところは理解できているが、実際の使うとなった時の使いどころがまだ理解できていない。

go 100の間違いより（日本語訳ver）
> 抽象化は作成されるべきものではなく、発見されるべきものです。不必要な複雑さを避けるために、インタフェースは、必要になると予測したときではなく、必要になったときに作成するか、少なくとも抽象化が有効であることを証明できる場合に作成してください。

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 🤨 まだまだ使いこなせていないものも多い

ざっと挙げるだけでも、context, goroutine、などまだ理解できてないことが多い。
