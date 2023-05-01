import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/logo.svg";

interface MenuObjProps {
	name: string;
	path: string;
}

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	const menuObj: MenuObjProps[] = [
		{
			name: "식단AI분석",
			path: "/",
		},
		{
			name: "식단톡",
			path: "/",
		},
	];

	return (
		<div className="flex flex-row w-full h-90 gap-12 items-center bg-white border-solid border-b border-gray-7 shadow shadow-gray-8 z-10 fixed top-0">
			<Link to="/">
				<img src={Logo} width="115" height="27" className="ml-20" />
			</Link>
			{menuObj.map(({ name, path }: MenuObjProps) => (
				<Link to={path} key={path}>
					<p key={name} className="text-gray-1 font-bold text-xl">
						{name}
					</p>
				</Link>
			))}
			{isLoggedIn ? (
				<div className="flex flex-row ml-auto mr-20 gap-10 text-base text-gray-6">
					<Link to="/">
						<p>마이페이지</p>
					</Link>
					<Link to="/">
						<p>식단일지</p>
					</Link>
					<Link to="/" onClick={handleLogout}>
						<p>로그아웃</p>
					</Link>
				</div>
			) : (
				<div className="flex flex-row ml-auto mr-20 gap-10 text-base text-gray-6">
					<Link to="/">
						<p>로그인</p>
					</Link>
					<Link to="/">
						<p>회원가입</p>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Header;
