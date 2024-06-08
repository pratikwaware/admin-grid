import { useState } from 'react'
import './App.css'
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import './assets/css/ag-grid-theme-builder.css'
import { Button } from './components/ui/button'
import CustomTable from './components/table/CustomTable';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Button>Click me</Button>
        <CustomTable />
      </div>
    </>
  )
}

export default App
