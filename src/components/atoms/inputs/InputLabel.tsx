export interface InputLabelProps {
	label: string;
	htmlFor: string;
}

const InputLabel = ({ label, htmlFor }: InputLabelProps) => {
	return (
		<div className="mb-2">
			<label htmlFor={htmlFor} className="text-base font-semibold text-gray-5 ">
				{label}
			</label>
		</div>
	);
};

export default InputLabel;
