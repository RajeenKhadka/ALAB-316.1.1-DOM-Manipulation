var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];


// menuLinks.forEach((element) => {
//     let test = [];
//     //console.log(element);

//     test.push(element);
//     console.log(test[0]);
// });


for(let i =0; i< menuLinks.length; i++){
    console.log(Object.values(menuLinks[i]));
}