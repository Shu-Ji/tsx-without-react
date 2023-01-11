import React from "./react";
import CounterButton from "./counter";
import CounterButtonVueReactivity from "./counter-vue-reactivity";
import CounterButtonS from "./counter-s";
import CounterButtonObserverUtil from "./counter-observer-util";
import CounterButtonMobX from "./counter-mobx";

export default function App() {
    return <div>
        <>
            <h1>Vanilla JS + TSX</h1>
            <CounterButton/>
            <p/>
            <CounterButtonS/>
            <p/>
            <CounterButtonVueReactivity/>
            <p/>
            <CounterButtonObserverUtil/>
            <p/>
            <CounterButtonMobX/>
        </>
    </div>
}
