export default class RegisterDto{
    private login:string;
    private password:string;
    private cpf:string;

    constructor(login:string,password:string,cpf:string){
        this.login = login;
        this.password = password;
        this.cpf = cpf;
    }
}