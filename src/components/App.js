// import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from "react";
import { SharedLayout } from './SharedLayout/SharedLayout';

const About = lazy(() => import("./About/About"));
const Home = lazy(() => import("./Home/Home"));
const ProductDetails = lazy(() => import("./ProductDetails/ProductDetails"));
const Products = lazy(() => import("./Products/Products"));
const Mission = lazy(() => import("./Mission/Mission"));
const Team = lazy(() => import("./Team/Team"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};
