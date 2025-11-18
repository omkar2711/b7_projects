- React, Vite, Tailwind CSS
- JSX, Virtual DOM, Diffing Process
- Class, function
- React LifeCycle Methods
- Component, Props, States
- Hooks : useState and UseEffect



Virtual DOM:

- 1. Render Phase 
- 2. Diffing Phase : It compares the new virtual DOM with the previous one (diffing algorithm)
- 3. Reconciliation Phase : Updates only those parts in the real DOM that have changed.

Class Based Component vs Function Based Component

React LifeCycle Methods(Component)
    - Mounting
        - constructor
        - getDerivedStateFromProps
        - render() //Pure Function
        - ComponentDidMount()
    - Updating
        - getDerivedStateFromProps()
        - ShouldComponentUpdate()
        - render()
        - getSnapShotBeforeUpdate()
        - componentDidUpdate(prevProps, prevState, snapShot)
    - Unmounting
        - ComponentWillUnmount()



State

    - Class based (using 'this.state' -> setState())
    - Functional based (using ' [count, setCount]  =  useState' Hook)

State vs Props

- useState (Hooks)

Lifting state up
- React Context api 
    - Create Context
    - Provide Context (Provider)
    - Consume Context (useContext)

state -> props -> prop drilling (X) -> useContext (React Context Api) -> Redux


Hooks
    - Always use hook at the top level (not inside loops, conditions, or nested functions)
    - Only call Hooks from react functions

Types of Hooks:
    - useState();      
    const [count , setCount] = useState(<initial value>); -> async
    - useEffect(() =>{},[count]); // to perform side effects in functional components
    - useContext()
    - useRef()
    - useCallback() and useMemo()
    - Custom hook use

    


Redux : Redux a lightweight javascript library that provides a pattern and structure for managing application state.
-- Global State management library


count = 5
Redux principle:
    1. Single source of truth
    2. State is read only : action -> type (increment)
    3. Changes are made with pure functions : Reducers(prevState , action) returns newState -> predictable behavior


Redux Benifits:
    1. Predictable State management
    2. Improved Maintainability
    3. Time-Travel Debugging
    4. Scalibility