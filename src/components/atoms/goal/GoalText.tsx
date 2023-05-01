import Badge from "../badge/Badge";

interface GoalTextProps {
	goal: string;
}

const GoalText = ({ goal }: GoalTextProps) => {
	return (
		<div className="max-w-max">
			<Badge text="목표" color="primary2" />
			<span className="text-base font-semibold text-gray-4 ml-2">{goal}</span>
		</div>
	);
};

export default GoalText;

/* 균형잡힌 식단 (탄·단·지 밸런스) */

// position: absolute;
// left: 19.76%;
// right: 0%;
// top: 15.38%;
// bottom: 11.54%;

// font-family: 'Pretendard';
// font-style: normal;
// font-weight: 700;
// font-size: 16px;
// line-height: 19px;
// /* identical to box height */

// /* gray 4 */

// color: #6B6A67;
