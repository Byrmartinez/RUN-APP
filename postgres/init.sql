

CREATE TABLE "usuario" (
    "id" VARCHAR(250) NOT NULL,
    "nombre" VARCHAR(250) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "password" VARCHAR(250) NOT NULL,
    "telefono" VARCHAR(250) NOT NULL,
    "estado" VARCHAR(250) NOT NULL,
    "id_rol" VARCHAR(250) NOT NULL, 
    "fecha_creacion" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);
CREATE TABLE "rol" (
    "id" VARCHAR(250) NOT NULL,
    "nombre" VARCHAR(250) NOT NULL,
    "descripcion" VARCHAR(250) NOT NULL,
    PRIMARY KEY ("id")
);
CREATE TABLE "datos_pyme" (
    "id" VARCHAR(250) NOT NULL,
    "id_usuario" VARCHAR(250) NOT NULL,
    "nombre" VARCHAR(250) NOT NULL,
    "email" VARCHAR(250) NOT NULL,
    "plan" VARCHAR(250) NOT NULL,
    "saldo" INT NOT NULL,
    "deuda" INT NOT NULL,
    PRIMARY KEY ("id")
);
CREATE TABLE "datos_rider" (
    "id" VARCHAR(250) NOT NULL,
    "id_usuario" VARCHAR(250) NOT NULL,
    "tipo_vehiculo" VARCHAR(250) NOT NULL,
    "patente" VARCHAR(250) NOT NULL,
    "modelo" VARCHAR(250) NOT NULL,
    "saldo" INT NOT NULL,
    "deuda" INT NOT NULL,
    PRIMARY KEY ("id")
);
CREATE TABLE "envio" (
    "id" VARCHAR(250) NOT NULL,
    "id_usuario" VARCHAR(250) NOT NULL,
    "direccion_origen" VARCHAR(250) NOT NULL,
    "direccion_destino" VARCHAR(250) NOT NULL,
    "descripcion" VARCHAR(250) NOT NULL,
    "distancia_km" NUMERIC(10,2) NOT NULL,
    "estado" VARCHAR(250) NOT NULL,
    "tipo_envio" VARCHAR(250) NOT NULL, 
    "costo" NUMERIC(10,2) NOT NULL, 
    "comision_aplicacion" NUMERIC(10,2) NOT NULL, 
    "comision_rider" NUMERIC(10,2) NOT NULL, 
    "valor_final" NUMERIC(10,2) NOT NULL, 
    "fecha_envio" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);
CREATE TABLE "historial_exito" (
    "id" VARCHAR(250) NOT NULL,
    "id_envio" VARCHAR(250) NOT NULL, 
    "id_rider" VARCHAR(250) NOT NULL,
    "calificacion" INT NOT NULL,
    "comentario" VARCHAR(250) NOT NULL, 
    "fecha_entrega" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);
CREATE TABLE "historial_cancelado" (
    "id" VARCHAR(250) NOT NULL,
    "id_envio" VARCHAR(250) NOT NULL, 
    "id_rider" VARCHAR(250) NOT NULL,
    "motivo_cancelacion_rider" VARCHAR(250) NOT NULL, 
    "motivo_cancelacion_generador" VARCHAR(250) NOT NULL, 
    "fecha_cancelacion" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);