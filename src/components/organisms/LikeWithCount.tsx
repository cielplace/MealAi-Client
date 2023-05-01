import LikeButton, { LikeButtonProps } from "../atoms/buttons/LikeButton";

interface LikeWithCountProps extends LikeButtonProps {
	count: number;
}

const LikeWithCount = ({ isLike, onClick, count }: LikeWithCountProps) => {
	return (
		<div className="h-10 px-3 py-2 rounded-lg bg-bg-2 flex items-center gap-2 w-min">
			<LikeButton isLike={isLike} onClick={onClick} />
			<p className="text-base font-semibold text-gray-4">{count}</p>
		</div>
	);
};

export default LikeWithCount;
