-- Tabla Usuario (general)
CREATE TABLE Usuario (
    "id_usuario" SERIAL PRIMARY KEY,
    "nombre" VARCHAR(20) NOT NULL,
    "email" VARCHAR(100) NOT NULL UNIQUE,
    "password" VARCHAR(8) NOT NULL,
    "telefono" VARCHAR(255) NOT NULL,
    "fecha_creacion" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "estado" BOOLEAN DEFAULT TRUE,
    "id_rol" INT REFERENCES Rol("id_rol") -- Llave foránea a la tabla Rol
);

-- Tabla Rol (general para los roles)
CREATE TABLE Rol (
    "id_rol" SERIAL PRIMARY KEY,
    "nombre_rol" VARCHAR(50) NOT NULL,
    "descripcion" TEXT
);

-- Tabla datos_pyme (específica para pymes)
CREATE TABLE datos_pyme (
    "id_pyme" INT PRIMARY KEY REFERENCES Usuario("id_usuario"),
    "nombre_empresa" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) UNIQUE NOT NULL,
    "plan" VARCHAR(50),
    "fecha_inicio_plan" DATE,
    "fecha_fin_plan" DATE,
    "saldo" DECIMAL(10, 2) DEFAULT 0, -- Saldo de la Pyme
    "deuda" DECIMAL(10, 2) DEFAULT 0 -- Deuda acumulada
);

-- Tabla datos_rider (específica para riders)
CREATE TABLE datos_rider (
    "id_rider" INT PRIMARY KEY REFERENCES Usuario("id_usuario"),
    "tipo_vehiculo" VARCHAR(50),
    "placa" VARCHAR(50),
    "modelo_vehiculo" VARCHAR(50),
    "saldo" DECIMAL(10, 2) DEFAULT 0, -- Saldo del rider
    "deuda" DECIMAL(10, 2) DEFAULT 0 -- Deuda acumulada del rider (por servicios generados)
);

-- Tabla Envio (datos del envío general)
CREATE TABLE Envio (
    "id_envio" SERIAL PRIMARY KEY,
    "id_usuario" INT REFERENCES Usuario("id_usuario"), -- Usuario que genera el envío
    "direccion_origen" VARCHAR(255) NOT NULL,
    "direccion_destino" VARCHAR(255) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "distancia_km" DECIMAL(5, 2) NOT NULL,
    "fecha_envio" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "estado" VARCHAR(50) DEFAULT 'pendiente', -- Estado del envío: pendiente, en camino, entregado, cancelado, etc.
    "tipo_envio" VARCHAR(50) NOT NULL, -- Definir tipo: urgente, estándar, etc.
    "costo" DECIMAL(10, 2) NOT NULL, -- Costo base del envío
    "comision_aplicacion" DECIMAL(10, 2) NOT NULL, -- Comisión que gana la app
    "comision_rider" DECIMAL(10, 2) NOT NULL, -- Comisión que gana el rider
    "valor_final" DECIMAL(10, 2) NOT NULL -- Valor final que paga el cliente
);

-- Tabla HistorialEjecutados (historial de envíos ejecutados con éxito)
CREATE TABLE HistorialEjecutados (
    "id_historial" SERIAL PRIMARY KEY,
    "id_envio" INT REFERENCES Envio("id_envio"), -- Llave foránea al envío
    "id_rider" INT REFERENCES Usuario("id_usuario"), -- Rider que entregó el envío
    "fecha_entrega" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "calificacion" INT CHECK (calificacion BETWEEN 1 AND 5), -- Calificación del servicio
    "comentarios" TEXT -- Comentarios opcionales del cliente o rider
);

-- Tabla HistorialCancelados (historial de envíos cancelados)
CREATE TABLE HistorialCancelados (
    "id_historial" SERIAL PRIMARY KEY,
    "id_envio" INT REFERENCES Envio("id_envio"), -- Llave foránea al envío
    "id_rider" INT REFERENCES Usuario("id_usuario"), -- Rider asignado (si se asignó uno)
    "fecha_cancelacion" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "motivo_cancelacion_rider" TEXT, -- Motivo de cancelación por parte del rider
    "motivo_cancelacion_generador" TEXT -- Motivo de cancelación por parte del generador del envío
);


