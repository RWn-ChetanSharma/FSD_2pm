# useEffect

> The useEffect hook is used to perform side effects in your functional components, such as fetching data, subscribing to external events, or manually changing the DOM. It combines the functionality of componentDidMount , componentDidUpdate , and componentWillUnmount in class components.




# What does useEffect return?

> useEffect returns either a function or undefined, so it's not uncommon to see effects that haven't been cleaned up. React will compare the current value of the constraint with the value from the previous render. If they are not equal, the effect is called.