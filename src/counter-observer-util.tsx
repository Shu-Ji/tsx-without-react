import React from "./react";
import {observable, observe} from '@nx-js/observer-util';

export default function CounterButtonObserverUtil() {
    const state = observable({
        count: 0
    });
    const btn = <button type="button" onClick={() => state.count++}/>

    observe(() => {
        btn.innerHTML = `@nx-js/observer-util(2.69kB gzipped) 点击次数：${state.count}`
    })

    return btn;
}
