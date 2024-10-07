import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import slide_1 from "../resources/slide_1.png";
import slide_2 from "../resources/slide_2.png";
import slide_3 from "../resources/slide_3.png";
import slide_4 from "../resources/slide_4.png";
import slide_5 from "../resources/slide_5.png";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { getProductHome } from "../redux/product/product.thunk";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { productHome } = useSelector((state) => state.product);

  useEffect(() => {
    if (categories.length > 0) {
      const slugs = categories.map((item) => item.slug);
      dispatch(getProductHome(slugs.join(",")));
    }
  }, [dispatch, categories]);

  return (
    <>
      <div className="h-56 md:h-96 sm:h-64 xl:h-48 2xl:h-48">
        <Carousel slideInterval={5000}>
          <img className="h-[800px]" src={slide_2} alt="..." />
          <img className="h-[800px]" src={slide_1} alt="..." />
          <img className="h-[800px]" src={slide_3} alt="..." />
          <img className="h-[800px]" src={slide_4} alt="..." />
          <img className="h-[800px]" src={slide_5} alt="..." />
        </Carousel>
      </div>
      <div className="py-4">
        <div className="text-3xl text-center font-bold">Hãy tận hưởng tuổi trẻ của bạn!</div>
        <div className="text-center px-4 w-full flex items-center justify-center">
          <div className="sm:w-full md:w-1/2 py-2">
            Không chỉ là thời trang, Mũ Nón Chất còn là "phòng thí nghiệm" của tuổi
            trẻ - nơi nghiên cứu và cho ra đời nguồn năng lượng mang tên
            "Bạn". Chúng mình luôn muốn tạo nên những trải nghiệm vui vẻ, năng
            động và trẻ trung.
          </div>
        </div>
      </div>
      {productHome.length > 0 &&
        productHome.map((item, index) => {
          if (item.products.length > 0) {
            return (
              <React.Fragment key={item.category._id || index}>
                <ProductList
                  title={item.category.name}
                  products={item?.products}
                  isPagination={false}
                />
                <div
                  onClick={() => navigate(`/category/${item.category.slug}`)}
                  className="flex items-center justify-center pb-8"
                >
                  <div className="w-40 bg-slate-900 py-4 px-2 text-slate-50 font-medium text-center rounded-lg cursor-pointer">
                    Xem thêm
                  </div>
                </div>
              </React.Fragment>
            );
          }
          return null;
        })}
    </>
  );
};

export default HomePage;
