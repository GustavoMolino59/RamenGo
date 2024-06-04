export class ProteinNotExistsError extends Error {
    constructor(){
        super('The protein doesnt exist')
    }
}