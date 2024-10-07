import React from "react";
import { List, Pagination } from "antd";
import { formatPrice } from "../helpers/formatPrice";
import { useNavigate } from "react-router-dom";

const ProductList = ({
  products,
  title = "",
  setPagination,
  pagination = {
    page: 1,
    pageSize: 12,
    totalPage: 0,
    totalItems: 0,
  },
  isPagination = true,
}) => {
  const navigate = useNavigate();
  const handleChangePage = (key, value) => {
    setPagination((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="mx-auto px-4 py-8 md:px-8">
      {title && <h2 className="text-2xl font-bold uppercase mb-6">{title}</h2>}
      <List
        grid={{
          gutter: 16,
          xs: 2,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 5,
        }}
        dataSource={products}
        renderItem={(item) => (
          <List.Item>
            <div
              className="cursor-pointer flex flex-col h-full"
              onClick={() => navigate(`/detail/${item.slug}`)}
            >
              <div className="relative pb-[100%] overflow-hidden rounded-lg">
                <img
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  src={item?.mainImage?.url}
                  alt={item.name}
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  30% OFF
                </span>
              </div>
              <div className="mt-2 flex-grow">
                <h3 className="text-xs md:text-sm font-medium line-clamp-2">
                  {item.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-rose-800 font-bold text-sm">
                    {formatPrice(item.price)}đ
                  </span>
                  <span className="text-slate-400 line-through text-sm">
                    {formatPrice(item.price + item.price * 0.3)}đ
                  </span>
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
      {products?.length > 0 && pagination.totalPage > 1 && isPagination && (
        <div className="mt-8 flex justify-end">
          <Pagination
            current={pagination.page}
            pageSize={pagination.pageSize}
            total={pagination.totalItems}
            onChange={(page) => handleChangePage("page", page)}
            onShowSizeChange={(_, size) => handleChangePage("pageSize", size)}
            defaultCurrent={1}
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
