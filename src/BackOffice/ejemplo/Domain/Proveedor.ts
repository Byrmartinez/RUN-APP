import { CodOwner } from '../../ItemClase/Domain/ValueObjects/CodOwner'
import { CodProveedor } from './ValueObjects/CodProveedor'
import { RutProveedor } from './ValueObjects/RutProveedor'
import { NomProveedor } from './ValueObjects/NomProceedor'
import { RazonSocial } from './ValueObjects/RazonSocial'
import { NomCorto } from './ValueObjects/NomCorto'
import { GiroProveedor } from './ValueObjects/GiroProveedor'
import { Direccion } from './ValueObjects/Direccion'
import { Comuna } from './ValueObjects/Comuna'
import { Ciudad } from './ValueObjects/Ciudad'
import { Pais } from './ValueObjects/Pais'
import { Localidad } from './ValueObjects/Localidad'
import { Telefono } from './ValueObjects/Telefono'
import { Email } from './ValueObjects/Email'
import { Contacto } from './ValueObjects/Contacto'
import { FillRate } from './ValueObjects/FillRate'
import { ProveedorVO } from './ValueObjects/ProveedorVO'


export class Proveedor {
    codOwner: CodOwner
    proveedor: Array<ProveedorVO>

    private constructor(
        codOwner: CodOwner,
        proveedor: Array<ProveedorVO>
    ) {
        this.codOwner = codOwner
        this.proveedor = proveedor
    }
    public static create(
        codOwner: string,
        proveedor: Array<{
            codOwner: string,
            codProveedor: string,
            rutProveedor: string,
            nomProveedor: string,
            razonSocial: string,
            nomCorto: string,
            giroProveedor: string,
            direccion: string,
            comuna: string,
            ciudad: string,
            pais: string,
            localidad: string,
            telefono: string,
            email: string,
            contacto: string,
            fillRate: number
        }>
    ): Proveedor {
        const proveedorVO = proveedor.map(proveedor => new ProveedorVO(
            new CodOwner(codOwner),
            new CodProveedor(proveedor.codProveedor),
            new RutProveedor(proveedor.rutProveedor),
            new NomProveedor(proveedor.nomProveedor),
            new RazonSocial(proveedor.razonSocial),
            new NomCorto(proveedor.nomCorto),
            new GiroProveedor(proveedor.giroProveedor),
            new Direccion(proveedor.direccion),
            new Comuna(proveedor.comuna),
            new Ciudad(proveedor.ciudad),
            new Pais(proveedor.pais),
            new Localidad(proveedor.localidad),
            new Telefono(proveedor.telefono),
            new Email(proveedor.email),
            new Contacto(proveedor.contacto),
            new FillRate(proveedor.fillRate)
        ))
        return new Proveedor(
            new CodOwner(codOwner),
            proveedorVO
        )
    }
    public mapToDTO() {
        return {
            codOwner: this.codOwner.value,
            proveedor: this.proveedor.map(proveedor => proveedor.mapToDTO())
        }
    }
}