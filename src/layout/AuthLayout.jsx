import { Route, Routes } from "react-router-dom";
import routes from "../routes";


export function AuthLayout() {
    return (
        <div className="w-full h-full">
            <Routes>
                {routes.map(
                    ({ layout, pages }) =>
                        layout === "auth" &&
                        pages.map(({ element, path }, index) => (
                            <Route key={index} path={path} element={element} />
                        ))
                )}
            </Routes>
        </div>
    )
}

export default AuthLayout
