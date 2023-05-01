interface BadgeProps {
	text: string;
	color: "gray" | "primary2" | "systemError" | "systemSuccess";
}

function getBgColor(color: BadgeProps["color"]) {
	switch (color) {
		case "gray":
			return "bg-gray-1";
		case "primary2":
			return "bg-primary-2";
		case "systemError":
			return "bg-system-error";
		case "systemSuccess":
			return "bg-system-success";
	}
}

const Badge = ({ text, color }: BadgeProps) => {
	return (
		<span
			className={`h-6 px-2 pt-0.5 rounded-lg ${getBgColor(
				color
			)} text-white text-sm font-semibold text-center inline-block`}
		>
			{text}
		</span>
	);
};

export default Badge;
