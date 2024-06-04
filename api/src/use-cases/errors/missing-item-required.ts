export class MissingItemRequiredError extends Error {
    constructor(){
        super('both brothId and proteinId are required')
    }
}