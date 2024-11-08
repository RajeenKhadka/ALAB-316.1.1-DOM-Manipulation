//import "./styles.css";

//======================Part-1===================================//
var mainEl = document.getElementsByTagName("main");
//console.log(mainEl[0]);

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

    if (evt.target.localName !== 'a') {
        return;
    }

    //removes the active class from the a tags on each time the loop runs
    topMenuLinks.forEach((element) => {
        element.classList.remove('active');
    });

    evt.target.classList.add('active');

//======================DOM-Part2-Part5===================================//

    //evt.target.textContent, the value for this is checked inside the menuLinks object array and assigned to linkArr.
    const linkArr = menuLinks.find(link => link.text === evt.target.textContent);

    //console.log(linkArr);

    if (linkArr.subLinks) {
        subMenuEl.style.top = '100%';
        subMenuEl.innerHTML = '';

        //the clicked LinkArr
        //forEach loop is used to iterate over the sublinks array object inside the selected LinkArr
        buildSubmenu(linkArr.subLinks);

    } else {
        subMenuEl.style.top = '0';
        subMenuEl.innerHTML = '';
    }


    if(linkArr.text === 'about'){
        mainEl[0].innerHTML = "<h1>" + linkArr.text + "</h1>"
    }

});

function buildSubmenu(subLinks) {

    subLinks.forEach((element) => {
        let links = document.createElement('a');
        links.setAttribute('href', element.href);
        links.textContent = element.text;
        subMenuEl.appendChild(links);
    })


}

subMenuEl.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (evt.target.localName !== 'a') {
        return;
    }

    subMenuEl.style.top = '0';

    topMenuLinks.forEach((element) => {
        element.classList.remove('active');
    })

    mainEl[0].innerHTML = "<h1>" + evt.target.textContent + "</h1>"

})