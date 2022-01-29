import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async () => {
    const categories = prisma.category.findMany({
        orderBy: [
            {
                id: 'asc',
            }
        ]
    });
    return categories;
};
