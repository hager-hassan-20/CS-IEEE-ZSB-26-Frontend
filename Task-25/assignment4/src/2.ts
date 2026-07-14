function showTypes<T=string, N=number, B=boolean>(v1:T|string="Nothing",
    v2:N|string="Nothing", v3:B|string="Nothing"
):string{
    return `${v1} - ${v2} - ${v3}`
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true