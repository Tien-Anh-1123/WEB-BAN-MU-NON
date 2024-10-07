import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import size from "../resources/size.png";

const Size = () => {
  return (
    <div className="px-8 py-4">
      <div className="py-6 md:px-16 xl:px-16 2xl:px-16">
        <Breadcrumb>
          <Breadcrumb.Item>
            <div className="text-slate-600 text-base cursor-pointer">
              <HomeOutlined /> Trang Chủ
            </div>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
           
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <img className="w-full" src={size} alt="size-image" />
    </div>
  );
};

export default Size;
