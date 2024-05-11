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

---
title: 3ヶ月やってみての振り返り
layout: default
---

### breakとcontinueを使って処理を終了させる

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

### ループでcontinue使う
### 条件分岐でbreakする

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

### パッケージ関連
assertパッケージで引数にタイトルを渡す
構造体の比較（オプションを使うと一部のフィールドを無視できる）
httpmockでテストのAPIをモックする
条件に応じたテストのスキップ
