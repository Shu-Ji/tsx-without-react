function createElement(tag: string | Function, props: Record<string, any>, ...children: unknown[]): JSX.Element {
    if (typeof tag === "function") {
        if (/^class\s/.test(Function.prototype.toString.call(tag))) {
            // TODO: class 组件
            return document.createTextNode('TODO class 组件渲染') as any;
        }

        return tag(props, children);
    }

    const element = document.createElement(tag as string)

    Object.entries(props || {}).forEach(([name, value]) => {
        if (name.startsWith('on') && name.toLowerCase() in window) {
            element.addEventListener(name.toLowerCase().substr(2), value)
        } else {
            element.setAttribute(name, value?.toString())
        }
    })

    children.forEach((child: any) => {
        appendChild(element, child)
    })

    return element;
}

function createFragment(_: unknown, ...children: JSX.Element[]): JSX.Element[] {
    return children
}

function appendChild(parent: any, child: any) {
    if (Array.isArray(child)) {
        child.forEach((nestedChild) => appendChild(parent, nestedChild))
    } else {
        parent.appendChild(
            child.nodeType ? child : document.createTextNode(child)
        )
    }
}

export function render(element: JSX.Element, container: HTMLElement) {
    container.appendChild(element)
}

const React = {
    h: createElement,
    f: createFragment,
}

export default React;