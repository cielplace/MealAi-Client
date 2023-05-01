import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@/components/templates/Layout";

const Home = lazy(() => import("@/pages/Home"));
const Profile = lazy(() => import("@/pages/Profile"));
const SignUp = lazy(() => import("@/pages/SignUp"));

const routes = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/signup",
				element: <SignUp />,
			},
			{
				path: "*",
				element: <div>404 example</div>,
			},
		],
	},
]);

// TODO 로딩중 컴포넌트 (나중에 만들어야함)
const AppRouter = () => {
	return (
		<React.Fragment>
			<Suspense fallback={<div>로딩중 </div>}>
				<RouterProvider router={routes} />
			</Suspense>
		</React.Fragment>
	);
};

export default AppRouter;
