import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/product/Product";
import Profile from "./pages/profile/Profile";

const router = createBrowserRouter([
    { path:"/", element:<Home />},
    { path:"/product", element:<Product />},
    { path:"/profile", element:<Profile />}
    
]);

export default router;