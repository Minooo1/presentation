---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 記述がシンプルかつ構文が統一的

gofmtによるフォーマッターの設定は変えることができないので、構文にいい意味で自由度がない。

コードを書く際にパッケージの書き方を参考にしやすかったり、パッケージが内部でどのように実装されているかのコードリーディングがしやすい。

<!--
過去に僕がフロントエンドエンジニアをしていた時は、prettier や eslint を使っていたのですが、設定が結構めんどくさかったり、チームごとに設定が違ったりもしていた記憶があるのですが、gofmtではそもそも設定することができないので、基本的にこの辺りは全て統一されるのかなと思っていて、良い点だなと感じました。
-->

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 未使用の変数やインポートはコンパイルエラーとして扱ってくれる

不要になっているコードが含まれないことを保証されていて、コードを読む方にもやさしい。

VS Codeの拡張機能だと未使用のインポートは自動で削除してくれる。

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

## 👍 標準パッケージが充実している

**構造体の比較ができる [go-cmp](https://pkg.go.dev/github.com/google/go-cmp/cmp)**

```go
if diff := cmp.Diff(got, want); diff != "" {
  t.Fatalf("...%s", diff)
}

// 一部のフィールドを除外して比較することも可能
ignoreField := cmpopts.IgnoreFields(got, "ID")
if diff := cmp.Diff(got, want); diff != "" {
  t.Fatalf("...%s", diff)
}
```

**httpリクエストをモックできる[httpmock](https://github.com/jarcoal/httpmock)**

```go
httpmock.Activate()
defer httpmock.DeactivateAndReset()

httpmock.RegisterResponder(http.MethodPost, mock,httpmock.NewStringResponder(200, `{"name": "taro"}`))
```

**ShopifyAPIのGoクライアントである[go-shopify](https://github.com/bold-commerce/go-shopify)**

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 命名規則が網羅されている

命名の対象として変数、関数、構造体、パッケージ、インターフェースがあるが、推奨される[命名規則](https://go.dev/doc/effective_go#names)が定まっている。

開発者間で命名について議論が必要最小限になったり、開発時に悩むことが少なくなる。

最近頭字語というのを知りました😅

```go
var userID
var baseURL
```

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 🤨 interface難しい

- 設計
- 抽象度揃える

go 100の間違い（日本語訳ver）
> 抽象化は作成されるべきものではなく、発見されるべきものです。不必要な複雑さを避けるために、インタフェースは、必要になると予測したときではなく、必要になったときに作成するか、少なくとも抽象化が有効であることを証明できる場合に作成してください。

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 🤨 まだまだ使いこなせていないものも多い

ざっと挙げるだけでも、context, goroutine、などたくさんある。
