import React from "./react";
import S from "s-js";

export default function CounterButtonS() {
    const counter = S.data(0);
    const btn = <button type="button" onClick={() => counter(counter() + 1)}/>
    S(() => btn.innerHTML = `s-js(2.74kB gzipped) 点击次数：${counter()}`);
    return btn;
}
