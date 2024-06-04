import axios from "axios";
import { ErrorExternalApiError } from "./errors/error-external-api";

interface FetchExternalApiRequest {
    apiKey: string | string[] | undefined;
}

interface FetchExternalApiResponse{
    orderId:string
}
interface OrderIdResponse{
    orderId:string
}

export class FetchExternalApiUseCase{
    

    async execute({ apiKey }: FetchExternalApiRequest):Promise<FetchExternalApiResponse> {
        console.log('---------------'+ apiKey)
        const response = await axios.post<OrderIdResponse>('https://api.tech.redventures.com.br/orders/generate-id', null, {
            headers: {
                'x-api-key': apiKey
            }
        }).catch(() =>{
            throw new ErrorExternalApiError()
        });
        
        const {orderId} = response.data;
        
        return {orderId}

        
    }
}