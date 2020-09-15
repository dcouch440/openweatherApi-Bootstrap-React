import React from 'react'
import Header from './header/Header'
import PageRouted from './pages/PageRouted'
import useCounter from './globalHooks/useCounter'
function App() {
    const {globalCount} = useCounter()
    return (
        <>
            {globalCount}
            <Header />
            <PageRouted />
        </>
    )
}

export default App