import { useEffect, useState } from "react";
import prodClient from "../services/prodClient";
import { CanceledError } from "axios";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  thumbnail: string;
  rating: string;
  stock: string;
  category: string;
}

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    prodClient
      .get<ApiResponse>("/products", {
        params: {
          limit: 0,
        },
      })
      .then((res) => setProducts(res.data.products))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => abortController.abort();
  }, []);

  return { products, error };
};

export default useProducts;
