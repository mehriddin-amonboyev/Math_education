import { Router } from "express";
import { createCategory, deleteCategory, getAllCategory, getCategory, patchCategory, updateCategory} from "../controller/category.controller.js"

export const categoryRoutes = Router()

categoryRoutes
.get("/categories", getAllCategory)
.get("/category/:id", getCategory)
.post("/categories/add", createCategory)
.delete("/categories/delete",deleteCategory)
.put("/categories/update", updateCategory)
.patch("/categories/update/:id", patchCategory);