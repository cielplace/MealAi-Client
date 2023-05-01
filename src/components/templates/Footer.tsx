import Logo from "@/assets/logo_white.svg";

const Footer = () => {
	return (
		<div className="w-full h-36 bg-gray-2 py-10 flex justify-center">
			<div className="flex flex-col">
				<div className="flex justify-center">
					<img src={Logo} width="115" height="27" />
				</div>
				<p className="text-white text-sm font-medium mt-3.5">ⓒ 2023 MealAi all rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
