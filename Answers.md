1. What problem does the context API help solve?

  Context API allows components to share states easier than props drilling. States will becomes easier to maintain.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    'Action' notify to Redux that there will be a state change.
    'Reducer' takes in an initial state and action, then return a new state base on the action.
    'store' is where state live in Redux

    The store is known as a 'single source of truth' in a redux application because it is the only place that the state lives.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Application level state is a state that is widely used by many components in our app. Component state are states that are needed by child components that are nested inside that components.




4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    Redux-thunk takes in the action-creators before it gets to the state. Redux thunk is a middleware that does something to the action creators and pass it back to the reducer function.


5. What is your favorite state management system you've learned and this sprint? Please explain why!
    I don't have a reference between Redux and Context API just because I haven't been exposed to them enough. I will continue to utilize both of them until I find out which one is superior.