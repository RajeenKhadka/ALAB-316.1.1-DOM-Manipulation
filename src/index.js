//import "./styles.css";

//======================Part-1===================================//
var mainEl = document.getElementsByTagName("main");
console.log(mainEl[0]);

mainEl[0].style.backgroundColor = 'var(--main-bg)';

mainEl[0].innerHTML = "<h1>DOM Manipulation</h1>";

mainEl[0].classList.add("flex-ctr");


//======================Part-2===================================//

var topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add("flex-around");

//======================Part-3===================================//

var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

menuLinks.forEach((element => {
    let topLinks = document.createElement("a");

    topLinks.setAttribute("href", element.href);

    topLinks.textContent = element.text;

    topMenuEl.appendChild(topLinks);
}))

