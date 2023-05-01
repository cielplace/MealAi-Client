import { ChangeEvent, forwardRef } from "react";

export interface InputProps {
	type: string;
	name: string;
	id: string;
	value?: string;
	placeholder: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (
	{ type, name, id, value, placeholder, onChange }: InputProps,
	ref: React.LegacyRef<HTMLInputElement>
) => {
	return (
		<input
			type={type}
			name={name}
			id={id}
			value={value}
			placeholder={placeholder}
			onChange={onChange}
			ref={ref}
			className="input input-bordered w-full"
		/>
	);
};

export default forwardRef(Input);
