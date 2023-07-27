import React, {useState} from 'react';
import { STUDENTS } from '../studentsList';

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	console.log('### selected',selected)
	return (maxValid >= selected) && (maxValid >= today);
}

function Search({setJoiningDate,setStudentName,studentName,joiningDate,setIsVerified,setResidents,residents}) {
	const handleSubmit = (e) => {
		e.preventDefault()

		const student = STUDENTS.find((st) => {
			if(st.name.toLowerCase() === studentName.toLowerCase()){
				return st;
			}
		})
		// console.log('residents',studentName,joiningDate)
		// return
		if(!student?.name){
			setIsVerified({studentName:studentName,studentVerified:false,studentValidity:false})
			setStudentName('');
			setJoiningDate('');
			return;
		}

		if(student?.name && student?.validityDate){
			const isValidInput = checkValidity(joiningDate, student?.validityDate);
			if(!isValidInput){
				setIsVerified({studentName:studentName,studentVerified:true,studentValidity:false})
				setStudentName('');
		setJoiningDate('');
			}else {
				setIsVerified({studentName:studentName,studentVerified:true,studentValidity:true})
				setResidents([...residents,{name:studentName,joiningDate:joiningDate}])
				setStudentName('');
		setJoiningDate('');
			}
		}
		
		
	}

	return (
		<form onSubmit={handleSubmit}>
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" value={joiningDate} onChange={(e) => setJoiningDate(e.target.value)}/>
				</div>
			</label>
			<button type="submit" data-testid="addBtn" className="small mb-0">Add</button>
		</div>
		</form>
	);
}

export default Search;
