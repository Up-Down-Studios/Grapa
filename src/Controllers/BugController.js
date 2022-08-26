import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:27062003,
        name:"testbug",
        details:"this is just a test",
        steps:"writing steps for the bug test",
        version:"V alpha0.1",
        assign:"ION",
        creator:"somedumbkid",
        priority:1,
        time:"12:21",
    }))

    data.push(new bugModel({
        _id:12345678,
        name:"testbug2",
        details:"this is just a test2",
        steps:"writing steps for the bug test2",
        version:"V alpha0.1",
        assign:"ION",
        creator:"somedumbkid",
        priority:3,
        time:"12:21",
    }))

    let sorted = data.sort((a,b) => {return a.priority - b.priority})
    return sorted;
}