import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
import { PostDetails } from "./details"
import { NotFound } from "./notFound"

const CreateRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/details" element={<PostDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export { CreateRoutes }