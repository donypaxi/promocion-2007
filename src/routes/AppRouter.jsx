import { Route, Routes } from "react-router-dom"
import { HomePage } from "../page/landinpage/HomePage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>            
        </Routes>
    </>
  )
}
