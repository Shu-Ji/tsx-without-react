import React from "./react";

export default function CounterButton() {
    let counter = 0
    const btn = <button type="button" onClick={() => setCounter(++counter)}/>
    setCounter(0)

    function setCounter(count: number) {
        btn.innerHTML = `自研(0.91kB gzipped)：点击次数：${count}`
    }

    return btn;
}