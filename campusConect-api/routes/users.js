/**
 * @swagger
 * components:
 *   schemas:
 *     usuarios:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *         - correo
 *         - password
 *         - carrera
 *         - foto 
 *       properties:
 *         id:
 *           type: integer
 *           description: ID unico autogenerado 
 *         nombre:
 *           type: string
 *           description: Nombre de usuarios
 *         correo:
 *           type: string
 *           description: Correo de usuarios
 *         password:
 *           type: string
 *           description: Contraseña segura del usuario
 *         carrera:
 *           type: string
 *           description: Carrera de usuarios
 *         foto:
 *           type: string
 *           description: Foto del usuario
 */

/**
 * @swagger
 * tags:
 *   - name: usuarios
 *     description: Los API-endpoints del Usuario
 * 
 * /users/new:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 description: Nombre de Usuario
 *               correo:
 *                 type: string
 *                 description: Correo de Usuario
 *               password:
 *                 type: string
 *                 description: Clave encriptada de 8 a 15 caracteres
 *               carrera:
 *                 type: string
 *                 description: Carrera que estudia el usuario
 *               foto:
 *                 type: string
 *                 description: Imagen de perfil del usuario
 *             required:
 *               - nombre
 *               - correo
 *               - password
 *               - carrera
 *               - foto
 *     responses:
 *       201:
 *         description: Usuario creado con exito.
 *         content: 
 *           application/json:
 *             schema: 
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *               data: 
 *                   type: array
 *                   items: 
 *                     $ref: '#/components/schemas/usuarios'
 * 
 *       400:
 *         description: Error en la creacion del usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 * 
 *       409:
 *         description: Correo ya existe.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 *
 *       500:
 *         description: Error del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 * 
 */


var router = require('express').Router();
var usersCtrl = require('../controllers/users.js');

router.post('/new', usersCtrl.createNewUser);
router.get('/', usersCtrl.getAllUsers);

module.exports = router;
