import useRouterElement from './router'

function App() {
    const routerElements = useRouterElement()
    return <div>{routerElements}</div>
}

export default App
