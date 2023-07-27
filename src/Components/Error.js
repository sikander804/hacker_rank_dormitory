import React from 'react';

function Error({isVerified}) {
	return !isVerified.studentVerified ? (
	<div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
		{`Sorry, ${isVerified.studentName} is not a verified student!`}
		</div>
	) : isVerified.studentVerified && !isVerified.studentValidity && (
		<div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">
		{`Sorry, ${isVerified.studentName}'s validity has Expired!`}
		</div>
	)
}

export default Error;
