import { RouterProvider } from 'react-router-dom'
import { router } from "./routes"

function App() {
  return (
    <div className='min-w-fit max-w-[1999px]'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
