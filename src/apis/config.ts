import axios, { AxiosInstance, AxiosResponse } from "axios";

interface SearchParams {
    [key: string]: any;
}

interface ApiResponse {
    [key: string]: any
}


class Api {
    private baseURL: string;
    private instance: AxiosInstance;

    constructor(pathname: string) {
        this.baseURL = `${process.env.NEXT_PUBLIC_SERVER}${pathname}`;
        this.instance = axios.create({ baseURL: this.baseURL });
    }

    async get<T>(searchParams: SearchParams = {}): Promise<ApiResponse> {
        try {
            const response: AxiosResponse<T> = await this.instance.get(`/`, { params: searchParams });
            return { data: response.data };
        } catch (error: any) {
            return error?.response?.data?.error?.message;
        }
    }

    async getById<T>(id: string, searchParams: SearchParams = {}): Promise<ApiResponse> {
        if (!id) {
            throw new Error("Id not provided");
        }

        try {
            const response: AxiosResponse<T> = await this.instance.get(`/${id}`, { params: searchParams });
            return { data: response.data };
        } catch (error: any) {
            return error?.response?.data?.error?.message;
        }
    }
}

export { Api };
