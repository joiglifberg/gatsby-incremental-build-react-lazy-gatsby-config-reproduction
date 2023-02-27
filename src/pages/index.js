import * as React from "react"

const MyComponent = React.lazy(() => import('../MyComponent.js'))

const IndexPage = () => {
  return (
    <main>
      <MyComponent />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
