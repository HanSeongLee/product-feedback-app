const { PrismaClient } = require('@prisma/client');
const Categories = require('../data/categories.json');
const Status = require('../data/status.json');
const Users = require('../data/users.json');
const ProductRequests = require('../data/productReqeusts.json');

const prisma = new PrismaClient();

async function main() {
    for (const category of Categories) {
        await prisma.category.create({
            data: category,
        });
    }

    for (const status of Status) {
        await prisma.status.create({
            data: status,
        });
    }

    for (const user of Users) {
        await prisma.user.create({
            data: user,
        });
    }

    const productRequestsData = ProductRequests.map((request) => {
        return {
            ...request,
            comments: {
                create: request.comments.map((comment) => {
                        return {
                            ...comment,
                            replies: {
                                create: [
                                    ...comment.replies || [],
                                ]
                            }
                        }
                    })
            }
        }
    });

    for (const request of productRequestsData) {
        await prisma.productRequest.create({
            data: request,
        });
    }
}

main()
    .catch((e) => {
        throw e;
    }).finally(async () => {
        await prisma.$disconnect();
    });
