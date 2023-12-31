import { Product } from "@prisma/client";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={"/products" + product.id}
      className="card w-full bg-base-100 transition-shadow hover:shadow-xl"
    >
      test
    </Link>
  );
}
