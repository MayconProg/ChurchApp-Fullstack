import { UserRole } from "../generated/prisma";
import { prisma } from "../src/lib/prisma";

async function main() {
  const users = await prisma.user.createMany({
    data: [
      {
        id: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        name: "Raquel Santos",
        email: "raquelsantos@gmail.com",
        password: "raquel123",
        role: UserRole.ADMIN,
        image: "https://github.com/MayconProg.png",
      },
      {
        id: "56ddd2ab-9988-476d-9d54-f9b8eb8a70b7",
        name: "Maycon Douglas",
        email: "maycondouglas@gmail.com",
        password: "maycon123",
        role: UserRole.USER,
        image: "https://github.com/MayconProg.png",
      },
    ],
  });

  const courses = await prisma.course.createMany({
    data: [
      {
        id: "b641d38c-c900-4057-b3e3-b2fa00806f8e",
        title: "Bible For Beginners",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: "00.0",
        image:
          "https://images.unsplash.com/photo-1469228252629-cbe7cb7db2c8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9seSUyMGJpYmxlfGVufDB8fDB8fHww",
      },
      {
        id: "69854a41-04bc-4162-b4b6-a7ca2e74eaa4",
        title: "All Jesus Teachings",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: "120.0",
        image:
          "https://images.unsplash.com/photo-1469228252629-cbe7cb7db2c8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9seSUyMGJpYmxlfGVufDB8fDB8fHww",
      },
    ],
  });

  const usersOnCourses = await prisma.usersOnCourses.createMany({
    data: [
      {
        userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        courseId: "b641d38c-c900-4057-b3e3-b2fa00806f8e",
      },
      {
        userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        courseId: "69854a41-04bc-4162-b4b6-a7ca2e74eaa4",
      },
      {
        userId: "56ddd2ab-9988-476d-9d54-f9b8eb8a70b7",
        courseId: "69854a41-04bc-4162-b4b6-a7ca2e74eaa4",
      },
    ],
  });

  const contents = await prisma.content.createMany({
    data: [
      {
        id: crypto.randomUUID(),
        title: "Genesis - Chapter 1",
        description: "This video will be about the chapter 1 of Genesis",
        image:
          "https://upload.wikimedia.org/wikipedia/pt/e/e1/G%C3%AAnesis_logo.jpeg",
        url: "https://www.youtube.com/watch?v=5cXmR4i3O5w",
        files: [],
        courseId: "b641d38c-c900-4057-b3e3-b2fa00806f8e",
      },
      {
        id: crypto.randomUUID(),
        title: "Exodus - Chapter 1",
        description: "This video will be about the chapter 1 of Exodus",
        image:
          "https://regehrlein.wordpress.com/wp-content/uploads/2021/11/exodus.png",
        url: "https://www.youtube.com/watch?v=5cXmR4i3O5w",
        files: [],
        courseId: "69854a41-04bc-4162-b4b6-a7ca2e74eaa4",
      },
    ],
  });

  const courseComments = await prisma.courseComments.createMany({
    data: [
      {
        id: crypto.randomUUID(),
        text: "This is a comment",
        userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        courseId: "b641d38c-c900-4057-b3e3-b2fa00806f8e",
      },
      {
        id: crypto.randomUUID(),
        text: "This is a comment",
        userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        courseId: "69854a41-04bc-4162-b4b6-a7ca2e74eaa4",
      },
    ],
  });

  const courseRatings = await prisma.courseRatings.createMany({
    data: [
      {
        id: crypto.randomUUID(),
        value: 5,
        userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        courseId: "b641d38c-c900-4057-b3e3-b2fa00806f8e",
      },
      {
        id: crypto.randomUUID(),
        value: 3,
        userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        courseId: "b641d38c-c900-4057-b3e3-b2fa00806f8e",
      },
      {
        id: crypto.randomUUID(),
        value: 5,
        userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        courseId: "69854a41-04bc-4162-b4b6-a7ca2e74eaa4",
      },
      {
        id: crypto.randomUUID(),
        value: 4,
        userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        courseId: "69854a41-04bc-4162-b4b6-a7ca2e74eaa4",
      },
    ],
  });

  const products = await prisma.product.createMany({
    data: [
      {
        id: "3f6ef3a2-e8c3-4337-b1e5-36c6d806753b",
        name: "Product 1",
        description: "This is a product",
        price: 100,
        stockQuantity: 10,
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5eb7226c-ca20-43ab-a816-4c8824649780/custom-nike-air-force-1-low-by-you-shoes.png",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e8c06b84-c361-4a1e-9d4d-1e7ac3952c8b/custom-nike-air-force-1-low-by-you-shoes.png",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd3a67ed-845d-473d-a5f7-18caabd2d6a4/custom-nike-air-force-1-low-by-you-shoes.png",
        ],
      },
      {
        id: "ee8cb0eb-482f-4eaf-8ca5-c0cab490d6ef",
        name: "Product 2",
        description: "This is a product",
        price: 200,
        stockQuantity: 10,
        images: [
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5eb7226c-ca20-43ab-a816-4c8824649780/custom-nike-air-force-1-low-by-you-shoes.png",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e8c06b84-c361-4a1e-9d4d-1e7ac3952c8b/custom-nike-air-force-1-low-by-you-shoes.png",
          "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd3a67ed-845d-473d-a5f7-18caabd2d6a4/custom-nike-air-force-1-low-by-you-shoes.png",
        ],
      },
    ],
  });

  const productComments = await prisma.productComments.createMany({
    data: [
      {
        id: crypto.randomUUID(),
        text: "This is a comment",
        userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        productId: "3f6ef3a2-e8c3-4337-b1e5-36c6d806753b",
      },
      {
        id: crypto.randomUUID(),
        text: "This is a comment",
        userId: "56ddd2ab-9988-476d-9d54-f9b8eb8a70b7",
        productId: "ee8cb0eb-482f-4eaf-8ca5-c0cab490d6ef",
      },
    ],
  });

  const productRatings = await prisma.productRatings.createMany({
    data: [
      {
        id: crypto.randomUUID(),
        value: 5,
        userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        productId: "3f6ef3a2-e8c3-4337-b1e5-36c6d806753b",
      },
      {
        id: crypto.randomUUID(),
        value: 4,
        userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
        productId: "3f6ef3a2-e8c3-4337-b1e5-36c6d806753b",
      },
      {
        id: crypto.randomUUID(),
        value: 4,
        userId: "56ddd2ab-9988-476d-9d54-f9b8eb8a70b7",
        productId: "ee8cb0eb-482f-4eaf-8ca5-c0cab490d6ef",
      },
      {
        id: crypto.randomUUID(),
        value: 4,
        userId: "56ddd2ab-9988-476d-9d54-f9b8eb8a70b7",
        productId: "ee8cb0eb-482f-4eaf-8ca5-c0cab490d6ef",
      },
    ],
  });

  const orders = await prisma.order.create({
    data: {
      id: crypto.randomUUID(),
      status: "PENDING",
      payment_type: "BANK_TRANSFER",
      total_amount: 300,
      userId: "9fd60afd-6c7e-4c4b-9cf1-d1c47289ec7a",
      products: {
        connect: [
          {
            id: "3f6ef3a2-e8c3-4337-b1e5-36c6d806753b",
          },
          {
            id: "ee8cb0eb-482f-4eaf-8ca5-c0cab490d6ef",
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    console.log("Database Seeded!");
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
