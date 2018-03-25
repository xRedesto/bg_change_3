let button1 = document.querySelector("#menu1");
let button2 = document.querySelector("#menu2");
let button3 = document.querySelector("#menu3");
let button4 = document.querySelector("#menu4");
let button5 = document.querySelector("#menu5");

let backg = document.querySelectorAll("div.back");
let menus = document.querySelectorAll("div.sqr");

let current_back = 0;


function higher(i,o){
	(function  a(){
		if(i>o.getAttribute("n")){
			i--;
			backg[i].style.width  = "100%";
			setTimeout(a,100);
		}
})();
}

function lower(i, o){
	(function  a(){
		if(i<o.getAttribute("n")){
			backg[i].style.width  = "0%";
			i++;
			setTimeout(a,100);
		}
	})();
}


button1.addEventListener('click', function(){
	
	for(let j = current_back;  j<5;j++){
		backg[j].style.width  = "100%";
	}
	
	if(current_back>0){
		let i = current_back;
		higher(i,  this);
	}
	
	menus[current_back].classList.remove("active_menu");
	menus[0].classList.add("active_menu");
	current_back = 0;
});

button2.addEventListener('click', function(){
		
	for(let j = current_back;  j<5;j++){
		backg[j].style.width  = "100%";
	}
	
	if(current_back>1){
		let i = current_back;	
		higher(i,  this);	
	}
	else{
		let i = 0;
		lower(i,this);
	}
	
	menus[current_back].classList.remove("active_menu");
	menus[1].classList.add("active_menu");
	current_back = 1;
});

button3.addEventListener('click', function(){
		
	for(let j = current_back;  j<5;j++){
		backg[j].style.width  = "100%";
	}

	if(current_back>2){
		let i = current_back;
		higher(i,  this);
	}
	else{
		let i = 0;
		lower(i,this);
	}
	
	menus[current_back].classList.remove("active_menu");
	menus[2].classList.add("active_menu");
	current_back = 2;
});

button4.addEventListener('click', function(){
		
	for(let j = current_back;  j<5;j++){
		backg[j].style.width  = "100%";
	}
	
	if(current_back>3){
		let i = current_back;
		higher(i,  this);
	}
	else{
		let i = 0;
		lower(i,this);
	}
	
	menus[current_back].classList.remove("active_menu");
	menus[3].classList.add("active_menu");
	current_back = 3;
});

button5.addEventListener('click', function(){
		
	for(let j = current_back;  j<5;j++){
		backg[j].style.width  = "100%";
	}
		
	let i = 0;
	lower(i,this);
	
	menus[current_back].classList.remove("active_menu");
	menus[4].classList.add("active_menu");
	current_back = 4;
});
