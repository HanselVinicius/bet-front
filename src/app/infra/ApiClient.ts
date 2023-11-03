import axios from "axios";
import { ErrorHandler } from "@angular/core";
import { Injectable } from "@angular/core";
import { AxiosInstance } from "axios";


@Injectable({
	providedIn: "root"
})
export class ApiClient{
    private readonly API = 'http://localhost:8080/';
    private axiosClient:AxiosInstance
    private errorHandler:ErrorHandler

    constructor(errorHandler:ErrorHandler){
        this.errorHandler = errorHandler;
        this.axiosClient = axios.create({
            baseURL: this.API,
            timeout: 5000,
        });
    }

    public getClient(){
        return this.axiosClient;
    }

    public getClienWithAuth(token:string){
        this.axiosClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        return this.axiosClient;
    }
    
}