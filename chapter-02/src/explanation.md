## Elements, Components, and re-renders

### Component

It is just a function that returns **Elements** which then React converts into **DOM** elements and sends to the browser to be drawn on the screen.

```js
const Parent = (props) => {
  return <Child />
}
```

Every time we use those brackets on a component, we create an Element. The Element of the `Parent` component would be `<Parent />`

We can even replace that element with this: 
`React.createElement(Child, null, null)`
The object definition for our `Child />` element would look like:
```js
{
  type: Child;
  props: {}; // if Child had props
  ... // lots of other internal React stuff
}
```

## Re-renders

What we usually refer to as "re-render" is React calling those functions and executing everything that needs to be executed in the process (like hooks). React builds a tree of those objects - **DOM**. Two trees: before and after re-render.

React will extract information that goes to the browser: which DOM elements need to be updated, removed, or added. This is known as the **"reconciliation"**.

## Children as Props

```js
{
  type: Parent
  props: {
    children: {
      type: Child
    }
  }
}
```
