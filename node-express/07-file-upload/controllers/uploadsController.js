const { BadRequestError } = require('../errors');
const path = require('path');
const { StatusCodes } = require('http-status-codes');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const uploadProductImageLocal = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError('Pas de fichier uploadé');
  }

  const productImage = req.files.image;

  //* vérife le format
  if (!productImage.mimetype.startsWith('image')) {
    throw new BadRequestError('Veuillez uploader une image');
  }

  //* vérifie la taille
  const maxSize = 1024 * 1024; // 10mb

  if (productImage.size > maxSize) {
    throw new BadRequestError('Veuillez uploader une image inférieur à 1mb');
  }

  // On peut stocker l'image où l'on veut tant qu'on la rend accessible publiquement (express.static())
  const imagePath = path.join(
    __dirname,
    '../public/uploads/' + `${productImage.name}`
  );
  await productImage.mv(imagePath);

  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

const uploadProductImage = async (req, res) => {
  if (!req.files) {
    throw new BadRequestError('Pas de fichier uploadé');
  }

  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'file-upload'
    }
  );

  // Supprime le ficher temporaire
  fs.unlinkSync(req.files.image.tempFilePath);

  // Ce qui nous intéresse est la prop secure_url qui permet d'accéder à l'image
  res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

module.exports = uploadProductImage;
