import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

const products1 = [
  {
    title: 'Multistrand Wire',
    price_range: '₹635 - ₹15200',
    thumbnail: 'multistrand_wires.jpeg',
    imgs: ['multistrand_wires.jpeg', 'details1.jpg', 'details2.jpg'],
  },
  {
    title: 'Multicore Round Flexible Cables',
    price_range: '₹2330 - ₹40865',
    thumbnail: 'multicore_cables.jpeg',
    imgs: ['multicore_cables.jpeg', 'details3.jpg'],
  },
  {
    title: 'Submersible Cables',
    price_range: '₹9435 - ₹52410',
    thumbnail: 'submersible_cables.jpeg',
    imgs: ['submersible_cables.jpeg', 'details4.jpg'],
  },
  {
    title: 'Aluminum Cables',
    price_range: '₹5575 - ₹8270',
    thumbnail: 'alumunium_cable.jpeg',
    imgs: ['alumunium_cable.jpeg', 'details5.jpg'],
  },
  {
    title: 'Aluminum Cable With Solid Conductors',
    price_range: '₹450 - ₹5430',
    thumbnail: 'alumunium_solid_cable.jpeg',
    imgs: ['alumunium_solid_cable.jpeg', 'details6.jpg', 'details7.jpg'],
  },
  {
    title: 'Aluminum Round Cable, Multiple Conductor',
    price_range: '₹450 - ₹5430',
    thumbnail: 'aluminium_round_cable.webp',
    imgs: ['aluminium_round_cable.webp', 'details8.jpg'],
  },
  {
    title: 'Co-Axial Cable With Copper Conductor',
    price_range: '₹2820 - ₹4025',
    thumbnail: 'thmb1.jpeg',
    imgs: ['thmb1.jpeg', 'details9.jpg'],
  },
  {
    title: 'Parallel Flat Cable',
    price_range: '₹1900 - ₹4985',
    thumbnail: '9.webp',
    imgs: ['9.webp', 'details10.jpg'],
  },
];

const products2 = [
  {
    title: 'Multistrand Wire Nexa Series',
    price_range: '₹1640 - ₹19300',
    thumbnail: 't1.jpeg',
    imgs: ['t1.jpeg', 'details17.jpg'],
  },
  {
    title: 'Submersible Cables',
    price_range: '₹10950 - ₹60500',
    thumbnail: 't2.png',
    imgs: ['t2.png', 'details18.jpg'],
  },
  {
    title: 'Aluminium Cable Single',
    price_range: '₹525 - ₹3510',
    thumbnail: 't3.webp',
    imgs: ['t3.webp', 'details19.jpg'],
  },
  {
    title: 'Aluminium Cable Twin With Solid Conductor',
    price_range: '₹1220 - ₹7890',
    thumbnail: 't4.webp',
    imgs: ['t4.webp', 'details20.jpg'],
  },
  {
    title: 'Aluminium Round Cable, Multiple Conductor',
    price_range: '₹4685 - ₹10040',
    thumbnail: 't5.jpeg',
    imgs: ['t5.jpeg', 'details21.jpg'],
  },
];

const premium_products = [
  { thumbnail: 'pp1.jpeg' },
  { thumbnail: 'pp2.jpeg' },
  { thumbnail: 'pp3.jpeg' },
  { thumbnail: 'pp4.jpeg' },
  { thumbnail: 'pp5.jpeg' },
  { thumbnail: 'pp6.jpeg' },
  { thumbnail: 'pp7.jpeg' },
  { thumbnail: 'pp8.jpeg' },
  { thumbnail: 'pp9.jpeg' },
  { thumbnail: 'pp10.jpeg' },
  { thumbnail: 'pp11.jpeg' },
  { thumbnail: 'pp12.jpeg' },
];

const ProductsPage = () => {
  return (
    <div className='bg-gray'>
      <section className='px-4 md:px-10 py-10'>
        <div className='text-center mb-10'>
          <h1 className='text-5xl font-bold mt-10 text-primary'>Our Products</h1>
          <h4 className='mt-2 text-gray-100'>House Wires for better performance at high temperatures</h4>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products1.map((product) => (
            <ProductCard
              key={product.title}
              img={product.thumbnail}
              title={product.title}
              price_range={product.price_range}
              imgs={product.imgs!}
            />
          ))}
        </div>
        
        <div className='text-center mt-20 mb-10'>
          <h1 className='text-5xl font-bold text-primary'>Premium Products</h1>
          <h4 className='text-gray-100 mt-2'>House Wires for better performance at high temperatures</h4>
        </div>

        <div className='w-full flex justify-center'>
          <div
            x-data='{}'
            x-init="$nextTick(() => {
              let ul = $refs.products;
              ul.insertAdjacentHTML('afterend', ul.outerHTML);
              ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
            className='w-3/4 m-8 inline-flex flex-nowrap overflow-hidden'
          >
            <ul
              x-ref='products'
              className='flex items-center [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll'
            >
              {premium_products.map((product) => (
                <li
                  key={product.thumbnail}
                  className='cursor-pointer transform hover:scale-105 transition-transform duration-300'
                >
                  <Image
                    src={`/images/${product.thumbnail}`}
                    alt={product.thumbnail}
                    width={400}
                    height={400}
                    className='rounded-lg shadow-lg'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className='my-10 py-10 flex justify-center bg-white shadow-md'>
        <img
          src='/images/pp10.jpeg'
          alt='Banner'
          className='w-[350px] h-[300px] rounded-lg shadow-md mx-4'
        />
        <img
          src='/images/our_products.jpeg'
          alt='Banner'
          className='h-[300px] rounded-lg shadow-md mx-4'
        />
      </div>

      <div className='my-5 mb-10 flex items-center flex-col gap-8'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-primary'>More Products</h1>
          <h4 className='text-gray-100 mt-2'>House Wires for better performance at high temperatures</h4>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products2.map((product) => (
            <ProductCard
              key={product.title}
              img={product.thumbnail}
              title={product.title}
              price_range={product.price_range}
              imgs={product.imgs!}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
