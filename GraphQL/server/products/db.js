// Sample data for an e-commerce platform

export default{
    products :[
        {
          id: '1',
          name: 'Wireless Bluetooth Headphones',
          description: 'High-quality Bluetooth headphones with noise cancellation and long battery life.',
          price: 129.99,
          availability: true,
          images: [
            { url: 'https://example.com/images/headphones-1.jpg', altText: 'Front view of wireless Bluetooth headphones' },
            { url: 'https://example.com/images/headphones-2.jpg', altText: 'Side view of wireless Bluetooth headphones' },
          ],
          reviews: [
            {
              rating: 5,
              comment: 'Amazing sound quality and comfortable fit. Highly recommend!',
              userId: 'user1',
            },
            {
              rating: 4,
              comment: 'Good headphones, but the battery life could be a bit better.',
              userId: 'user2',
            }
          ],
          relatedProductIds: ['67890', '54321'],
        },
        {
          id: '2',
          name: 'Noise-Cancelling Headphones',
          description: 'Noise-cancelling over-ear headphones with premium sound quality.',
          price: 149.99,
          availability: true,
          images: [
            { url: 'https://example.com/images/noise-cancelling-headphones.jpg', altText: 'Noise-cancelling headphones' }
          ],
          reviews: [
            {
              rating: 5,
              comment: 'Great noise cancellation and excellent sound. A bit pricey, but worth it.',
              userId: 'user3',
            },
          ],
          relatedProductIds: ['12345', '54321'],
        },
        {
          id: '3',
          name: 'Bluetooth Earbuds',
          description: 'Compact and comfortable wireless earbuds with a long-lasting battery.',
          price: 89.99,
          availability: true,
          images: [
            { url: 'https://example.com/images/bluetooth-earbuds.jpg', altText: 'Bluetooth earbuds' }
          ],
          reviews: [
            {
              rating: 4,
              comment: 'Good sound quality for the price. A bit uncomfortable after extended use.',
              userId: 'user4',
            },
          ],
          relatedProductIds: ['12345', '67890'],
        }
      ]
} 

  
  const users = [
    { id: 'user1', name: 'John Doe' },
    { id: 'user2', name: 'Jane Smith' },
    { id: 'user3', name: 'Robert Brown' },
    { id: 'user4', name: 'Emily White' }
  ];
  