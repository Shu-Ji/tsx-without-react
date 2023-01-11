import React from "./react";
import {effect, reactive} from "@vue/reactivity";

export default function CounterButtonVueReactivity() {
    const state = reactive({
        count: 0,
        setCount() {
            state.count++;
        },
    });
    const btn = <button type="button" onClick={state.setCount}/>;

    effect(() => {
        btn.innerHTML = `@vue/reactivity(3.94kB gzipped) 点击次数：${state.count}。<br/>(推荐★★★★★)`;
    });

    return btn;
}
