import React, { useState, useEffect, useContext } from 'react';
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context";
function HomePage() {
  const context = useContext(ShoppingCartContext);
  const products = context.products;
    return (
        <Layout>
          <main>
            <section className="container m-auto grid grid-cols-auto-fit gap-10 gap-x-4 home-grid">
              { products && products.map(item => (
                <Card key={item.id} data={item} />
              ))}
            </section>
          </main>
          <ProductDetail></ProductDetail>
        </Layout>
    )
  }
  export default HomePage