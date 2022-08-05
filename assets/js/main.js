const menuNavbar = document.querySelector('.navbar');
const menuInner = menuNavbar.querySelector('.menu-inner');
const menuArrow = menuNavbar.querySelector('.menu-arrow');
const menuBurger = document.querySelector('.burger');
const closeNav = document.querySelector('.close-nav');
const overlay = document.querySelector('.headoverlay');
const search = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.search-icon');
const closeSearchbar = document.querySelector('#closeSearch');
const eduFilter = document.querySelector('.edu-filter');
const eduOpen = document.querySelector('#openEdu');
const eduClose = document.querySelector('#closeEdu');






// Show Hide Navbar Menu Function
const toggleMenu = () => {
	menuNavbar.classList.toggle('active');
	overlay.classList.toggle('active');
	document.querySelector('body').style.overflow="hidden"
};

const closeMenu = () => {
	menuNavbar.classList.remove('active');
	overlay.classList.remove('active');
	document.querySelector('body').style.overflow="auto"
};


// Hide Mobile Submenu Function
const hideSubMenu = () => {
	subMenu.style.animation = 'slideRight 0.5s ease forwards';
	setTimeout(() => {
		subMenu.classList.remove('active');
	}, 300);

	menuNavbar.querySelector('.menu-title').textContent = '';
	menuNavbar.querySelector('.menu-header').classList.remove('active');
};

// Show Mobile Submenu Function
const showSubMenu = (children) => {
	subMenu = children.querySelector('.submenu');
	subMenu.classList.add('active');
	subMenu.style.animation = 'slideLeft 0.5s ease forwards';
	const menuTitle = children.querySelector('i').parentNode.childNodes[0].textContent;
	menuNavbar.querySelector('.menu-title').textContent = menuTitle;
	menuNavbar.querySelector('.menu-header').classList.add('active');
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
	if (!menuNavbar.classList.contains('active')) {
		return;
	}
	if (e.target.closest('.menu-dropdown')) {
		const children = e.target.closest('.menu-dropdown');
		showSubMenu(children);
	}
};

// Fixed Resize Window Function
const resizeWindow = () => {
	if (window.innerWidth > 991) {
		if (menuNavbar.classList.contains('active')) {
			toggleMenu();
		}
	}
};

// Initialize Event Listeners
menuBurger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
menuArrow.addEventListener('click', hideSubMenu);
menuInner.addEventListener('click', toggleSubMenu);
closeNav.addEventListener('click', closeMenu);
window.addEventListener('resize', resizeWindow);


const openSearch = () => {
	search.classList.toggle('active');
};

const closeSearch = () => {
	search.classList.remove('active');
};

searchIcon.addEventListener('click', openSearch);
closeSearchbar.addEventListener('click', closeSearch);



const openeduFilter= () => {
	eduFilter.classList.toggle('active');
	document.querySelector('body').style.overflow="hidden"

};

const closeeduFilter = () => {
	eduFilter.classList.remove('active');
	document.querySelector('body').style.overflow="auto"

};

eduOpen.addEventListener('click', openeduFilter);
eduClose.addEventListener('click', closeeduFilter);