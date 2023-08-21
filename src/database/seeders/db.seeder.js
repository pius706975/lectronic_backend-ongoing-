'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // these 2 users have the same password: User@7777
    await queryInterface.bulkInsert('users', [{
      name: 'Admin Gahol',
      email: 'admin@gmail.com',
      password: '$2b$10$sfkjVmyIr7xX.CFurjFBkuvc6KKTSFfPgSvGHzKiVuQb3miGS29yy',
      address: 'Ghost Cave Street',
      phone_number: '081244556678',
      date_of_birth: '17-02-1999',
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1690872849/lectronic/default_picture_friqcz.png',
      role: 'admin',
      is_verified: true
    }, 
    
    {
      name: 'Visitor Tamvan',
      email: 'visitor@gmail.com',
      password: '$2b$10$qYCYLV6S5M9WzGGVmO5nhumdIZ7VKpeJ8pPTD.Em7sCL.vETJEqBO',
      address: 'Jump 21 Street',
      phone_number: '081232320099',
      date_of_birth: '17-02-1989',
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1690872849/lectronic/default_picture_friqcz.png',
      role: 'user',
      is_verified: true
    }], {})

    await queryInterface.bulkInsert('categories', [{
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      category_name: 'Headphone'
    }, 
    
    {
      category_id: 'ab278db8-e0c4-4e28-9007-6029e3693a03',
      category_name: 'Addional Equipment'
    }, 
    
    {
      category_id: '1d42f0f0-3e9e-4604-b47c-969b203b7d18',
      category_name: 'Audio Mixer'
    }, 
    
    {
      category_id: 'f3cfb5d7-b8b1-4464-b24e-50db853aa142',
      category_name: 'Audio Interface'
    }, 
    
    {
      category_id: '473732ff-0bc6-4f06-9964-4e030f81a194',
      category_name: 'Speaker'
    }], {})

    await queryInterface.bulkInsert('products', [{
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony MDR-MV1',
      price: 6200000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692265645/lectronic/productImages/Feature1_v2_lfymx3.jpg',
      rating: 0,
      description: 'Open back Studio Monitor Headphones for creating spatial and stereo sound with wide frequency range and soundstage feel. Neutral and high-resolution acoustic characteristics reproduce all sound elements exactly as they are, providing lightweight and excellent wearing comfort for creators during long studio work.'
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony MDR-7506 Professional Headphones',
      price: 1300000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1691585600/lectronic/productImages/tfpeodtjb5doackslpx1.png',
      rating: 0,
      description: `The MDR-7506 is an extremely high-quality reference headphone. Lightweight and engineered for maximum comfort over extended periods of wear, it's ideal for use in broadcast and studio environments. A 40mm PET diaphragm and neodymium magnet provide performance exceeding the requirements of digital sources, such as CD, MD and DAT.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony MDR-Z1R Premium Headphones',
      price: 27000000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692266434/lectronic/productImages/thumbnails_large__default_upload_bucket_01._MDR-Z1R_B_cw-Mid_1.png_erh3cg.png',
      rating: 0,
      description: 'Elevating the high-resolution sound experience from one you listen to, to one you can feel.'
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
      price: 6000000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692266705/lectronic/productImages/6145c1d32e6ac8e63a46c912dc33c5bb_djcoiq.avif',
      rating: 0,
      description: 'With four microphones on each earcup, this is our biggest ever step forward in noise cancelling. Ambient sound is captured even more accurately for a dramatic reduction in high frequency noise. Thanks to Auto NC Optimizer, noise cancelling performance is always and automatically optimised based on wearing conditions and external environmental factors such as atmospheric pressure.'
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony WH-1000XM4 Wireless Noise Cancelling Headphones',
      price: 5100000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692266891/lectronic/productImages/291712201_eklh1u.jpg',
      rating: 0,
      description: `It's just you and your music with the WH-1000XM4 headphones. The easy way to enjoy less noise and even purer sound, with smart listening technology that automatically personalises your experience.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony WH-H910N h.ear on 3 Wireless Noise Cancelling Headphones',
      price: 4500000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692269247/lectronic/productImages/DM_0AF57D4FBE7097D96A5887C30AC4D71F_010223100245_ll_iz0rdd.jpg',
      rating: 0,
      description: `The new h.ear range brings different colours together harmoniously, creating unexpected combinations where each element has its own place, and complements the other. From distinctive design to exceptional sound and functionality, see what the h.ear range has to offer.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony WH-XB910N Wireless Headphones',
      price: 3100000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692269844/lectronic/productImages/Sony-WHXB910N_bgc0e8.jpg',
      rating: 0,
      description: `The WH-XB910N noise cancelling headphones enhance all your low-end frequencies for exceptional bass. A dedicated bass duct on the headphone housing and increased air-tightness between the driver units and eardrums help to create precise, punchy rhythms that lift every track. Yet these wireless headphones also maintain vocal clarity for a wonderfully rich, well-rounded listening experience. `
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Sony WH-CH720N',
      price: 2000000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692269436/lectronic/productImages/design-medium_l9zos6.jpg',
      rating: 0,
      description: `With noise-cancelling technology, a lightweight design and a long-lasting battery life you can enjoy your music for longer and without background interruptions. Dual Noise Sensor technology and an Integrated Processor V1 take Noise Cancelling to the next level. Now you can shut the world around you out and immerse yourself in the music.`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer BH470NC',
      price: 1100000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692270206/lectronic/productImages/51R3mzqQzZL_lxxd0b.jpg',
      rating: 0,
      description: `Active Noise Cancelling Headphones for Audiophiles. These audiophile headphones deliver high-definition bass and super-transparent highs across an ultra-wide dynamic range. The BH470NC fulfills your needs to compose your own tunes in peace, no matter where you are – at a price that is very kind to every budget!
      `
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer BH480NC',
      price: 1400000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692270691/lectronic/productImages/BH480NC-large_ngpsxf.jpg',
      rating: 0,
      description: `Active Noise Cancelling Headphones. These audiophile headphones deliver fullness of bass and super-transparent highs across the full audio spectrum (20 Hz – 20 kHz). Our BH480NC fulfills your need to enjoy every detail of your favorite music in peace, no matter where you are!`
    },
    
    {
      category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
      name: 'Behringer HC 2000BNC',
      price: 990000,
      stock: 100,
      sold: 0,
      image: 'https://res.cloudinary.com/dccomkorf/image/upload/v1692270795/lectronic/productImages/HC2000BNC-large_mtgrjj.jpg',
      rating: 0,
      description: `Whether you’re mixing a recording, monitoring a bass line – or just sitting back enjoying your favorite song, you want headphones that deliver a wide frequency response and high dynamic range. Our HC 2000BNC headphones provide incredible high-resolution performance – at a price well within the reach of every budget!`
    },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // },
    
    // {
    //   category_id: '7b075e45-a0c1-49bb-907f-8134478dc1bd',
    //   name: ,
    //   price: ,
    //   stock: 100,
    //   sold: 0,
    //   image: ,
    //   rating: 0,
    //   description: 
    // }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};