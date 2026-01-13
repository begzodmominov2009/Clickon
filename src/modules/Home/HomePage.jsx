import React from 'react'
import useGet from '../../hooks/useGet'
import HeroSection from './components/HeroSection';
import BeastDeals from './components/beast-deals';
import ShopCategory from './components/ShopCategory';
import FeatureProducts from './components/FeaturedProducts';

const HomePage = () => {
  const { data } = useGet({ url: "products?limit=194" })
  const products = data.products

  return (
    <>
      <HeroSection />
      <BeastDeals products={products} />
      <ShopCategory products={products} />
      <FeatureProducts products={products}/>
    </>
  )
}

export default HomePage
