import Header from './components/organism/Header'
import Body from './components/organism/Body'
import { RouterProvider } from 'react-router-dom'
import { router } from "./routes"

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Header />
      <Body />
    </>
  )
}

export default App
