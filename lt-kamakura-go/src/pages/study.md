---
title: 勉強して感じたこと6選
layout: default
---

## 構造体 is 何
クラスが存在しない、任意の型を一つのまとまりにしたもの

```go
type Person struct {
  name  string // ← フィールド
  email string
  phone string
}
```

「タグ」というフィールドにメタ情報を付与できる機能を用いて

```go
type Person struct {
  name  string `json: "name"`
  email string `json: "email"`
  phone string `json: "phone"`
}
```

型のコンストラクタはNew（型名）という命名が一般的

```go
func (p *Person) NewPerson() *Person {
  return &Person{
    Name: p.Name
    Email: p.Email
    Phone: p.Phone
  }
}
```

---
title: 勉強して感じたこと6選
layout: default
---

## ゼロ値 = 初期値ではない
ゼロ値は変数に初期値を与えずに宣言した場合に与えられる。値は型によって変化する。

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
        <td>数値型（int, float）</td>
        <td>0</td>
      </tr>
      <tr>
        <td>bool型</td>
        <td>false</td>
      </tr>
      <tr>
        <td>string型</td>
        <td>""</td>
      </tr>
      <tr>
        <td>ポインタ,インターフェース</td>
        <td>nil</td>
      </tr>
    </tbody>
  </table>
</div>

---
title: 勉強して感じたこと6選
layout: default
---

## nil is 何

nullとは似ているようで異なる概念
nullは値が存在しないことを表し未定義な状態を表す
nilはそれ自体が値であり、型を持っている。

ゼロ値は変数に初期値を与えずに宣言した場合に与えられる。値は型によって変化する。

```go
数値型（int, float,etc...）→ 0
bool型 → false
string型 → 空文字列
```

---
title: 勉強して感じたこと6選
layout: default
---

## ポインタとアドレス is 何

nullとは似ているようで異なる概念
nullは値が存在しないことを表し未定義な状態を表す
nilはそれ自体が値であり、型を持っている。

ゼロ値は変数に初期値を与えずに宣言した場合に与えられる。値は型によって変化する。

```go
数値型（int, float,etc...）→ 0
bool型 → false
string型 → 空文字列
```

---
title: 勉強して感じたこと6選
layout: center
---

### 値型と参照型

---
title: 勉強して感じたこと6選
layout: center
---

### fmt系の種類が多くてどれを使えば良いかわからない

---
title: 勉強して感じたこと6選
layout: center
---

- 未使用変数や未使用インポートがあるとコンパイルエラーとして扱ってくれる
- 型安全である
- どの環境でもコンパイルして動く
- 定数や変数をまとめて宣言できる
- 変数宣言時のメモリのことを意識するようになった