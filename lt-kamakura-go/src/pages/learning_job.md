---
title: 3ヶ月やってみての振り返り
layout: default
---

### 未使用変数や未使用インポートがあるとコンパイルエラーとして扱ってくれる

---
title: 3ヶ月やってみての振り返り
layout: default
---

### エラーによる分岐は明示的で統一
的
---
title: 3ヶ月やってみての振り返り
layout: default
---

### 構文がある程度同じgofmtいいね

標準ライブラリを参考にしやすい

---
title: 3ヶ月やってみての振り返り
layout: default
---

### interface難しい

- 設計
- 抽象度揃える

go 100の間違い（日本語訳ver）
> 抽象化は作成されるべきものではなく、発見されるべきものです。不必要な複雑さを避けるために、インタフェースは、必要になると予測したときではなく、必要になったときに作成するか、少なくとも抽象化が有効であることを証明できる場合に作成してください。

---
title: 3ヶ月やってみての振り返り
layout: default
---

### 標準のライブラリが充実している

assertパッケージで引数にタイトルを渡す
構造体の比較（オプションを使うと一部のフィールドを無視できる）
httpmockでテストのAPIをモックする
条件に応じたテストのスキップ

---
title: 3ヶ月やってみての振り返り
layout: default
---

### 構造体の初期値をnilしたいときは指定したい場合はポインタにする

```go
type Person struct {
  name  string  `json: "name"`
  email *string `json: "email"`
}

if person.email != nil {
  // 処理
}
```

---
title: 3ヶ月やってみての振り返り
layout: default
---

### 正規表現は処理は外に切り出す

```go
type Person struct {
  name  string  `json: "name"`
  email *string `json: "email"`
}

if person.email != nil {
  // 処理
}
```
