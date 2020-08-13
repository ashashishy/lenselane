const SHOP_DATA = [
  {
    id: 1,
    title: "Cameras",
    routeName: "cameras",
    items: [
      {
        id: 1,
        name: "Nikon D3500",
        imageUrl:
          "https://images.unsplash.com/photo-1541690663428-b99fc611c419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80",
        price: 1000,
      },
      {
        id: 2,
        name: "Canon EOS 1300D",
        imageUrl:
          "https://images.unsplash.com/photo-1591114286974-595c5ffb0c41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
        price: 1800,
      },
      {
        id: 3,
        name: "Leica M6",
        imageUrl:
          "https://images.unsplash.com/photo-1542144761-a4407d596a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1378&q=80",
        price: 3500,
      },
      {
        id: 4,
        name: "Canon EOS 5D Mark IV",
        imageUrl:
          "https://images.unsplash.com/photo-1513210611897-d78a2bab7654?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
        price: 2500,
      },
      {
        id: 5,
        name: "Pentax K-1 Mark II",
        imageUrl:
          "https://3.img-dpreview.com/files/p/E~TS589x442~articles/1957062322/DSC00624.acr.jpeg",
        price: 1800,
      },
      {
        id: 6,
        name: "Canon Eos 1500D",
        imageUrl:
          "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201806/canon_1500D.jpeg?kxdzvzU56qKevt.lbD48KrvgIc0TRfHa",
        price: 1400,
      },
      {
        id: 7,
        name: "Pentax k-70",
        imageUrl:
          "https://www.adorama.com/alc/wp-content/uploads/2017/06/pentax-e1496317062423.jpg",
        price: 18,
      },
      {
        id: 8,
        name: "Sony",
        imageUrl:
          "https://www.adorama.com/alc/wp-content/uploads/2017/06/1492714448000_IMG_784473-e1496317176185.jpg",
        price: 14,
      },
      {
        id: 9,
        name: "Olympus Tough",
        imageUrl:
          "https://www.adorama.com/alc/wp-content/uploads/2017/06/olympus-e1496316952792.jpg",
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: "Drones",
    routeName: "drones",
    items: [
      {
        id: 10,
        name: "DJI Mavic Air 2",
        imageUrl:
          "https://images.unsplash.com/photo-1551475957-4bf213ef272d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80",
        price: 220,
      },
      {
        id: 11,
        name: "DJI Phantom 4",
        imageUrl:
          "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        price: 280,
      },
      {
        id: 12,
        name: "Parrot Anafi",
        imageUrl:
          "https://images.unsplash.com/photo-1564518459418-e965f6dcdd8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        price: 110,
      },
      {
        id: 13,
        name: "DJI Inspire 2",
        imageUrl:
          "https://images.unsplash.com/photo-1588363959957-a661f2dc6f05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        price: 160,
      },
      {
        id: 14,
        name: "DJI Mavic Mini",
        imageUrl:
          "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        price: 160,
      },
      {
        id: 15,
        name: "Altair Aerial",
        imageUrl:
          "data:image/jpeg;base64,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",
        price: 160,
      },
      {
        id: 16,
        name: "Syma X20 Mini Drone",
        imageUrl:
          "https://media.wired.com/photos/5e3c78203130b10008e82c5e/master/w_1600%2Cc_limit/Gear-syma-x20-small-SOURCE-Symatoys.jpg",
        price: 190,
      },
      {
        id: 17,
        name: "Propel Starfighter",
        imageUrl:
          "https://media.wired.com/photos/5e3c78a4e601630009b7e7c7/master/w_1600%2Cc_limit/Gear-X-Wing-Drone-SOURCE-Amazon.jpg",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: "Lenses",
    routeName: "lenses",
    items: [
      {
        id: 18,
        name: "Sigma 70-200mm",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/yJFL34hXEK7LYR8oDwFohS-650-80.jpg",
        price: 125,
      },
      {
        id: 19,
        name: "Tamron 100-400mm",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/waDhYNC2SuPMvT9smCfFrR-650-80.jpg",
        price: 190,
      },
      {
        id: 20,
        name: "Sigma 150-600mm ",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/rURFHci46b5F9dhQyJFsdW-650-80.jpg",
        price: 190,
      },
      {
        id: 21,
        name: "Canon RF 70-200mm",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/qjcJezJEmtBoWVmEahiJd7-650-80.jpg",
        price: 165,
      },
      {
        id: 22,
        name: "Sigma 50mm f/1.4 ",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/eKHhpZajdvCxa4HovcaDvQ-650-80.jpg",
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: "Gopros",
    routeName: "gopros",
    items: [
      {
        id: 23,
        name: "GoPro Hero8 Black",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/K7UGBYBspqMXParCByBo3J-650-80.jpg",
        price: 250,
      },
      {
        id: 24,
        name: "GoPro Max",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/SMt7PKJoRPgt5mv7MDuYBU-650-80.jpg",
        price: 200,
      },
      {
        id: 25,
        name: "GoPro Hero7 Black",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/E4oC45HkpConKNjATpjjZh-650-80.jpg",
        price: 800,
      },
      {
        id: 26,
        name: "oPro Hero7 Silver",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/ktqwjoRhHsC2WgjissaTHQ-650-80.jpg",
        price: 800,
      },
      {
        id: 27,
        name: "GoPro Fusion",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/sMEDLgJSN6KLT2MYioTCgW-650-80.jpg",
        price: 405,
      },
      {
        id: 28,
        name: "Yi 4K Plus Action Cam",
        imageUrl:
          "https://cnet1.cbsistatic.com/img/DjDpNFXqg52tX8qY-wRGBuyv0Dw=/756x425/2017/01/09/165f4d1a-e37e-480f-818c-625bbcf9350d/yi-4k-plus-2.jpg",
        price: 135,
      },
      {
        id: 29,
        name: "Akaso V50 Elite",
        imageUrl:
          "https://cnet4.cbsistatic.com/img/pi0uBP50XhCny6XaksOv-6KY3HI=/756x425/2019/11/11/b9f1b0cc-2af6-4557-b9e8-920b3828beec/akaso-v50-elite.jpg",
        price: 200,
      },
    ],
  },
  {
    id: 5,
    title: "Camcorders",
    routeName: "camcorders",
    items: [
      {
        id: 30,
        name: "Canon XA40",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/4xnMsiioAWwik2nAoBngSX-650-80.jpg",
        price: 325,
      },
      {
        id: 31,
        name: "Panasonic HC-X1000e",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/MCKyjZc4qQazM3dHoDkDUQ-650-80.jpg",
        price: 120,
      },
      {
        id: 32,
        name: "Canon Vixia HF G21",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/VB4Qq4BxaPFboRRZFJZTFZ-650-80.jpg",
        price: 205,
      },
      {
        id: 33,
        name: "Sony FS5 II",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/cA8TJ2H9HSnhYzdC7wzt8W-650-80.jpg",
        price: 205,
      },
      {
        id: 34,
        name: "JVC Everio GZ-R405 ",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/eERm9wZiCwNkrtJkM4VihW-650-80.jpg",
        price: 400,
      },
      {
        id: 35,
        name: "Canon Vixia HF G60",
        imageUrl:
          "https://cdn.mos.cms.futurecdn.net/DHygnj4Gr5NvpSES2Th5kM-650-80.jpg",
        price: 250,
      },
    ],
  },
];

export default SHOP_DATA;
