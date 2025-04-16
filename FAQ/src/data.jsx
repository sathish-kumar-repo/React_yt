const data = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a front-end JavaScript library for building user interfaces or UI components.",
  },
  {
    id: 2,
    question: "What are the benefits of React?",
    answer:
      "Some of the benefits of React are: it is fast, scalable, modular, easy to debug, and supports server-side rendering.",
  },
  {
    id: 3,
    question: "What are the main concepts of React?",
    answer:
      "Some of the main concepts of React are: components, props, state, hooks, lifecycle methods, and JSX.",
  },
  {
    id: 4,
    question: "What is a React component?",
    answer:
      "A React component is a reusable piece of UI that can be used to build complex user interfaces.",
  },
  {
    id: 5,
    question: "What are props in React?",
    answer:
      "Props are inputs to components that allow data to be passed from one component to another.",
  },
  {
    id: 6,
    question: "What is state in React?",
    answer:
      "State is a built-in object that stores property values that belong to a component and can change over time.",
  },
  {
    id: 7,
    question: "What are hooks in React?",
    answer:
      "Hooks are functions that let you use state and other React features without writing a class.",
  },
  {
    id: 8,
    question: "What are React lifecycle methods?",
    answer:
      "Lifecycle methods are special methods in React that allow you to run code at specific points in a component's life cycle.",
  },
  {
    id: 9,
    question: "What is JSX in React?",
    answer:
      "JSX is a syntax extension that allows you to write HTML-like code within JavaScript.",
  },
  {
    id: 10,
    question: "What is a functional component in React?",
    answer:
      "A functional component is a JavaScript function that returns a React element.",
  },
  {
    id: 11,
    question: "What is a class component in React?",
    answer:
      "A class component is a JavaScript class that extends React.Component and has a render method that returns a React element.",
  },
  {
    id: 12,
    question: "What is the virtual DOM?",
    answer:
      "The virtual DOM is a lightweight representation of the actual DOM that React uses to optimize updates.",
  },
  {
    id: 13,
    question:
      "What is the difference between the virtual DOM and the real DOM?",
    answer:
      "The virtual DOM is a lightweight copy of the real DOM, which React uses to update the real DOM more efficiently.",
  },
  {
    id: 14,
    question: "What is the purpose of keys in React?",
    answer:
      "Keys help React identify which items have changed, are added, or are removed, which improves the performance of list rendering.",
  },
  {
    id: 15,
    question: "What is the useState hook in React?",
    answer:
      "The useState hook allows you to add state to functional components.",
  },
  {
    id: 16,
    question: "What is the useEffect hook in React?",
    answer:
      "The useEffect hook allows you to perform side effects in functional components.",
  },
  {
    id: 17,
    question: "What is context in React?",
    answer:
      "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
  },
  {
    id: 18,
    question: "What is the useContext hook in React?",
    answer:
      "The useContext hook allows you to use the context API in functional components.",
  },
  {
    id: 19,
    question: "What is the useReducer hook in React?",
    answer:
      "The useReducer hook is an alternative to useState for managing more complex state logic in functional components.",
  },
  {
    id: 20,
    question: "What is the useRef hook in React?",
    answer:
      "The useRef hook allows you to create a mutable object that persists for the lifetime of the component.",
  },
  {
    id: 21,
    question: "What is the useMemo hook in React?",
    answer:
      "The useMemo hook allows you to memoize expensive calculations and avoid unnecessary re-renders.",
  },
  {
    id: 22,
    question: "What is the useCallback hook in React?",
    answer:
      "The useCallback hook returns a memoized callback function that only changes if one of its dependencies changes.",
  },
  {
    id: 23,
    question: "What is the useLayoutEffect hook in React?",
    answer:
      "The useLayoutEffect hook is similar to useEffect but runs synchronously after all DOM mutations.",
  },
  {
    id: 24,
    question: "What is the useImperativeHandle hook in React?",
    answer:
      "The useImperativeHandle hook allows you to customize the instance value that is exposed to parent components when using refs.",
  },
  {
    id: 25,
    question: "What is a higher-order component (HOC) in React?",
    answer:
      "A higher-order component is a function that takes a component and returns a new component with additional props.",
  },
  {
    id: 26,
    question: "What is React Router?",
    answer: "React Router is a library for routing in React applications.",
  },
  {
    id: 27,
    question:
      "What is the difference between client-side routing and server-side routing?",
    answer:
      "Client-side routing is handled by the browser and JavaScript, while server-side routing is handled by the server.",
  },
  {
    id: 28,
    question: "What is Redux?",
    answer: "Redux is a state management library for JavaScript applications.",
  },
  {
    id: 29,
    question: "What are actions in Redux?",
    answer:
      "Actions are plain JavaScript objects that represent an intention to change the state.",
  },
  {
    id: 30,
    question: "What are reducers in Redux?",
    answer:
      "Reducers are pure functions that take the current state and an action and return a new state.",
  },
  {
    id: 31,
    question: "What is the store in Redux?",
    answer:
      "The store is an object that holds the application's state and provides methods to access and update the state.",
  },
  {
    id: 32,
    question: "What is middleware in Redux?",
    answer:
      "Middleware is a way to extend Redux with custom functionality, such as logging, crash reporting, or handling asynchronous actions.",
  },
  {
    id: 33,
    question: "What is the Redux DevTools extension?",
    answer:
      "The Redux DevTools extension is a browser extension that provides a powerful set of tools for debugging Redux applications.",
  },
  {
    id: 34,
    question: "What is React-Redux?",
    answer:
      "React-Redux is the official binding library for using Redux with React.",
  },
  {
    id: 35,
    question: "What is the connect function in React-Redux?",
    answer:
      "The connect function connects a React component to the Redux store.",
  },
  {
    id: 36,
    question: "What are controlled components in React?",
    answer:
      "Controlled components are form elements that are controlled by React state.",
  },
  {
    id: 37,
    question: "What are uncontrolled components in React?",
    answer:
      "Uncontrolled components are form elements that maintain their own state and update themselves.",
  },
  {
    id: 38,
    question: "What is the React context API?",
    answer:
      "The React context API provides a way to share values between components without passing props.",
  },
  {
    id: 39,
    question: "What is PropTypes in React?",
    answer:
      "PropTypes is a library for type-checking the props of a React component.",
  },
  {
    id: 40,
    question: "What is the defaultProps property in React?",
    answer:
      "The defaultProps property allows you to define default values for props that are not provided.",
  },
  {
    id: 41,
    question: "What is a fragment in React?",
    answer:
      "A fragment is a way to group multiple elements without adding extra nodes to the DOM.",
  },
  {
    id: 42,
    question: "What is the difference between a fragment and a div in React?",
    answer:
      "A fragment does not add an extra node to the DOM, while a div does.",
  },
  {
    id: 43,
    question: "What is the React children prop?",
    answer:
      "The children prop is a special prop that allows you to pass elements or components as children to a component.",
  },
  {
    id: 44,
    question: "What is React.memo?",
    answer:
      "React.memo is a higher-order component that memoizes a component to prevent unnecessary re-renders.",
  },
  {
    id: 45,
    question: "What is the difference between React.memo and useMemo?",
    answer:
      "React.memo is used to memoize a component, while useMemo is used to memoize a value or computation.",
  },
];

export default data;
