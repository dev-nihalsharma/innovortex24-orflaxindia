'use client';

import { DialogTitle, DialogTrigger } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from './ui/dialog';

interface ProductCardProps {
  title: string;
  img: string;
  price_range: string;
  imgs: string[];
}

const ProductCard = ({ title, img, price_range, imgs }: ProductCardProps) => {
  return (
    <div className="flex justify-center mb-6">
      <Dialog>
        <DialogTrigger>
          <div className='w-[300px] h-[400px] border rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300 overflow-hidden cursor-pointer'>
            <Image
              src={`/images/${img}`}
              width={300}
              height={300}
              alt={title}
              className='w-full h-3/4 object-cover rounded-t-md' // Use a fixed height for the image
            />
            <div className='h-1/4 p-4 flex flex-col justify-center'>
              <h2 className='font-bold text-gray-500 text-center'>{title}</h2>
              <h3 className='text-white text-center'>{price_range}</h3>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent style={{ overflow: 'auto' }}>
          <DialogHeader>
            <DialogTitle style={{ fontSize: 25, fontWeight: 700 }}>{title}</DialogTitle>
            <DialogDescription>These are our available {title}</DialogDescription>
          </DialogHeader>

          <div className='grid grid-cols-1 gap-10'> {/* Added gap-4 for spacing */}
            {imgs.map((img, index) => (
              <div key={index} className='flex justify-center'>
                <Image
                  src={`/images/${img}`}
                  width={300}
                  height={300}
                  alt={title}
                  className='w-full h-auto rounded-md'
                />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductCard;
