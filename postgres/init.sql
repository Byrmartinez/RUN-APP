

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

