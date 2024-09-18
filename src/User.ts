export class User{
    firstName;
    lastName;
    username;
    password;
    city;
    state;
    zip;
    constructor(fn : string,ln : string,un:string,ps:string,city:string,state:string,zip:number){
        this.firstName = fn;
        this.lastName = ln;
        this.username = un;
        this.password = ps;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}