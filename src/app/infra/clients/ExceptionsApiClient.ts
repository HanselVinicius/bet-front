import {Injectable } from "@angular/core";
import axios, { AxiosInstance } from "axios";


@Injectable({
	providedIn: "root"
})
export class ExceptionApiClient{
    private readonly API = '';
    private axiosClient:AxiosInstance

    constructor(){
        console.log(this.API);
        this.axiosClient = axios.create({
            baseURL: this.API,
            timeout: 5000,
        });
    }

    public getClient(){
        return this.axiosClient;
    }

    
    
}