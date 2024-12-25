import { PrismaClient } from "@prisma/client";

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;

// const prisma: ReturnType<typeof prismaClientSingleton> =
//   prismaClientSingleton();
// prismaGlobal ?? prismaClientSingleton();

const prisma = new PrismaClient();

export default prisma;

// if (process.env.NODE_ENV !== "production") prismaGlobal = prisma;
