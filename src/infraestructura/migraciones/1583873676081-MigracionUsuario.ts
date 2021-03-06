//instrucciones SQL para crear tablas de ejemplo usuario de receta ceiba "Usuario", no depende de nada... 

import {MigrationInterface, QueryRunner} from "typeorm";

export class MigracionUsuario1583873676081 implements MigrationInterface {
    name = 'MigracionUsuario1583873676081'

    public async up2(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            "CREATE TABLE `usuario` (`id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `clave` varchar(255) NOT NULL, `fechaCreacion` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            "CREATE TABLE `vehiculo` (`placa` int NOT NULL AUTO_INCREMENT, `nombres` varchar(255) NOT NULL, `claves` varchar(255) NOT NULL, `fechaCreacion` datetime NOT NULL, PRIMARY KEY (`placa`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `usuario`", undefined);
    }

}
