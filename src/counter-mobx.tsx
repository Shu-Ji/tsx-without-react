import React from "./react";
import {autorun, observable} from 'mobx';

export default function CounterButtonMobX() {
    const state = observable({
        count: 0,
        setCount() {
            state.count++;
        }
    });
    const btn = <button type="button" onClick={state.setCount}/>

    autorun(() => {
        btn.innerHTML = `mobx(15.39kB gzipped) 点击次数：${state.count}`
    })

    return btn;
}
