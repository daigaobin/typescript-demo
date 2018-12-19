function add(a: number, b: number): number {
    return a + b;
}

let sum = add(1, 2);
console.log(sum);

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}


function buildNameDefaultValue(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

function buildNamePs(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildNamePs("Joseph", "Samuel", "Lucas", "MacKinzie");