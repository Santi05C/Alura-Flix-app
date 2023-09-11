import express from "express";
import { getVideo } from "../controllers/video.js";
import { addVideo } from "../controllers/video.js";
import { addcategory } from "../controllers/video.js";
import { getcategory } from "../controllers/video.js";

const router = express.Router();

router.get("/", getVideo);
router.post("/add", addVideo);
router.get("/search", getcategory);
router.post("/addcategory", addcategory);

// router.put("/:id", addVideo);

// router.delete("/:id", addVideo);

// router.get("/find/:id", getVideo);

export default router;
