import React from 'react';

import Review from './Review';
import { ReviewInterface } from './Review';

const mockReviews: Array<ReviewInterface['review']> = [
  {
    name: 'Leanne Graham',
    message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero alias nemo modi, eos iusto quod!',
    image: 'https://via.placeholder.com/150/771796',
    rating: 4.6
  },
  {
    name: 'Ervin Howell',
    message: 'Lorem ipsum dolor sit amet. Vero alias nemo modi, eos iusto quod!',
    image: 'https://via.placeholder.com/150/92c952',
    rating: 5.0
  },
  {
    name: 'Clementine Bauch',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi magni maiores autem, aspernatur voluptatum necessitatibus id asperiores nesciunt deleniti odio. Expedita esse possimus ratione tempora.',
    image: 'https://via.placeholder.com/150/f66b97',
    rating: 4.8
  },
]

const Reviews: React.FC = () => {
  return (
    <div className="w-3/4 border-t border-black border-solid">
      <h1 className="text-center text-2xl font-bold uppercase mt-5">Reviews</h1>
      {mockReviews.map(review => {
        return (
          <Review key={review.name} review={review} />
        )
      })}
    </div>
  )
}

export default Reviews;