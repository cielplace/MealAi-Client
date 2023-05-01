import TopIcon from "@/assets/icon_top.svg";

function handleMoveToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

const TopButton = () => {
	return (
		<button
			className="w-16 h-16 rounded-full bg-white border border-primary-1 p-5 shadow-lg z-10 fixed bottom-14 right-14 end-14 transition ease-out hover:scale-105 hover:bg-bg-1"
			onClick={() => {
				handleMoveToTop();
			}}
		>
			<img src={TopIcon} />
		</button>
	);
};

export default TopButton;
