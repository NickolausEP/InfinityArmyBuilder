/*
BUGGY AS HELL - Not sure why, but the return values on these selections don't match their actual values, ex: Swiss Guard sometimes returns no value at all.
*/

function setOptions(chosen, selbox){

	selbox.options.length = 0;
	if (chosen == '') {
		selbox.options[selbox.options.length] = new Option('Select one of the above', ' ');
		setTimeout(setOptions('', document.profselector.myprofile), 5);
	}
	
	// chosen = PanOceania
	if (chosen == "1") {
		selbox.options[selbox.options.length] = new Option('Fusilier', '11');
		selbox.options[selbox.options.length] = new Option('Swiss Guard', '12');
		setTimeout(setOptions('11', document.profselector.myprofile), 5);
	}
	
	// chosen = Military Orders
	if (chosen == "2") {
		selbox.options[selbox.options.length] = new Option('Order Sergeant', '21');
		selbox.options[selbox.options.length] = new Option('K. of the Holy Sepulchre', '22');
		setTimeout(setOptions('21', document.profselector.myprofile), 5);
	}
	
	// chosen = Yu-Jing
	if (chosen == "3") {
		selbox.options[selbox.options.length] = new Option('Zhanshi', '31');
		selbox.options[selbox.options.length] = new Option('Hac Tao', '32');
		setTimeout(setOptions('31', document.profselector.myprofile), 5);
	}
	

	// chosen = PanOceania --> Fusilier
	if (chosen == "11") {
		selbox.options[selbox.options.length] = new Option('FO/DR', '111');
	}
	// chosen = PanOceania --> Swiss Guard
	if (chosen == "12") {
		selbox.options[selbox.options.length] = new Option('ML', '121');
	}
	
	// chosen = Military Orders --> Order Sergeant
	if (chosen == "21") {
		selbox.options[selbox.options.length] = new Option('MSV/MSR', '211');
	}
	// chosen = Military Orders --> Knight of the Holy Sepulchre
	if (chosen == "22") {
		selbox.options[selbox.options.length] = new Option('Spitfire', '221');
	}
	
	// chosen = Yu-Jing --> Zhanshi
	if (chosen == "31") {
		selbox.options[selbox.options.length] = new Option('MSR', '311');
	}
	// chosen = Yu-Jing --> Hac Tao
	if (chosen == "32") {
		selbox.options[selbox.options.length] = new Option('MULTI Rifle', '321');
	}
}

/*
function setStats(tagnum)

	var units = new Array()
	units[0] = new Array("4-4", "12", "12", "10", "12", "0", "0", "1", "2", "T")
	units[1] = new Array("4-4", "12", "14", "12", "13", "4", "3", "2", "2", "2")
	units[2] = new Array("4-4", "13", "12", "11", "12", "1", "0", "1", "2", "T")
	units[3] = new Array("4-4", "20", "13", "12", "13", "2", "3", "2", "2", "2")
*/
