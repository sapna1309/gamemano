import { Api } from "@/apis/config";

const Product = new Api("/products");
const Category = new Api("/products/categories");

export { Product, Category };