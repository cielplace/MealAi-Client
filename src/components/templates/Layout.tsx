import { Outlet } from "react-router-dom";
import styled from "styled-components";
import TopButton from "../atoms/buttons/TopButton";
import Footer from "./Footer";
import Header from "./Header";

// styled
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Page = styled.div`
	margin: 90px auto 120px auto;
	width: 100%;
	flex: 1;
`;

const Layout = () => {
	return (
		<>
			<Header />
			<TopButton />
			<Wrapper>
				<Page>
					<Outlet />
				</Page>
				<Footer />
			</Wrapper>
		</>
	);
};

export default Layout;
