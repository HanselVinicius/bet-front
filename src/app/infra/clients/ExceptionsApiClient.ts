import {Injectable } from "@angular/core";
import axios, { AxiosInstance } from "axios";
import { environment } from "src/environments/environment";


@Injectable({
	providedIn: "root"
})
export class ExceptionApiClient{
    private readonly API = environment.API_EXCEPTIONS;
    private axiosClient:AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: this.API,
            timeout: 5000,
        });
    }

    public getClient(){
        return this.axiosClient;
    }

    
    
}