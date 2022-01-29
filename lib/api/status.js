import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async () => {
    const status = prisma.status.findMany({
        orderBy: [
            {
                id: 'asc',
            }
        ]
    });
    return status;
};
