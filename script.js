const userInp = document.querySelector('#user-input');
const resultList = document.querySelector('.result-list');
const notFound = document.querySelector('#not-found');
const searchBtn = document.querySelector('#search-btn');
const imageBox= document.querySelector('.image-box')

const products = [
  'Laptop',
  'Smartphone',
  'Headphones',
  'Desk Chair',
  'Coffee Table',
  'Running Shoes',
  'T-shirt',
  'Blender',
  'Microwave',
  'Backpack',
  'Smartwatch',
  'Gaming Mouse',
  'Mechanical Keyboard',
  'LED Monitor',
];

const   imageList= [
    {
      name: 'Laptop',
      imageUrl:
        'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        name: 'Laptop 2',
        imageUrl:
          'https://images.pexels.com/photos/21228355/pexels-photo-21228355/free-photo-of-laptop-smarphone-and-earphones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    {
        name: 'Laptop 3',
        imageUrl:
          'https://images.pexels.com/photos/20542049/pexels-photo-20542049/free-photo-of-office-electronic-equipment-empty-screen-mockup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    {
        name: 'Laptop 4',
        imageUrl:
          'https://images.pexels.com/photos/22679367/pexels-photo-22679367/free-photo-of-electronics-on-pink-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    {
        name: 'Laptop 5',
        imageUrl:
          'https://images.pexels.com/photos/13279391/pexels-photo-13279391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    {
        name: 'Laptop 6',
        imageUrl:
          'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    {
        name: 'Laptop 7',
        imageUrl:
          'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    {
        name: 'Laptop 8',
        imageUrl:
          'https://images.pexels.com/photos/12985830/pexels-photo-12985830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    {
        name: 'Laptop 9',
        imageUrl:
          'https://images.pexels.com/photos/9414204/pexels-photo-9414204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    {
        name: 'Laptop 10',
        imageUrl:
          'https://images.pexels.com/photos/8217289/pexels-photo-8217289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },

    {
      name: 'Smartphone',
      imageUrl:
        'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Headphones',
      imageUrl:
        'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Desk Chair',
      imageUrl:
        'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Coffee Table',
      imageUrl:
        'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Running Shoes',
      imageUrl:
        'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'T-shirt',
      imageUrl:
        'https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Blender',
      imageUrl:
        'https://images.pexels.com/photos/12049999/pexels-photo-12049999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Microwave',
      imageUrl:
        'https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_1100,f_auto,q_auto/https://s3.infra.brandquad.io/accounts-media/SHRP/DAM/origin/c7c9dc3a-b720-11ec-bd5f-eecbf35dfbeb.jpg',
    },
    {
      name: 'Backpack',
      imageUrl:
        'https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Smartwatch',
      imageUrl:
        'https://images.pexels.com/photos/110471/pexels-photo-110471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Smartwatch 2',
      imageUrl:
        'https://images.pexels.com/photos/267391/pexels-photo-267391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Gaming Mouse',
      imageUrl:
        'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Gaming Mouse 2',
      imageUrl:
        'https://images.pexels.com/photos/28779690/pexels-photo-28779690/free-photo-of-futuristic-gaming-mouse-on-neon-lit-desktop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Gaming Mouse 3',
      imageUrl:
        'https://images.pexels.com/photos/6804455/pexels-photo-6804455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Gaming Mouse 4',
      imageUrl:
        'https://images.pexels.com/photos/6804455/pexels-photo-6804455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Gaming Mouse 5',
      imageUrl:
        'https://images.pexels.com/photos/17821147/pexels-photo-17821147/free-photo-of-white-computer-mouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Gaming Mouse 6',
      imageUrl:
        'https://images.pexels.com/photos/7151697/pexels-photo-7151697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Mechanical Keyboard',
      imageUrl:
        'https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'LED Monitor',
      imageUrl:
        'https://images.pexels.com/photos/7858742/pexels-photo-7858742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]



 



function showProductImage(){
    imageBox.innerHTML=''
    let itemName= userInp.value.toLowerCase().trim()
    
    const findImage= imageList.filter((el)=>{
 
        return (el.name.toLowerCase().includes(itemName))
       
    }) 
 

   const allImages= findImage.map((pic)=>{
     
                    return `<img     src=${pic.imageUrl}  alt="product-image">`;
    })



    imageBox.innerHTML= allImages
    
    }


userInp.addEventListener('input', () => {
  let inputVal = userInp.value.toLowerCase().trim();

  let result = products.filter((item) => {
    return item.toLowerCase().includes(inputVal);
  });

  // Show Product or hide all suggestion

  if (inputVal.length) {
    displayProduct(result);
    
    notFound.classList.add('hide');
  } else {
    resultList.innerHTML = '';
    notFound.classList.add('hide');
    
  }

  //    Show Not OFund

  if (inputVal.length && result.length === 0) {
    notFound.classList.remove('hide');
  }
});


searchBtn.addEventListener('click', (e)=>{

        showProductImage()
        
    
})



function displayProduct(result) {
  const output = result.map((list) => {
    return '<li onclick=selectResult(event)>' + list + '</li>';
  });
  resultList.innerHTML = output.join('');
}

// handle onclick event on li elements

function selectResult(e) {
    let productName=e.target.innerText
  
  userInp.value = productName;
  resultList.innerHTML = '';
  showProductImage()
}



