
CREATE TABLE admin (
    "name" VARCHAR(255) NOT NULL,  -- CodOwner es tipo string
    "otro" INT NOT NULL,   -- CodTipoItemClase es tipo entero
    "arrayde.." JSONB NOT NULL,        -- Almacena el array de objetos como JSONB
    PRIMARY KEY ("")           -- Definir CodOwner como clave primaria
);
