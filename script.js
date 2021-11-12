class MobileNavbar{
	constructor(mobileMenu, navList, navLinks, button){
		this.mobileMenu = document.querySelector(mobileMenu);
		this.navList = document.querySelector(navList);
		this.navLinks = document.querySelectorAll(navLinks);
		this.button = document.querySelector(button);
		this.activeClass = "active";

		this.handleClick_mobile = this.handleClick_mobile.bind(this); /*usar a função bind para o this referenciaar a função em vez do botão*/
		
	}

	animateLinks(){
		this.navLinks.forEach((link, index) => {  
			link.style.animation
				? (link.style.animation ="")    /* ("?" e ":" são operadores ternários, semelhantes ao if else,"?-Se tiver" ":-Se não") nesse caso se tiver a propriedade animation tira, para ela sumir e se não tivcer coloca para ela aaparecer*/
				: (link.style.animation =`navLinkFade 0.5s ease forwards ${index/ 7 + 0.3}s`) /*usando o forEach temos acesso ao index do elemento e podemos animar cada elemendo dividindo esse index e aplicando um delay*/
		});
	}

	handleClick_mobile(){
		this.navList.classList.toggle(this.activeClass);
		this.mobileMenu.classList.toggle(this.activeClass);
		this.animateLinks();
	}

	addClickEvent(){ 
		this.mobileMenu.addEventListener("click", this.handleClick_mobile);
		this.button.addEventListener("click_button", this.handleClick_button);
	}

	init(){
		if(this.mobileMenu){
			this.addClickEvent();
			
			return this.mobileMenu
			
		}
		if(this.button){
			this.addClickEvent();
			
			return this.button
		}
	}
}
  
const mobileNavbar = new MobileNavbar(
	".mobile-menu",
	".nav-list",
	".nav-list li",
	".black_hole_button",
);

mobileNavbar.init();

function handleClick_button() {
		console.log("click");
		this.navList.classList.toggle(this.activeClass);
		this.mobileMenu.classList.toggle(this.activeClass);
		
}
