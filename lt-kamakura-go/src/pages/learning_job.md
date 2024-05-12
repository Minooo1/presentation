---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 構文がシンプルで比較的同じ

gofmtで

標準ライブラリを参考にしやすい
標準ライブラリが内部でどのように実装されているかが比較的読みやすいと感じた

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 未使用の変数やインポートはコンパイルエラーとして扱ってくれる

不要になっているコードが含まれないことを保証されていて、コードを読む方にもやさしい。

VS Codeの拡張機能を使えば未使用のインポートは自動で削除してくれる。

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

## 👍 エラーによる分岐が統一されていてわかりやすい

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 標準のライブラリが充実している

assertパッケージで引数にタイトルを渡す
構造体の比較（オプションを使うと一部のフィールドを無視できる）
httpmockでテストのAPIをモックする
条件に応じたテストのスキップ

---
title: 3ヶ月やってみての振り返り
layout: default
---

## 👍 命名規則が網羅されている印象

[命名規則](https://go.dev/doc/effective_go#names)

頭字語というのも最近知りました。

```go
var userID := "user"
var baseURL := "https://xxx"
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

## 🤨 まだまだ使いこなせていない

contextやgoroutineなど
