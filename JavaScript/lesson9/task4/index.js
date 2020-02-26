const obj = {
    room1:[
        {name:'room1 name1'},
        {name:'room1 name2'},
        {name:'room1 name3'},
        {name:'room1 name4'},
    ],
    room2:[
        {name:'room2 name1'},
        {name:'room2 name2'},
        {name:'room2 name3'},
        {name:'room2 name4'},
    ],
    room3:[
        {name:'room3 name1'},
        {name:'room3 name2'},
        {name:'room3 name3'},
        {name:'room3 name4'},
    ],

}
const transformToObject = obj => {
    const copy = Object.entries(obj);
    console.log(obj);
    
    copy.forEach(el => {
        obj[el] = el;
    });
    return copy;

};
console.log(transformToObject(obj));
