---
title: 勉強して感じたこと4選
layout: default
---

## 🤔 構造体 is 何
「複数の任意の型の値を一つのまとまり」で定義したデータ構造

Goにはクラスが存在しないが、クラスと似たようなもの。

Userというデータモデルを定義したいときには、名前や年齢、アドレスなどの必要な情報をひとまとまりにすることで定義することができる。

```go
type User struct {
  name    string // ← フィールド
  age     int
  address string
}
```

構造体のインスタンス化はNew（型名）という命名のファクトリー関数などで行う方法がある

```go
func NewUser(name, address string, age int) *User {
  return &User{
    Name: name
    Age: age
    Address: address
  }
}
```

---
title: 勉強して感じたこと4選
layout: default
---

## 🤔 ゼロ値 is 何
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
title: 勉強して感じたこと4選
layout: default
---

## 🤔 nil is 何
pointer, interface, slice, map, channel, functionなどの型が持つゼロ値。

JavaScriptで出てきたnullとは似ているようで異なる。
nullは値が存在しないことを表し未定義な状態を表す。
nilは**それ自体が値であり、型を持っている**。

そのため型が違う同士の等価比較は`false`になる。

```go
var i *int32
var s *string
🙅 i == s // 一致しない
```

インターフェースとポインタのnil値は違う

```go
数値型（int, float,etc...）→ 0
bool型 → false
string型 → 空文字列
```

---
title: 勉強して感じたこと4選
layout: default
---

## 🤔 ポインタ??アドレス?? is 何
おそらく勉強しながら一番理解するのに苦労した部分。

まずは変数がコンピュータ上でどのように格納されているかを知る必要があった。

ポインタとはメモリのアドレス

ポインタ変数はメモリ上のアドレスを値として持つ

アドレスとは変数が格納されている場所を指し示す

デリファレンス
&を使ってポインタ型を生成することができる
ポインタ変数のメモリ上のアドレスを経由してデータの実体を参照する仕組み
