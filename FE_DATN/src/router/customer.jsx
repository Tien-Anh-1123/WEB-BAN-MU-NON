import React, { lazy, Suspense } from "react";
import Page from "../components/Layout/Page";
import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LayoutUser = lazy(() => import("../components/Layout/LayoutUser"));
const AuthWrapper = lazy(() => import("../components/Auth/AuthWapper"));
const HomePage = lazy(() => import("../pages/HomePage"));
const Detail = lazy(() => import("../pages/Detail"));
const Cart = lazy(() => import("../pages/Cart"));
const Size = lazy(() => import("../pages/Size"));
const Account = lazy(() => import("../pages/Account"));
const Category = lazy(() => import("../pages/Category"));
const OrderReturn = lazy(() => import("../pages/OrderReturn"));
const Auth = lazy(() => import("../pages/Auth"));

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/auth" replace />;
  }
  return children;
};

const AuthRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);
  if (isAuthenticated && !isLoading) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const CustomerRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <AuthWrapper>
          <LayoutUser>
            <Page title={"Mũ Nón Chất"}>
              <HomePage />
            </Page>
          </LayoutUser>
        </AuthWrapper>
      </Suspense>
    ),
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={<Loading />}>
        <AuthWrapper>
          <LayoutUser>
            <Page title={"Mũ Nón Chất"}>
              <AuthRoute>
                <Auth />
              </AuthRoute>
            </Page>
          </LayoutUser>
        </AuthWrapper>
      </Suspense>
    ),
  },
  {
    path: "/detail/:slug",
    element: (
      <Suspense fallback={<Loading />}>
        <AuthWrapper>
          <LayoutUser>
            <Page title={"Mũ Nón Chất | Chi Tiết Sản Phẩm"}>
              <Detail />
            </Page>
          </LayoutUser>
        </AuthWrapper>
      </Suspense>
    ),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<Loading />}>
        <AuthWrapper>
          <LayoutUser>
            <Page title={"Mũ Nón Chất | Giỏ Hàng"}>
              <Cart />
            </Page>
          </LayoutUser>
        </AuthWrapper>
      </Suspense>
    ),
  },
  {
    path: "/size",
    element: (
      <Suspense fallback={<Loading />}>
        <AuthWrapper>
          <LayoutUser>
            <Page title={"Mũ Nón Chất | Bảng Size"}>
              <Size />
            </Page>
          </LayoutUser>
        </AuthWrapper>
      </Suspense>
    ),
  },
  {
    path: "/account",
    element: (
      <Suspense fallback={<Loading />}>
        <AuthWrapper>
          <LayoutUser>
            <Page title={"Mũ Nón Chất | Tài Khoản"}>
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            </Page>
          </LayoutUser>
        </AuthWrapper>
      </Suspense>
    ),
  },
  {
    path: "/category/:slug",
    element: (
      <Suspense fallback={<Loading />}>
        <AuthWrapper>
          <LayoutUser>
            <Page title={"Mũ Nón Chất | Danh Mục Sản Phẩm"}>
              <Category />
            </Page>
          </LayoutUser>
        </AuthWrapper>
      </Suspense>
    ),
  },
  {
    path: "/order-return",
    element: (
      <Suspense fallback={<Loading />}>
        <AuthWrapper>
          <LayoutUser>
            <Page title={"Mũ Nón Chất | Thông báo đặt hàng"}>
              <ProtectedRoute>
                <OrderReturn />
              </ProtectedRoute>
            </Page>
          </LayoutUser>
        </AuthWrapper>
      </Suspense>
    ),
  },
];

export default CustomerRoutes;
