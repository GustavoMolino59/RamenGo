export class BrothNotExistsError extends Error {
    constructor(){
        super('The broth doesnt exist')
    }
}