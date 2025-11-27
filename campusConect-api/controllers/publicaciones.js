const { Publicacion, User } = require('../models');

const createNewPublicacion = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                status: "Bad Request",
                message: "Request body is missing"
            });
        }

        const { idUser, titulo, contenido, categoria } = req.body;

        const userExists = await User.findByPk(idUser);
        if (!userExists) {
            return res.status(404).json({
                status: "User Not Found",
                message: "idUser does not reference a valid user"
            });
        }

        const newPublicacion = await Publicacion.create({
            idUser,
            titulo,
            contenido,
            categoria
        });

        return res.status(201).json({
            status: "success: Publicacion creada",
            data: newPublicacion
        });

    } catch (error) {
        return res.status(500).json({
            status: "Error",
            message: error.message
        });
    }
};

const getAllPublicaciones = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll({
            include: [{ model: User, as: 'usuario' }]
        });

        return res.status(200).json({
            status: "success",
            data: publicaciones
        });

    } catch (error) {
        return res.status(500).json({
            status: "Error",
            message: error.message
        });
    }
};

module.exports = {
    createNewPublicacion,
    getAllPublicaciones
};
