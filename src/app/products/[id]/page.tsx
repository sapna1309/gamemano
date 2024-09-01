import { Product } from "@/apis/models";

interface Props {
    params: {
        id: string
    };
}

interface Data {
    [key: string]: any;
}

const productDetails = async ({ params: { id } }: Props) => {
    const { data }: Data = await Product.getById(id);

    return (
        <div>productDetails</div>
    )
}

export default productDetails;