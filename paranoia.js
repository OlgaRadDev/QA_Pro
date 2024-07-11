var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

let regexp = /^([a-zA-Z0-9._%+-])+@(gmail\.com|yahoo\.com)$/;
let trustedEmails = [];

for (let element of arr) {
    if (regexp.test(element.email)) {
       trustedEmails.push(element.email);
    }
}

console.log(trustedEmails);
