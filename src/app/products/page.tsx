import { Product } from "@/apis/models";

const products = async () => {
    const { data } = await Product.get();

    return (
        <div>products</div>
    )
}

export default products;