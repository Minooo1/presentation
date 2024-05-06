---
title: 3ヶ月間の実務での学び
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
title: 3ヶ月間の実務での学び
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
title: 3ヶ月間の実務での学び
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
title: 3ヶ月間の実務での学び
layout: default
---

### ループでcontinue使う
### 条件分岐でbreakする

---
title: 3ヶ月間の実務での学び
layout: default
---

### パッケージ関連
assertパッケージで引数にタイトルを渡す
構造体の比較（オプションを使うと一部のフィールドを無視できる）
httpmockでテストのAPIをモックする
条件に応じたテストのスキップ
