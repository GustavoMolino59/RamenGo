export class ErrorExternalApiError extends Error {
    constructor(){
        super('could not place order')
    }
}