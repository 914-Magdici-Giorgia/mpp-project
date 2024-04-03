import express from "express";
import mills from "../controllers/millsController.js";

const router = express.Router();

router.get('/', mills.getAll);
router.get('/:id', mills.get);
router.post('/', mills.create);
router.put('/:id', mills.update);
router.delete('/:id', mills.deleteMill);

export default router;