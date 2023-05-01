import { ReactNode } from "react";

interface RadioButtonProps {
	id?: string;
	name?: string;
	type?: "button" | "reset" | "submit";
	children: ReactNode;
	onClick: () => void;
	width: boolean;
	style: string;
	deactivated?: boolean;
}
