// src/routes/RoutesConfig.tsx

import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from "../hooks/ProtectedRoute";

// Lazy-loaded pages
const Login = lazy(() => import('../components/page/LoginPage'));
const Signup = lazy(() => import('../components/page/SignupPage'));
const Home = lazy(() => import('../components/page/HomePage'));
const ProductPage = lazy(() => import('../components/page/ProductPage'));
const LearnPage = lazy(() => import('../components/page/LearnPage'));
const Categories = lazy(() => import('../components/page/CategoriesPage.tsx'));
const AboutPage = lazy(() => import("../components/page/AboutPage.tsx"));
const Terms = lazy(() => import("../components/common/Terms.tsx"));
const Contact = lazy(() => import('../components/common/Contact.tsx'));

export const RoutesConfig = () => {
    return (
        <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route
                path="/product"
                element={
                    <ProtectedRoute>
                        <ProductPage />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/product/get/:id"
                element={
                    <ProtectedRoute>
                        <LearnPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/categories"
                element={
                    <ProtectedRoute>
                        <Categories />
                    </ProtectedRoute>
                }
            />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
        </>
    );
};
