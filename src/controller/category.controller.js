import { fetchData } from "../postgres/postgres.js";

export async function getAllCategory(req, res) {
    const parentsCategories = await fetchData(
        "SELECT * FROM category WHERE category_id is NULL;"
    );
    for (const c of parentsCategories){
        const subCategories = await fetchData(
            "SELECT * FROM category WHERE category_id = $1;",
            c.id
        );
        c.subCategories=subCategories;
    }
    res.send({
        message:"Success",
        data : parentsCategories
    })
}

export async function getCategory(req, res) {
    const { id } = req.params;
    const category = await fetchData("SELECT * FROM category WHERE id=$1;", id);
    res.send({
        message: "success",
        data: category
    });
}
export async function createCategory(req, res) {
    const data = req.body;
    const response = await fetchData(
        "INSERT INTO category (name, image_url) VALUES ($1, $2);",
        data.name,
        data.image_url
    );

    res.send(response);
}
export async function updateCategory(req,res){
    const data = req.body;

    const response = await fetchData(
        "UPDATE category SET name = $2, image_url = $3 WHERE id = $1;", 
        data.id,
        data.name,
        data.image_url
    );
    res.send(response);
}
export async function patchCategory(req,res){
    const data = req.body;
    const id =req.params;
    const response = await fetchData(
        "UPDATE category SET name = $1 image_url = $2 WHERE id = $id", 
        data.name,
        data.image_url
    );
    res.send(response);
}

export async function deleteCategory(req, res) {
    const data = req.body;
    const response = await fetchData(
        "DELETE FROM category WHERE id = $1;",
        data.id
    );
    res.send(response)
}
