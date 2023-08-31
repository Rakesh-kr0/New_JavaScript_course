class User{
    constructor(email,password){
        this.email;
        this.password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email (value){
          this._email=value
    }
    get password(){
        return `${this._password}Rakesh`
    }
    set password(value){
        this._password=value
    }
}
const Rakesh=new User("rakesh@ai","abc")
console.log(Rakesh.password)
console.log(Rakesh.email)