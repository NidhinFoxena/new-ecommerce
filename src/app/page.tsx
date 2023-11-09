import ProductCard from "@/components/ProductCard";
import prisma from "@/lib/db/prisma";
import Image from "next/image";

export default async function Home() {
  const product = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });
  return (
    <div>
      <ProductCard product={product[0]} />
    </div>
  );
}
