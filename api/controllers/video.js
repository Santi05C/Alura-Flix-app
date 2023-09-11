import Video from "../models/Video.js";
import Category from "../models/category.js";

export const getVideo = async (req, res, next) => {
  try {
    const videos = await Video.find({ videosId: req.params.id });
    res.status(200).send(videos);
  } catch (err) {
    next(err);
  }
};

export const getcategory = async (req, res, next) => {
  try {
    const category = await Category.find({ categoryId: req.params.id });
    res.status(200).send(category);
  } catch (err) {
    next(err);
  }
};

export const addVideo = async (req, res, next) => {
  const newVideo = new Video(req.body);
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (error) {
    next(error);
  }
};

export const addcategory = async (req, res, next) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (error) {
    next(error);
  }
};
