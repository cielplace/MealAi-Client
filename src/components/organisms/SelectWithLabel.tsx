import { ChangeEvent, ReactNode } from "react";
import InputLabel, { InputLabelProps } from "../atoms/inputs/InputLabel";

interface SelectProps extends InputLabelProps {
	name: string;
	id: string;
	defaultValue?: string;
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	children: ReactNode;
}

const SelectWithLabel = ({ name, id, defaultValue, onChange, children, label, htmlFor }: SelectProps) => {
	return (
		<div>
			<InputLabel label={label} htmlFor={htmlFor} />
			<select
				name={name}
				id={id}
				defaultValue={defaultValue}
				onChange={onChange}
				className="select select-bordered min-w-full"
			>
				{children}
			</select>
		</div>
	);
};

export default SelectWithLabel;
