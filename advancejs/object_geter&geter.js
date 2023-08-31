const User={
    _email:'rk@.com',
    _password:'abc',

    get email (){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }

}
const tea =object.create(User)
console.log(tea.email);