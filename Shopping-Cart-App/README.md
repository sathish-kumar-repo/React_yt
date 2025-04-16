# What is useContext?

useContext is a React hook for accessing shared values across components
without manually passing props through each level.

## Create a Context

import {createContext} from 'react';

export const cartContext = createContext();

## Provide the Context

```html
<cartContext. Provider value={value}>
<child/>
<child/>
<child/>
</cartContext. Provider>
```

## Consume the Context

import { cartContext } from "./cartContext";
const { cart } = useContext(cartContext);

# Additional Package

npm i react-router-dom
