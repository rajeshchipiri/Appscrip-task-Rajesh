import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store'
    });
    
    if (!res.ok) {
        console.error('API responded with status:', res.status);
        return [];
    }
    
    return res.json();
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
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
