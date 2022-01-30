import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const findAll = async (props) => {
    const productRequests = await prisma.productRequest.findMany({
        ...props,
    });
    return productRequests;
};

export const findOne = async (id, props) => {
    const productRequest = await prisma.productRequest.findUnique({
        where: {
            id,
        },
        ...props,
    });
    return productRequest;
};

