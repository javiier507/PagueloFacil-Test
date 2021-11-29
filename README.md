# Prueba de Paguelo Facil

**Autor: [Carlos Peñalba](https://www.linkedin.com/in/carlos-pe%C3%B1alba-70a036114/)**

## Instalación

1.  Instalar Dependencias

```sh
yarn
```

2.  Configuar Variables de Entorno

```sh
nano env.local
```

```sh
VITE_API_URL=
VITE_API_TOKEN=
```

3.  Ejecutar

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

4.  Compilar para producción

```sh
npm run build
```

5.  Probar version de producción

```sh
npm run serve
```

## Ejercicio de Prueba

**Ingresar Valor**

Filtrar por campo: Código

```sh
SANDBOX_AUTH_CAP-TTPUS3
```

Filtrar por campo: Correo

```sh
sulivansusy@yopmail.com
```

Filtrar por campo: Tipo de Tarjeta

```sh
VISA = VISA
MASTERDCARD = MC
CLAVE = CLAVE
```

**Ingresar Rangos**

Filtrar por rango: Fecha

```sh
Desde = 2021-11-26
Hasta = 2021-11-27

Desde = 2021-11-27
Hasta = 2021-11-28
```

Filtrar por rango: Monto

```sh
Desde = 25
Hasta = 30

Desde = 75
Hasta = 80
```
