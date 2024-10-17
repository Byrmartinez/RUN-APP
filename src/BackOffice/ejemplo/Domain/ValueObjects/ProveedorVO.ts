import { CodOwner } from '../../../ItemClase/Domain/ValueObjects/CodOwner'
import { CodProveedor } from './CodProveedor'
import { RutProveedor } from './RutProveedor'
import { NomProveedor } from './NomProceedor'
import { RazonSocial } from './RazonSocial'
import { NomCorto } from './NomCorto'
import { GiroProveedor } from './GiroProveedor'
import { Direccion } from './Direccion'
import { Comuna } from './Comuna'
import { Ciudad } from './Ciudad'
import { Pais } from './Pais'
import { Localidad } from './Localidad'
import { Telefono } from './Telefono'
import { Email } from './Email'
import { Contacto } from './Contacto'
import { FillRate } from './FillRate'

export class ProveedorVO {
    codOwner: CodOwner
    codProveedor: CodProveedor
    rutProveedor: RutProveedor
    nomProveedor: NomProveedor
    razonSocial: RazonSocial
    nomCorto: NomCorto
    giroProveedor: GiroProveedor
    direccion: Direccion
    comuna: Comuna
    ciudad: Ciudad
    pais: Pais
    localidad: Localidad
    telefono: Telefono
    email: Email
    contacto: Contacto
    fillRate: FillRate

    constructor(
        codOwner: CodOwner,
        codProveedor: CodProveedor,
        rutProveedor: RutProveedor,
        nomProveedor: NomProveedor,
        razonSocial: RazonSocial,
        nomCorto: NomCorto,
        giroProveedor: GiroProveedor,
        direccion: Direccion,
        comuna: Comuna,
        ciudad: Ciudad,
        pais: Pais,
        localidad: Localidad,
        telefono: Telefono,
        email: Email,
        contacto: Contacto,
        fillRate: FillRate
    ) {
        this.codOwner = codOwner
        this.codProveedor = codProveedor
        this.rutProveedor = rutProveedor
        this.nomProveedor = nomProveedor
        this.razonSocial = razonSocial
        this.nomCorto = nomCorto
        this.giroProveedor = giroProveedor
        this.direccion = direccion
        this.comuna = comuna
        this.ciudad = ciudad
        this.pais = pais
        this.localidad = localidad
        this.telefono = telefono
        this.email = email
        this.contacto = contacto
        this.fillRate = fillRate
    }
    public mapToDTO() {
        return {
            codOwner: this.codOwner.value,
            codProveedor: this.codProveedor.value,
            rutProveedor: this.rutProveedor.value,
            nomProveedor: this.nomProveedor.value,
            razonSocial: this.razonSocial.value,
            nomCorto: this.nomCorto.value,
            giroProveedor: this.giroProveedor.value,
            direccion: this.direccion.value,
            comuna: this.comuna.value,
            ciudad: this.ciudad.value,
            pais: this.pais.value,
            localidad: this.localidad.value,
            telefono: this.telefono.value,
            email: this.email.value,
            contacto: this.contacto.value,
            fillRate: this.fillRate.value
        }
    }
}