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
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

menuLinks.forEach((element => {
    let topLinks = document.createElement("a");

    topLinks.setAttribute("href", element.href);

    topLinks.textContent = element.text;

    topMenuEl.appendChild(topLinks);
}))

//======================DOM-Part2-Part3===================================//

var subMenuEl = document.getElementById("sub-menu");

//console.log("hello",subMenuEl);

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around');

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';

//======================DOM-Part2-Part4===================================//

var topMenuLinks = topMenuEl.querySelectorAll('a');
//console.log(topMenuLinks);

topMenuEl.addEventListener('click', (evt) => {
    evt.preventDefault();

    if(evt.target.localName !== 'a'){
        return;
    }

    //removes the active class from the a tags on each time the loop runs
    //
    topMenuLinks.forEach((element) => {
        element.classList.remove('active');
    });

    evt.target.classList.add('active');

    console.log(evt.target.textContent);

    

    
    //console.log(topMenuLinks);

    // if(evt.target.classList.contains('active')){
    //     evt.target.classList.remove('active');
    // }else{
    //     evt.target.classList.add('active');
    // }
});

// function theAFunction(evt){

//     topMenuLinks.target.localName === 'a'
//     console.log(topMenuLinks.target.localName);
    

// }

// topMenuLinks.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     console.log("key pressed");
// });

// topMenuLinks.forEach((element) => {
//     element.addEventListener('click', (evt) => {
//         evt.preventDefault();
//         //console.log(element);
//         if(!element) return;
//         //console.log(element);
//         element.classList.add("active");

//         console.log(element.classList);

//         // if(element.classList.contains('active')){
//         //     element.classList.toggle("active");
//         // }
//     });
// });


