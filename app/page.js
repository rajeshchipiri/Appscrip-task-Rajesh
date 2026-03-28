import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';
import Footer from '@/components/Footer';

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Header />
      <Hero />
      <div className="container">
        <ProductList products={products} />
      </div>
      <Footer />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Product Listing Page",
            "description": "A curated collection of our best products.",
            "numberOfItems": products.length,
            "itemListElement": products.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": product.title,
                "image": product.image,
                "description": product.description,
                "brand": {
                  "@type": "Brand",
                  "name": "metta muse"
                },
                "offers": {
                  "@type": "Offer",
                  "price": product.price,
                  "priceCurrency": "USD"
                }
              }
            }))
          })
        }}
      />
    </main>
  );
}
