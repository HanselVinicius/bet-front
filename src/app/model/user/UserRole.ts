export enum UserRole{
    ADMIN = 'admin',
    USER = 'user'
}

export  function respond(role:string):UserRole{
    if(role === UserRole.ADMIN){
        return UserRole.ADMIN;
    }else{
        return UserRole.USER;
    }
}

