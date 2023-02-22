import { Route, Routes } from 'react-router-dom';

import { HomeViews } from '../../views/HomeViews';
import { NotFoundViews } from '../../views/NotFoundViews';
import { ShopViews } from '../../views/ShopViews';
import { ProductsViews } from '../../views/ProductsViews';
import { LoginViews } from '../../views/LoginViews';
import { LogoutViews } from '../../views/LogoutViews';
import { RegisterViews } from '../../views/RegisterViews';
import { ProfileDataViews } from '../../views/ProfileDataViews';
import { ProfileChangePasswordViews } from '../../views/ProfileChangePasswordViews';
import { ProfileOrdersViews } from '../../views/ProfileOrdersViews';
import { BasketViews } from '../../views/BasketViews';
import { BasketDataViews } from '../../views/BasketDataViews';
import { BasketSummaryViews } from '../../views/BasketSummaryViews';
import { BasketDoneViews } from '../../views/BasketDoneViews';
import { AdminPanelViews } from '../../views/AdminPanelViews';
import { AdminAddProduct } from '../../views/AdminAddProduct';
import { AdminListOfActiveOrders } from '../../views/AdminListOfActiveOrders';
import { AdminListOfCompletedOrders } from '../../views/AdminListOfCompletedOrders';
import { AdminProductsListViews } from '../../views/AdminProductsListViews';
import { AboutUsViews } from '../../views/AboutUsViews';
import { RegulationsViews } from '../../views/RegulationsViews';
import { DeliveryAndPaymentViews } from '../../views/DeliveryAndPaymentViews';
import { HowDoWePackageView } from '../../views/HowDoWePackageView';
import { ReturnPolicyViews } from '../../views/ReturnPolicyViews';
import { PrivacyPolicyViews } from '../../views/PrivacyPolicyViews';

export const Main = () => {

  return (
    <Routes>
      <Route path="/" element={<HomeViews/>}/>
      <Route path="/*" element={<NotFoundViews/>}/>
      <Route path="/shop" element={<ShopViews/>}/>
      <Route path="/product/:id" element={<ProductsViews/>}/>
      <Route path="/about-us" element={<AboutUsViews/>}/>
      <Route path="/regulations" element={<RegulationsViews/>}/>
      <Route path="/delivery-and-payment" element={<DeliveryAndPaymentViews/>}/>
      <Route path="/how-do-we-package" element={<HowDoWePackageView/>}/>
      <Route path="/return-policy" element={<ReturnPolicyViews/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicyViews/>}/>

      <Route path="/user/login" element={<LoginViews/>}/>
      <Route path="/user/logout" element={<LogoutViews/>}/>
      <Route path="/user/register" element={<RegisterViews/>}/>
      <Route path="/user/profile/data" element={<ProfileDataViews/>}/>
      <Route path="/user/profile/change-password" element={<ProfileChangePasswordViews/>}/>
      <Route path="/user/profile/orders" element={<ProfileOrdersViews/>}/>

      <Route path="/basket" element={<BasketViews/>}/>
      <Route path="/basket/data" element={<BasketDataViews/>}/>
      <Route path="/basket/summary" element={<BasketSummaryViews/>}/>
      <Route path="/basket/done" element={<BasketDoneViews/>}/>

      <Route path="/admin/admin-panel" element={<AdminPanelViews/>}/>
      <Route path="/admin/products-list" element={<AdminProductsListViews/>}/>
      <Route path="/admin/product-add" element={<AdminAddProduct/>}/>
      <Route path="/admin/active-orders-list" element={<AdminListOfActiveOrders/>}/>
      <Route path="/admin/complete-orders-list" element={<AdminListOfCompletedOrders/>}/>
    </Routes>
  );
};