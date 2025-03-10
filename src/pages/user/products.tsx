import ProductsBanner from "../../components/user/products/products/banner";
import ProductsBenefits from "../../components/user/products/products/benefits";
import ChallengesFaced from "../../components/user/products/products/challengesFaced";
import VideoAndProduct from "../../components/user/products/products/videoAndProduct";
import Products from "../../components/mythos/about/products";
import ProductsFAQ from "../../components/user/products/faq/faq";

const products = () => {
  const productsItems = [
    {
      id: "1",
      image: "/products/Conversation Starter Cards 6-12.png",
      title: "Stage 1",
    },
    {
      id: "2",
      image: "/products/Story reteller cards 6-12.png",
      title: "Stage 2",
    },
    {
      id: "3",
      image: "/products/Silent stories 6-12.png",
      title: "Stage 3",
    },
  ];

  return (
    <>
      <ProductsBanner />
      <ChallengesFaced />
      <VideoAndProduct />
      <Products
        products={productsItems}
        label="For Children (6 - 12)"
        bg="white"
        text="black"
      />
      <ProductsBenefits />
      <ProductsFAQ />
    </>
  );
};

export default products;
