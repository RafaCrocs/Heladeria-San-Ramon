



const productos = {
    cafes:[
        { nombre: "Americano ", imagen:"Americano", llevaTamannos: true },
        { nombre: "Capuchino ", imagen:"Capuchino", llevaLeche: true, llevaSaborizantes: true, llevaTamannos: true },
        { nombre: "Mokaccino ", imagen:"Mokaccino", llevaLeche: true, llevaTamannos: true },
        { nombre: "Latte ", imagen:"Latte", llevaLeche: true, llevaSaborizantes: true },
        { nombre: "Chocolate Caliente ", imagen:"ChocolateCaliente", llevaLeche: true, llevaTamannos: true},
        { nombre: "Espresso ", imagen:"Espresso" },
        { nombre: "Espresso Doble ", imagen:"EspressoDoble" },
        { nombre: "Macchiato ", imagen:"Macchiato", llevaLeche: true },
        { nombre: "Cortado ", imagen:"Cortado", llevaLeche: true },
        { nombre: "Flat White ", imagen:"FlatWhite", llevaLeche: true },
        { nombre: "Matcha Caliente ", imagen:"MatchaCaliente" }
    ],
    batidos:[
        { nombre: "Piña"},
        { nombre: "Banano"},
        { nombre: "Mango"},
        { nombre: "Naranja"},
        { nombre: "Papaya"},
        { nombre: "Kiwi"},
        { nombre: "Sandia"},
        { nombre: "Fresa"},
        { nombre: "Mora"},
        { nombre: "Maracuya"},
        { nombre: "Guanabana"},
        { nombre: "Melocoton"},
        { nombre: "Arandano"},
        { nombre: "Coco"},
    ],
    frios:[
            { nombre: "Iced Latte", imagen:"IcedLatte", llevaLeche: true, llevaSaborizantes: true },
            { nombre: "Cold Brew", imagen:"ColdBrew"},
            { nombre: "Cold Brew Latte", imagen:"ColdBrewLatte", llevaLeche: true, llevaSaborizantes: true },
            { nombre: "Iced Americano", imagen:"IcedAmericano", llevaTamannos: true },
            { nombre: "Affogato El Jardin", imagen:"AffogatoElJardin"},
            { nombre: "Affogato", imagen:"Affogato"},
            { nombre: "Shake Coffe House", imagen:"ShakeCoffeeHouse", llevaLeche: true, llevaSaborizantes: true },
            { nombre: "Frappuccino", imagen:"Frappuccino", llevaLeche: true, llevaSaborizantes: true },
            { nombre: "Iced Chocolate", imagen:"IcedChocolate", llevaLeche: true, llevaHelado: true },
            { nombre: "MilkShake", imagen:"MilkShake", llevaHelado: true },
            { nombre: "Matcha", imagen:"Matcha", llevaLeche: true, opcionesMatcha: true },
            { nombre: "Jugo Verde", imagen:"JugoVerde", opcionesJugoVerde: true, llevaSaborizantesNaturales: true },
            { nombre: "Granizado", imagen:"Granizado", llevaHelado: true },
            { nombre: "Refresher", imagen:"Refresher", opcionesRefresher: true, llevatoppingsRefresher: true },
            { nombre: "Taro", imagen:"Taro", llevaToppingTaro: true },
            { nombre: "Limonada", imagen:"Limonada", opcionesLimonada: true },
            { nombre: "Piña Colada", imagen:"PiñaColada", llevaLeche: true },
    ],
    especiales:[
        { nombre: "Ensalada de Frutas", imagen:"EnsaladaFrutas", llevaHelado: true },
        { nombre: "Banana Split", imagen:"BananaSplit", llevaHelado: true },
        //{ nombre: "Crepa", imagen:"Crepa", opcionesCrepa: true, llevaHelado: true },
        { nombre: "Sundae", imagen:"Sundae", llevaHelado: true, llevaSirope: true },
    ],
    reposteria:[
        { nombre: "Sandwich Regular", imagen:"SandwichRegular" },
        { nombre: "Sandwich Jamon de Pavo", imagen:"SandwichJamonDePavo" },
        { nombre: "Sandwich Roast Beef", imagen:"SandwichRoastBeef" },
        { nombre: "Croissant", imagen:"Croissant" },
        { nombre: "Bruschetta", imagen:"Bruschetta" }


    ],
    postres:[
        {nombre: "Postre Decorado", imagen:"PostreDecorado" },
        { nombre: "Cheesecake Fresa", imagen:"CheesecakeFresa" },
        { nombre: "Cheesecake Maracuya", imagen:"CheesecakeMaracuya" },
        { nombre: "Cheesecake Mora", imagen:"CheesecakeMora" },
        {nombre: "Red Velvet", imagen:"RedVelvet" },
        { nombre: "Tres Leches", imagen:"TresLeches" },
        { nombre: "Flan de Coco", imagen:"FlanDeCoco" },
        { nombre: "Flan de Caramelo", imagen:"FlanDeCaramelo" },
        { nombre: "Tiramisú", imagen:"Tiramisu" },
        { nombre: "Brownie", imagen:"Brownie" },
    ]

}

const opcionesTamannos = ["Tamaño?","Pequeño", "Grande"];
const opcionesLecheCafes = ["Tipo de Leche","Regular", "Delactomy", "Semi Descremada", "Almendra", "Avena"];
const opcionesLecheBatidos = ["Tipo de Leche","Agua/Sin Leche", "Regular", "Delactomy", "Semi Descremada", "Almendra", "Avena"];
const opcionesSaborizantes = ["Saborizante","Sin Saborizante", "Vainilla", "Caramelo", "Crema Avellanas", "Crema Irlandesa", "Chocolate Oscuro", "Nuez", "Menta", "Amaretto"];
const opcionesHelados = ["Helado","Sin Helado", "Helado Vainilla", "Helado Chocolate", "Helado Fresa", "Helado Chocochips", "Helado Galleta", "Helado Ron Con Frutas", "Helado Caramelo Vainilla", "Helado Ron Con Pasas", "Helado Napolitano", "Helado Coco", "Helado FresaNieve", "Helado Naranja Piña", "Helado Combinado", "Helado Chicle"];
const opcionesMatcha = ["Matcha...","Matcha Regular", "Matcha Mango", "Matcha Fresa"];
const opcionesJugoVerde = ["Jugo Verde en...","En Agua", "En Limonada", "En jugo Naranja"];
const opcionesSaborizantesNaturales = ["Saborizante Natural","Sin Saborizante", "Piña", "Manzana Verde"];
const opcionesRefresher = ["Refresher de...","Fresa", "Mango", "Maracuya","Arandano", "Manzana Verde", "Sandia"];
const opcionestoppingsRefresher = ["Topping","Sin topping", "Bubble Fresa", "Bubble Mango", "Bubble Maracuya", "Bubble Arandano", "Bubble Sandia", "Bubble Melocoton", "Bubble Manzana Verde"];
const opcionesToppingTaro = ["Topping","Sin Topping", "Con Tapioca"];
const opcionesLimonada = ["Limonada...","Limonada Regular", "Limonada Fresa"];
const BatidoRapidoAgua = ["Batido en Agua #?","1", "2", "3", "4", "5", "6"];
const BatidoRapidoLeche = ["Batido en Leche #?","1", "2", "3", "4", "5"];
const opcionesCrepa = ["Crepa #?","1", "2", "3", "4"];
const opcionesSiropes = ["Sirope","Sin Sirope", "Sirope Fresa", "Sirope Caramelo", "Sirope Chocolate"];


function buscarProducto(nombre) {
    return productos.cafes.find(p => p.nombre === nombre) ||
        productos.frios.find(p => p.nombre === nombre) ||
        productos.especiales.find(p => p.nombre === nombre) ||
        productos.reposteria.find(p => p.nombre === nombre) ||
        productos.postres.find(p => p.nombre === nombre);
}

