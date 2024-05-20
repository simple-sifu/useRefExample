# useRef

When you use useRef, updating the current property does not trigger a re-render or cause useEffect to be triggered, even if current is included in the dependency array. This is because useRef is designed to persist values across renders without causing re-renders.

# SetInterval

Using setInterval works because it continuously checks for changes in the useRef value and triggers state updates based on those changes. This approach avoids relying on dependency arrays in useEffect and ensures that the effect is triggered periodically. Here's why it works:

useRef: Changes to useRef do not trigger re-renders, but they can still be observed.
setInterval: By setting an interval, you create a loop that periodically checks for changes in the useRef value. When a change is detected, the state is updated, which triggers a re-render.
This ensures that the state updates happen independently of the component's render cycle.


