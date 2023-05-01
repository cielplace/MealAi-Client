import { InputProps } from "./Input";

export interface ValidationInputProps extends InputProps {
	value: string;
	isError: boolean;
	errorMessage: string;
}

function getBorderColor(isError: boolean, value: string) {
	if (value.length === 0) {
		return "border-gray-7"; // 빈 값
	}
	if (isError) {
		return "border-system-error"; // 유효하지 않은 값
	}
	return "border-system-success"; // 유효한 값
}

function getTextColor(isError: boolean) {
	if (isError) {
		return "text-system-error"; // 유효하지 않은 값
	}
	return "text-system-success"; // 유효한 값
}

const ValidationInput = ({
	type,
	name,
	id,
	value,
	placeholder,
	onChange,
	isError,
	errorMessage,
}: ValidationInputProps) => {
	return (
		<>
			<input
				type={type}
				name={name}
				id={id}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				className={`input input-bordered w-full ${getBorderColor(isError, value)}`}
			/>
			<p className={`text-sm ${getTextColor(isError)}`}>{value.length >= 1 && errorMessage}</p>
		</>
	);
};

export default ValidationInput;
