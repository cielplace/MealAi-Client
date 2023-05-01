import { ReactNode } from "react";
import GetStyle from "@/utils/GetStyle";

interface BasicButtonProps {
	id?: string;
	name?: string;
	type?: "button" | "reset" | "submit";
	children: ReactNode;
	onClick: () => void;
	width: boolean;
	style: string;
	deactivated?: boolean;
}

function getWidth(width: boolean) {
	if (width) {
		return "w-full";
	}
}

const BasicButton = ({ id, name, type, children, onClick, width, style, deactivated }: BasicButtonProps) => {
	if (deactivated) {
		return (
			<button
				className={`btn border-none ${getWidth(width)} ${GetStyle(style)}`}
				id={id}
				name={name}
				type={type}
				onClick={onClick}
				disabled
			>
				{children}
			</button>
		);
	}
	return (
		<button
			className={`btn border-none hover:bg-secondary-1 ${getWidth(width)} ${GetStyle(style)}`}
			id={id}
			name={name}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default BasicButton;
