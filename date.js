const dateContainer = document.querySelector(".js-date");
const dateTitle = dateContainer.querySelector("h2");
	

	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const date = today.getDate();
	const day = today.getDay();

	function monthName(month){
		if(month === 1){
			return ("JAN");
		} else if (month === 2){
			return ("FEB");
		} else if (month === 3){
			return ("MAR");
		} else if (month === 4){
			return ("APR");
		} else if (month === 5){
			return ("MAY");
		} else if (month === 6){
			return ("JUN");
		} else if (month === 7){
			return ("JUL");
		} else if (month === 8){
			return ("AUG");
		} else if (month === 9){
			return ("SEP");
		} else if (month === 10){
			return ("OCT");
		} else if (month === 11){
			return ("NOV");
		} else if (month === 12){
			return ("DEC");
		}
	}

	function dayName(day){
		if(day === 1){
			return ("MON");
		} else if (day === 2){
			return ("TUE");
		} else if (day === 3){
			return ("WED");
		} else if (day === 4){
			return ("THUR");
		} else if (day === 5){
			return ("FRI");
		} else if (day === 6){
			return ("SAT");
		} else if (day === 0){
			return ("SUN");
		}
	}

	function localDate(){
		const realMonth = monthName(month);
		const realDate = date;
		const realDay = dayName(day);

		dateTitle.innerText = `${realMonth}\n${realDate}\n${realDay}`	
	}

	function init(){
		localDate();
	}
	init();
