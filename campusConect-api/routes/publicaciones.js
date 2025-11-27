/**
 * @swagger
 * components:
 *   schemas:
 *     publicacion:
 *       type: object
 *       required:
 *         - idUser
 *         - titulo
 *         - contenido
 *       properties:
 *         id:
 *           type: integer
 *         idUser:
 *           type: integer
 *           description: ID del usuario creador
 *         titulo:
 *           type: string
 *         contenido:
 *           type: string
 *         categoria:
 *           type: string
 *         fecha:
 *           type: string
 *           format: date
 */

/**
 * @swagger
 * tags:
 *   - name: usuarios
 *     description: Los API-endpoints del Usuario
 * 
 * /publicaciones/new:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags: [publicaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               idUser:
 *                 type: integer
 *               titulo:
 *                 type: string
 *               contenido:
 *                 type: string
 *               categoria:
 *                 type: string
 *             required:
 *               - idUser
 *               - titulo
 *               - contenido
 *     responses:
 *       201:
 *         description: Publicación creada con éxito.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success: Publicación creada"
 *                 data:
 *                   $ref: '#/components/schemas/publicacion'
 *
 *       400:
 *         description: Error en la solicitud (faltan campos o datos inválidos).
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
 *       404:
 *         description: No se encontró el usuario.
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
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 message:
 *                   type: string
 */


var router = require('express').Router();
var publicacionesCtrl = require('../controllers/publicaciones.js');

router.post('/new', publicacionesCtrl.createNewPublicacion);
router.get('/', publicacionesCtrl.getAllPublicaciones);

module.exports = router;