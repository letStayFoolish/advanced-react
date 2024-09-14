# Memoization with useMemo, useCallback and React.memo

## useMemo and useCallback: how they work

And finally, **useMemo** is only useful for re-renders. That's the whole point of it and how it works. If your component never re-renders, then useMemo just does nothing.

Don't forget: the very first time the **useMemo** hook runs, when the component is first mounted, React needs to cache it. It will use a little bit of memory and computational power for that, which otherwise would be free.

### Important

If a **non-primitive** value goes into a **dependency**, it should have a stable reference between re-renders, even if it comes from a chain of props. In short, it has to be memoized!


### Some rules to follow

- Rule 1:
    Never spread props that are coming from other components.
```js
const Component = (props) => {
  return <ChildMemo {...props} />
}

// It should be something like this:

const Component = (props) => {
  return <ChildMemo some={props.some} other={props.other} />
}
```
- Rule 2: 
    Avoid passing non-primitive props that are coming from other components.
- Rule 3:
    Avoid passing non-primitive props that are coming from custom hooks.

## Keynotes

- It is recommended using composition-based optimization techniques as much as possible first. `React.memo` should be the last resort when all other things have failed.
- React compares non-primitives: objects/arrays/functions by their reference not their value. That comparison happens in hook's dependencies and props of components wrapped in `React.memo`.
- The inline function passed to either `useMemo` or `useCallback` will be re-created on every re-render. `useCallback` memoizes that function itself, and `useMemo` memoizes the result of its execution.
- Memoizing props on a component makes sense only when:
  - This component is wrapped in `React.memo`,
  - This component uses those props as a dependencies in any of the hooks.
  - This component passes those props down to other components.
- If a component is wrapped in `React.memo`, and its re-render is triggered by its parent, React will not re-render this component if its props haven't changed. In any other case, re-render will proceed as usual.
- Memoizing all props on a component wrapped in `React.memo` is harder than it seems. Avoid passing non-primitive values that are coming from other props or hooks.
- When momoizing props, remember that "children" is also non-primitive prop that needs to be momoized.
