import React from "react";
import { FallbackProps, useErrorBoundary } from "react-error-boundary";

const Fallback: React.FC<FallbackProps> = ({ error }) => {
	const { resetBoundary } = useErrorBoundary();
	return (
		<section>
			<header>
				<h3>에러남!</h3>
			</header>
			<div>
				<p>
					<strong>Error:</strong> {error.toString()}
				</p>
				<p>
					<pre style={{ color: "red" }}>{error.message}</pre>
					{/* TODO: Stacktrace 찍기 */}
					<strong>Stacktrace:</strong>
					<button onClick={resetBoundary}>다시 시도해보세용</button>
				</p>
			</div>
		</section>
	);
};

export default Fallback;
