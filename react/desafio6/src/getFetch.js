const productos = [
    {
      title: "Ibuprofeno",
      price: 234.56,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-08-256.png",
      id: 1,
    },
    {
      title: "Suero",
      price: 345.67,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-31-256.png",
      id: 2,
    },
    {
      title: "Jeringa",
      price: 123.45,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-03-256.png",
      id: 3,
    },
    {
      title: "Mortero",
      price: 234.56,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-36-256.png",
      id: 4,
    },
    {
      title: "Curitas",
      price: 345.67,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-20-256.png",
      id: 5,
    },
    {
      title: "Cuentagotas",
      price: 345.67,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatibus.",
      pictureUrl:
        "https://cdn0.iconfinder.com/data/icons/health-medicine-blue/2050/Health__Medicine_Shady-14-256.png",
      id: 6,
    }
  ];
  
  const getFetch = (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id ? productos.find((producto)=>producto.id === id) : productos);
    }, 2000);
  });

  export default getFetch