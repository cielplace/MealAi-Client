import React, { useState, ErrorInfo } from "react";

interface Props {
	children?: React.ReactNode;
	fallback: React.ElementType<{ error: Error | null }>;
	onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

const ErrorBoundary: React.FC<Props> = ({ children, fallback: FallbackComponent, onError }) => {
	const [hasError, setHasError] = useState(false);
	const [errorState, setErrorState] = useState<Error | null>(null);

	const handleCatch = (error: Error, errorInfo: ErrorInfo) => {
		console.log("Caught an error:", error, errorInfo);
		setErrorState(error);
		setHasError(true);
		if (onError) {
			onError(error, errorInfo);
		}
	};

	if (hasError) {
		return <FallbackComponent error={errorState} />;
	}

	return (
		<React.Fragment>
			{children}
			<ErrorBoundary fallback={FallbackComponent} onError={handleCatch} />
		</React.Fragment>
	);
};

export default ErrorBoundary;

// TODO 커스텀 에러 바운더리 컴포넌트 입니다. 현재는 사용 x
// TODO 나중에 커스텀 하게 된다면 react-error-boundary 모듈제거 후 직접 바운딩 할 에러들을 커스텀 해나가면 됩니다.
