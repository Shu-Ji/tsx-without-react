declare namespace JSX {
    type Element = HTMLElement;

    interface IntrinsicElements {
        [eleName: string]: any;
    }
}