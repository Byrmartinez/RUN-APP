export class Email {
    value: string

    constructor(value: string) {
        this.value = value
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if (!this.value || this.value.trim().length === 0) {
            throw new Error('Email no puede estar vacio.')
        }

        const regExpresion = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')

        if (!regExpresion.test(this.value))
            throw new Error('Email es invalidooooo')

    }
}