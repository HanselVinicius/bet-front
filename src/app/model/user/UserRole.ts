export enum UserRole{
    ADMIN = 'ADMIN',
    USER = 'USER'
}

export  function respond(role:string):UserRole{
    if(role === UserRole.ADMIN){
        return UserRole.ADMIN;
    }else{
        return UserRole.USER;
    }
}

