import { ChangeEvent, useState } from "react";
import Input from "@/components/atoms/inputs/Input";
import SelectWithLabel from "@/components/organisms/SelectWithLabel";
import ValidationInput from "@/components/atoms/inputs/ValidationInput";
import InputWithLabel from "@/components/organisms/InputWithLabel";
import SearchInput from "@/components/atoms/inputs/SearchInput";
import BasicButton from "@/components/atoms/buttons/BasicButton";
import TinyButton from "@/components/atoms/buttons/TinyButton";
import LikeButton from "@/components/atoms/buttons/LikeButton";
import LikeWithCount from "@/components/organisms/LikeWithCount";
import Badge from "@/components/atoms/badge/Badge";
import GoalText from "@/components/atoms/goal/GoalText";

const Home = () => {
	const [isLike, setIsLike] = useState(false);

	const [inputTest, setInputTest] = useState("");
	const [errorTest, setErrorTest] = useState(false);

	function onChangeEmailTest(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		setInputTest(e.target.value);
		setErrorTest(true); //test
		if (e.target.value.length >= 5) {
			setErrorTest(false);
		}
	}

	return (
		<>
			<div className="card shadow bg-bg-1">
				<div className="card-body">
					<h2 className="card-title">no border with shadow</h2>
					<p>Rerum reiciendis beatae tenetur excepturi</p>
				</div>
			</div>
			<div className="card shadow-lg">
				<div className="card-body">
					<h2 className="card-title">no border with shadow</h2>
					<p>Rerum reiciendis beatae tenetur excepturi</p>
				</div>
			</div>
			<br />
			<br />
			<p>basic button</p>
			<BasicButton type="button" onClick={() => {}} width={true} style="primary">
				primary button
			</BasicButton>
			<BasicButton type="button" onClick={() => {}} width={true} style="bg">
				bg button
			</BasicButton>
			<BasicButton type="button" onClick={() => {}} width={false} style="deactivated" deactivated={true}>
				deactivated button
			</BasicButton>
			<BasicButton type="button" onClick={() => {}} width={false} style="gray">
				gray button
			</BasicButton>
			<br />
			<br />
			<p>tiny button</p>
			<TinyButton type="button" onClick={() => {}} style="primary">
				tiny
			</TinyButton>
			<TinyButton type="button" onClick={() => {}} style="bg">
				tiny button
			</TinyButton>
			<TinyButton type="button" onClick={() => {}} style="deactivated" deactivated={true}>
				deactivated
			</TinyButton>
			<TinyButton type="button" onClick={() => {}} style="gray" deactivated={false}>
				gray
			</TinyButton>
			<br />
			<br />
			<p>basic input</p>
			<Input type="text" name="test" id="1" value="" placeholder="test" onChange={() => {}} />
			<br />
			<br />
			<p>search input</p>
			<SearchInput
				name="search"
				id="search"
				value=""
				onChange={() => {}}
				onClick={() => {
					console.log("hello");
				}}
			/>
			<br />
			<br />
			<p>validation input</p>
			{/* // ********************** */}
			<ValidationInput
				type="text"
				name="test"
				id="1"
				value={inputTest}
				placeholder="test"
				isError={errorTest}
				errorMessage="message test"
				onChange={onChangeEmailTest}
			/>
			<br />
			<br />
			<p>validation input + label</p>
			<InputWithLabel
				type="text"
				name="test"
				id="label1"
				value="입력이 안되도 놀라지 마세용"
				placeholder="test"
				isError={false}
				errorMessage="message test"
				onChange={() => {}}
				label="label test"
				htmlFor="label1"
			/>
			<br />
			<br />
			<p>select box</p>
			<select className="select select-bordered max-w-xs">
				<option disabled selected>
					선택
				</option>
				<option>test option 1</option>
				<option>test option 2</option>
			</select>
			<br />
			<br />
			<p>select box + label</p>
			<SelectWithLabel
				name="test"
				id="label2"
				defaultValue="선택"
				label="select label"
				htmlFor="label2"
				onChange={() => {}}
			>
				<option disabled>선택</option>
				<option>test option 1</option>
				<option>test option 2</option>
			</SelectWithLabel>
			<LikeButton
				isLike={isLike}
				onClick={() => {
					setIsLike(!isLike);
				}}
			/>
			<LikeWithCount
				isLike={isLike}
				onClick={() => {
					setIsLike(!isLike);
				}}
				count={13}
			/>
			<Badge text="쌀국수" color="gray" />
			<Badge text="목표" color="primary2" />
			<Badge text="부족" color="systemError" />
			<Badge text="충분" color="systemSuccess" />
			<br />
			<GoalText goal="균형잡힌 식단 (탄·단·지 밸런스)" />

			<h1>서브페이지 타이틀</h1>
			<h2>36px 타이틀</h2>
			<h3>30px 타이틀</h3>
			<h4>24px 타이틀</h4>
		</>
	);
};

export default Home;
