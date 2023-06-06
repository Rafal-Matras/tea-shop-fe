import { Route, Routes } from 'react-router-dom';

import { Role } from '../../types';

import { HomeViews } from '../../views/HomeViews';
import { NotFoundViews } from '../../views/NotFoundViews';
import { ShopViews } from '../../views/ShopViews';
import { ProductsViews } from '../../views/ProductsViews';
import { LoginViews } from '../../views/LoginViews';
import { RegisterViews } from '../../views/RegisterViews';
import { UserProfileViews } from '../../views/UserProfileViews';
import { BasketViews } from '../../views/BasketViews';
import { BasketDataViews } from '../../views/BasketDataViews';
import { BasketSummaryViews } from '../../views/BasketSummaryViews';
import { BasketDoneViews } from '../../views/BasketDoneViews';
import { AdminPanelViews } from '../../views/AdminPanelViews';
import { AdminAddProductViews } from '../../views/AdminAddProductViews';
import { AdminListOfActiveOrdersViews } from '../../views/AdminListOfActiveOrdersViews';
import { AdminListOfCompletedOrdersViews } from '../../views/AdminListOfCompletedOrdersViews';
import { AdminProductsListViews } from '../../views/AdminProductsListViews';
import { AboutUsViews } from '../../views/AboutUsViews';
import { RegulationsViews } from '../../views/RegulationsViews';
import { DeliveryAndPaymentViews } from '../../views/DeliveryAndPaymentViews';
import { HowDoWePackageView } from '../../views/HowDoWePackageView';
import { ReturnPolicyViews } from '../../views/ReturnPolicyViews';
import { PrivacyPolicyViews } from '../../views/PrivacyPolicyViews';
import { ForgotPasswordViews } from '../../views/ForgotPasswordViews';
import { SecurePath } from '../common/SecurePath/SecurePath';

import style from '../App/App.module.css';

export const Main = () => {

  return (
    <main className={style.main}>
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
        <Route path="/user/register" element={<RegisterViews/>}/>
        <Route path="/user/forgot-password/:id" element={<ForgotPasswordViews/>}/>
        <Route path="/user/profile" element={<SecurePath role={Role.user} view={<UserProfileViews/>}/>}/>

        <Route path="/basket" element={<BasketViews/>}/>
        <Route path="/basket/data" element={<BasketDataViews/>}/>
        <Route path="/basket/summary" element={<BasketSummaryViews/>}/>
        <Route path="/basket/done" element={<BasketDoneViews/>}/>

        <Route path="/admin/admin-panel" element={<SecurePath role={Role.admin} view={<AdminPanelViews/>}/>}/>
        <Route path="/admin/products-list" element={<SecurePath role={Role.admin} view={<AdminProductsListViews/>}/>}/>
        <Route path="/admin/product-add" element={<SecurePath role={Role.admin} view={<AdminAddProductViews/>}/>}/>
        <Route path="/admin/active-orders-list" element={<SecurePath role={Role.admin} view={<AdminListOfActiveOrdersViews/>}/>}/>
        <Route path="/admin/complete-orders-list" element={<SecurePath role={Role.admin} view={<AdminListOfCompletedOrdersViews/>}/>}/>
      </Routes>
    </main>
  );
};
