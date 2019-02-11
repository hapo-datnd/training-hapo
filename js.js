

function addSkill(myElement, myClass,myClassParent, length) {
	let newParentClass = document.getElementsByClassName(myClassParent);
	let newClass = newParentClass[0].getElementsByClassName(myClass);
	let newAdd = newClass[length].outerHTML += myElement;
	// body...
}

function countGraphic(myClass,myGraphic) {
	let count = document.getElementsByClassName(myClass);
	let x = count[0].getElementsByClassName(myGraphic);
	let length = x.length;
	return(length);
	// body...
}

// var myClass = "pro-skill";
// var a = countSkill(myClass);


let myElement1 = `<div class="pro-skill">
							<div class="graphic">
								<svg width="100%" height="100%" viewBox="0 0 100 100" class="donut">
									<circle class="donut-hole" cx="50" cy="50" r="47.5"></circle>
								  	<circle class="donut-ring" cx="50" cy="50" r="47.5"></circle>
								  	<circle class="donut-segment-1" cx="50" cy="50" r="47.5"></circle>
								  	<text
	  								x="40" y="55">75%</text>
								</svg>
							</div>
							<p class="skill-1-p">skill</p>
						</div>`;

let myElement2 = `<div class="pro-skill graphic-0">
							<div class="graphic">
								<svg width="100%" height="100%" viewBox="0 0 100 100" class="donut">
									<circle class="donut-hole" cx="50" cy="50" r="47.5"></circle>
								  	<circle class="donut-ring" cx="50" cy="50" r="47.5"></circle>
								  	<circle class="donut-segment-3" cx="50" cy="50" r="47.5"></circle>
								  	<text
	  								x="40" y="55">50%</text>
								</svg>
							</div>
							<p class="skill-1-p">my sql</p>
						</div>`;
let myElement3 =  `<div class="pro-skill graphic-4">
							<div class="graphic">
								<svg width="100%" height="100%" viewBox="0 0 100 100" class="donut">
									<circle class="donut-hole" cx="50" cy="50" r="47.5"></circle>
								  	<circle class="donut-ring" cx="50" cy="50" r="47.5"></circle>
								  	<circle class="donut-segment-3" cx="50" cy="50" r="47.5"></circle>
								  	<text
	  								x="40" y="55">50%</text>
								</svg>
							</div>
							<p class="skill-1-p">my sql</p>
						</div>`;







function addButton() {
	let numberPro_skill_1 = countGraphic("skill-1","pro-skill");
	let numberOfGraphic_0Skill1 = countGraphic("skill-1","graphic-0");
	let numberPro_skill_2 = countGraphic("skill-2","pro-skill");
	let numberPro_skill_3 = countGraphic("skill-3","pro-skill");
	let countPro_skill = document.getElementsByClassName("pro-skill");
	let a = countPro_skill.length;
	let countGraphic_0 = document.getElementsByClassName("graphic-0");
	let b = countGraphic_0.length;
	let numberOfPro_skill = a - b;

	if (numberOfPro_skill%3===0) {
		let newAdd = addSkill(myElement1,"pro-skill","skill-1",numberPro_skill_1-numberOfGraphic_0Skill1-1);
	}

	if (numberOfPro_skill%3===1) {
		let newAdd = addSkill(myElement1,"pro-skill","skill-2",numberPro_skill_2-1);
	}

	if (numberOfPro_skill%3===2) {
		if ((numberPro_skill_3%2)==1) {
			let newAdd = addSkill(myElement2,"pro-skill","skill-2",numberPro_skill_2-1);
			let newAdd1 = addSkill(myElement3,"pro-skill","skill-3",numberPro_skill_3-1);
		} 

		if ((numberPro_skill_3%2)==0) {
			let newAdd = addSkill(myElement2,"pro-skill","skill-1",numberPro_skill_1-1);
			let newAdd1 = addSkill(myElement3,"pro-skill","skill-3",numberPro_skill_3-1);
		}
	}
}

let myElement4 = `<div class="person-skill">
						<h4>team work</h4>
						<div class="all">
							<div class="percent percent-1">
								
							</div>
							<p class="percent-text-1">65%</p>
						</div>
					</div>`;

function addButton2() {
	let numberPerson_skill = countGraphic("personal-skill","person-skill");
	let newAdd = addSkill(myElement4,"person-skill","personal-skill",numberPerson_skill-1);
	// body...
}

let myElement5 = `<div class="main-3 flex-row">
							<img class="img-1" src="icon/Polygon.png">
							<div class="main-3-center">
								
							</div>
							<div class="main-3-box main-3-box-1 flex-column">
								<h3><span class="year">(2010 - 2019)</span> abc company</h3>
								<h4>Developer</h4>
								<p class="para">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
							</div>
						</div>`;

function addButton3() {
	let numberWork_exp = countGraphic("main-2-left","main-3");
	let newAdd = addSkill(myElement5,"main-3","main-2-left",numberWork_exp-1);
	// body...
}

let myElement6 = `<div class="main-3 flex-row">
							<img class="img-1" src="icon/Polygon.png">
							<div class="main-3-center">
								
							</div>
							<div class="main-3-box main-3-box-1 flex-column">
								<h3><span class="year">(2010 - 2019)</span> abc company</h3>
								<h4>Developer</h4>
								<p class="para">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
							</div>
						</div>`;

function addButton4() {
	let numberEducation = countGraphic("main-2-right","main-3");
	let newAdd = addSkill(myElement6,"main-3","main-2-right",numberEducation-1);
	// body...
}

function addButton5() {
	let numberColumn1 = countGraphic("column-1","show-box");
	let numberColumn2 = countGraphic("column-2","show-box");
	let numberColumn3 = countGraphic("column-3","show-box");
	let numberColumn4 = countGraphic("column-4","show-box");
	let sumShowBox = numberColumn4+numberColumn3+numberColumn2+numberColumn1;

	if (sumShowBox%10==0) {
		let showBox = "show-box-1";
		let box = "box-1-1";
		let img = "project.png";
		let myElement8 = `<div class=" show-box `+showBox+` `+box+` flex-center flex-column">
						<img src="image/`+img+`">
					</div>`;
		let newAdd = addSkill(myElement8,"show-box","column-1",numberColumn1-1);
	}

	if (sumShowBox%10==4) {
		let showBox = "show-box-1";
		let box = "box-1-2";
		let img = "project.png";
		let myElement8 = `<div class=" show-box `+showBox+` `+box+` flex-center flex-column">
						<img src="image/`+img+`">
					</div>`;
		let newAdd = addSkill(myElement8,"show-box","column-1",numberColumn1-1);
	}

	if (sumShowBox%10==7) {
		let showBox = "show-box-1";
		let box = "box-1-3";
		let img = "project.png";
		let myElement8 = `<div class=" show-box `+showBox+` `+box+` flex-center flex-column">
						<img src="image/`+img+`">
					</div>`;
		let newAdd = addSkill(myElement8,"show-box","column-1",numberColumn1-1);
	}

	if (sumShowBox%10==1) {
		let showBox = "show-box-2";
		let box = "box-2-1";
		let img = "project2.png";
		let myElement8 = `<div class=" show-box `+showBox+` `+box+` flex-center flex-column">
						<img src="image/`+img+`">
					</div>`;
		let newAdd = addSkill(myElement8,"show-box","column-2",numberColumn2-1);
	}

	if (sumShowBox%10==8) {
		let showBox = "show-box-1";
		let box = "box-1-2";
		let img = "project.png";
		let myElement8 = `<div class=" show-box `+showBox+` `+box+` flex-center flex-column">
						<img src="image/`+img+`">
					</div>`;
		let newAdd = addSkill(myElement8,"show-box","column-2",numberColumn2-1);
	}

	if (sumShowBox%10==2) {
		let showBox = "show-box-1";
		let box = "box-1-4";
		let img = "project.png";
		let myElement8 = `<div class=" show-box `+showBox+` `+box+` flex-center flex-column">
						<img src="image/`+img+`">
					</div>`;
		let newAdd = addSkill(myElement8,"show-box","column-3",numberColumn3-1);
	}

	if (sumShowBox%10==5) {
		let showBox = "show-box-3";
		let box = "box-2-2";
		let img = "project.png";
		let myElement8 = `<div class=" show-box `+showBox+` `+box+` flex-center flex-column">
						<img src="image/`+img+`">
					</div>`;
		let newAdd = addSkill(myElement8,"show-box","column-3",numberColumn3-1);
	}

	if (sumShowBox%10==3) {
		let showBox = "show-box-1";
		let box = "box-1-3";
		let img = "project.png";
		let myElement8 = `<div class=" show-box `+showBox+` `+box+` flex-center flex-column">
						<img src="image/`+img+`">
					</div>`;
		let newAdd = addSkill(myElement8,"show-box","column-4",numberColumn4-1);
	}

	if (sumShowBox%10==6) {
		let showBox = "show-box-1";
		let box = "box-1-5";
		let img = "project2.png";
		let myElement8 = `<div class=" show-box `+showBox+` `+box+` flex-center flex-column">
						<img src="image/`+img+`">
					</div>`;
		let newAdd = addSkill(myElement8,"show-box","column-4",numberColumn4-1);
	}

	if (sumShowBox%10==9) {
		let showBox = "show-box-1";
		let box = "box-1-1";
		let img = "project.png";
		let myElement8 = `<div class=" show-box `+showBox+` `+box+` flex-center flex-column">
						<img src="image/`+img+`">
					</div>`;
		let newAdd = addSkill(myElement8,"show-box","column-4",numberColumn4-1);
	}
}				





let myElement7 = `<div class="slide">
						<img src="image/avafooter.png">
						<div class="quote flex-row">
							<div class="quote-1-1">
								<span class="quote-1">“</span><span class="p2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in</span>
								<span class="quote-2">”</span>
							</div>
						</div>
					</div>	`;


$(document).on('ready', function() {
  			$(".slick").slick({
		        dots: true,
		        infinite: true,
		        slidesToShow: 1,
		        autoplay: true,
		        autoplaySpeed: 2000,
		        slidesToScroll: 1,
		        nextArrow: false,
		        prevArrow: false,
		        nextArrow: $('.next'),
		        prevArrow: $('.prev')
        		
     		 });
  		});

function addButton6() {

	$(".slick").slick('unslick');

	let numberSlide = countGraphic("slick","slide");
	let newAdd = addSkill(myElement7,"slide","slick",numberSlide-1);
	
	$(".slick").slick({
		        dots: true,
		        infinite: true,
		        slidesToShow: 1,
		        autoplay: true,
		        autoplaySpeed: 2000,
		        slidesToScroll: 1,
		        nextArrow: false,
		        prevArrow: false,
		        nextArrow: $('.next'),
		        prevArrow: $('.prev')
        		
     		 });
	// body...
}
		