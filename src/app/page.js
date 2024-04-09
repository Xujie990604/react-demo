"use client"
import page from "./page.module.css";
// 以 use 开头的函数叫做 hook
import {useState} from 'react';

// React 组件是返回标签的 JS 函数
// 组件名必须是以大写字母开头
// JSX 语法，比 HTML 更加严格，标签必须闭合，并且一个组件不能返回多个 JSX 标签
function MyButton() {
  // count 使用的值
  // setCount 用于更新值的函数
  let [count, setCount] = useState(0)
  function handleClick() {
    alert(`click me: ${count}`)
    setCount(count++)
  }
  return <button onClick={handleClick}>我是一个按钮</button>;
}

// default 关键字指定了当前文件的主要组件
export default function Home() {
  const card = "card-btn";
  const userName = "hello React";
  // 可以直接使用变量定义组件
  const btnCpt = <MyButton></MyButton>;
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  return (
    <>
      {/* 通过 CSS module 的形式来使用 CSS */}
      <div className={page[card]}>
        {/* 通过 {} 在 JSX 中使用 JS 变量 */}
        <h1>{userName}</h1>
        {btnCpt}
        <ul>
          {products.map((product) => (
            <li
              key={product.id}
              style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
            >
              {product.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
