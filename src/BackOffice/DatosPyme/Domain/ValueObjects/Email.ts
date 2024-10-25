export class Email {
    value: string

    constructor(value: string) {
        this.value = value
        console.log("aquiestamos")
        console.log(this.value)
        this.ensureIsValid()
    }

    private ensureIsValid() {

        const regExpresion = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')

        if (!regExpresion.test(this.value))
            throw new Error('Email es invalidooooo')

    }
}