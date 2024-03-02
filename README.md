# Huella CO2

Es una aplicación para comensar huella de carbono en base a un calculo generado por un cuestionario a resolver.

## Environment Variables

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env

`APP_PORT` Puerto para levantar en local default 3000

`APP_JWT_KEY` Secret JWT custom  junto a Api_key para generar la firma del json web token

`APP_API_KEY`  Secret custom  junto a secret JWT para generar la firma del json web token  

`DB_HOST` Host de la base de datos de mongo db

`DB_PORT` Puerto de la base de datos de mongo db

`DB_PASSWORD` Password for connect to Mongo DB on AWS

`DB_USERNAME` Username for connect to Mongo DB on AWS

`AWS_ACCESS_KEY_ID` ID para identificarse con el servicio SMTP de AWS 

`AWS_SECRET_ACCESS_KEY` Secret Key para identificarse con el servicio SMTP de AWS 

`AWS_DEFAULT_REGION` Region default de AWS para la configuracion del servicio SMTP de AWS

`DS_MERCHANT_MERCHANTCODE` Codigo indentificardor de Redsys para configurar el modulo de pagos

`DS_MERCHANT_CURRENCY` Codigo identificativo de la moneda que se utilizará en Redsys para configurar el modulo de pagos Default : 978 "€"

`DS_MERCHANT_TRANSACTIONTYPE` Codigo tipo de transaccion de Redsys para configurar el modulo de pagos

`DS_MERCHANT_TERMINAL` Codigo del terminal asociada a tu cuenta de Redsys para configurar el modulo de pagos

`DS_MERCHANT_MERCHANTURL` Url del comercio http://localhost:3000/api/v1/redsys/returFormView  remplazar (http://localhost:3000) modificar por dominio correspondiente del backend

`DS_MERCHANT_URLOK` Url de retorno en caso de que el pago haya sido exitosa http://localhost:3000/api/v1/redsys/returnOK  remplazar (http://localhost:3000) modificar por dominio correspondiente del backend

`DS_MERCHANT_URLKO` Url de retorno en caso de que el pago haya sido fallido http://localhost:3000/api/v1/redsys/returnKO  remplazar (http://localhost:3000) modificar por dominio correspondiente del backend

`DS_MERCHANT_MERCHANTNAME` Nombre del comercio

`DS_MERCHANT_CONSUMERLANGUAGE`  Codigo identificativo del idioma Default : 001 "español"

`TVP_SECRET` Secret Key generada para autentificarse tu cuenta de redsys para la generacion de la firma

`DS_SIGNATURE_VERSION` Codigo de tipo de encryptacion Default "HMAC_SHA256_V1" para validar la firma en el frontend para generar el form view

## Installation

```bash
 npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
 npm run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
## License

Nest is [MIT licensed](LICENSE).
