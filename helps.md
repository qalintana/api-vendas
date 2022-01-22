"scripts": {
"dev": "ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts"
},

yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

yarn add prettier -D

yarn add eslint-config-prettier eslint-plugin-prettier -D

docker run --name postgresdb -p 5432:5432 -e POSTGRES_PASSWORD=docker -d postgres

{
"type": "postgres",
"host": "localhost",
"port":"5432",
"username": "postgres",
"password": "docker",
"database": "apivendas",
"migrations": [".src/shared/typeorm/migrations/*.ts"],
"cli": {
"migrationsDir": "./src/shared/typeorm/migrations"
}
}
