import React from 'react'

function Hello() {
    return (
        <div>
            <h1>Hello, again</h1>
        </div>
    )
}

export const Hellow = () => {

    // With JSX
    return (
        <div>
            <h1>Hello, again 2</h1>
        </div>
    )

    // Without JSX
    return React.createElement('div', {id: 'hello', className: 'dummyclass'} , React.createElement('h1', null, 'Hello, again 3'))
}

export default Hello