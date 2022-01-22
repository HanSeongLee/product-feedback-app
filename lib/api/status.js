import * as fs from "fs";

export const findAll = async () => {
    const status = JSON.parse(await fs.readFileSync("./data/status.json"));
    return status;
};
