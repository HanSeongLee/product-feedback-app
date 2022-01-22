import * as fs from "fs";

export const findAll = async () => {
    const categories = JSON.parse(await fs.readFileSync("./data/categories.json"));
    return categories;
};
