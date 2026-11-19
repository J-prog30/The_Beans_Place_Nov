import imgColombianSupremo from "../assets/Colombian-Supremo-Bag.png";
import imgEthiopianHarrar from "../assets/Ethiopian-Harrar-Bag.png";
import imgGuatemalaAntigua from "../assets/Guatemala-Antigua-Bag.png";
import imgKenyaAA from "../assets/Kenya-AA-Bag.png";
import imgKona from "../assets/Kona-Bag.png";
import imgPanamaGeisha from "../assets/Panama-Geisha.png";
import imgArabianMocha from "../assets/Arabian-Mocha-Bag.png";
import imgCostaRicaTarrazu from "../assets/Costa-Rica-Tarrazu-Bag.png";
import imgJamaicanBlueMountain from "../assets/Jamaican-Blue-Mountain-Bag.png";
import imgUrigacheffe from "../assets/Urigacheffe-Bag.png";
import imgVietnameseRobusta from "../assets/Vietnamese-Robusta.png";
import imgSulawesiToraja from "../assets/Red-Sulawesi-Bag.png";
import imgSumatraMandheling from "../assets/Sumatra-Mandheling-Bag.png";
import imgBrazilianSantos from "../assets/Brazilian-Santos-Bag.png";

export const featuredProducts = [
  {
    id: "ethiopian-harrar",
    name: "Ethiopian Harrar",
    origin: "Ethiopia",
    price: "$16.99",
    roast: "Medium",
    notes: "Blueberry, dark chocolate, wine",
    image: imgEthiopianHarrar,
    badge: "Best Seller",
  },
  {
    id: "colombian-supremo",
    name: "Colombian Supremo",
    origin: "Colombia",
    price: "$14.99",
    roast: "Medium-Dark",
    notes: "Caramel, citrus peel, cocoa",
    image: imgColombianSupremo,
    badge: null,
  },
  {
    id: "kenya-aa",
    name: "Kenya AA",
    origin: "Kenya",
    price: "$16.99",
    roast: "Light",
    notes: "Blackcurrant, jasmine, stone fruit",
    image: imgKenyaAA,
    badge: "Staff Pick",
  },
  {
    id: "panama-geisha",
    name: "Panama Geisha",
    origin: "Panama",
    price: "$19.99",
    roast: "Light",
    notes: "Tea-like florals, mango, honey",
    image: imgPanamaGeisha,
    badge: "Limited",
  },
  {
    id: "kona",
    name: "Kona",
    origin: "Hawaii",
    price: "$19.99",
    roast: "Medium",
    notes: "Macadamia, brown sugar, cocoa",
    image: imgKona,
    badge: null,
  },
  {
    id: "guatemala-antigua",
    name: "Guatemala Antigua",
    origin: "Guatemala",
    price: "$14.99",
    roast: "Dark",
    notes: "Cherry, cocoa nib, caramel",
    image: imgGuatemalaAntigua,
    badge: "New",
  },
];

export const additionalProducts = [
  {
    id: "yirgacheffe",
    name: "Yirgacheffe",
    price: "$14.99",
    roast: "Medium-Dark",
    notes: "Cocoa, walnut, floral",
    image: imgUrigacheffe,
  },
  {
    id: "vietnamese-robusta",
    name: "Vietnamese Robusta",
    price: "$19.99",
    roast: "Dark",
    notes: "Slightly mushroomy, cocoa husk, dark almond",
    image: imgVietnameseRobusta,
  },
  {
    id: "jamaican-blue-mountain",
    name: "Jamaican Blue Mountain",
    price: "$14.99",
    roast: "Light-Medium",
    notes: "Orange, cinnamon, cocoa",
    image: imgJamaicanBlueMountain,
  },
  {
    id: "arabian-mocha",
    name: "Arabian Mocha",
    price: "$19.99",
    roast: "Medium",
    notes: "Milk chocolate, dark chocolate, almond, and hazelnut",
    image: imgArabianMocha,
  },
  {
    id: "costa-rica-tarrazu",
    name: "Costa Rica Tarrazu",
    price: "$16.99",
    roast: "Light",
    notes: "Citrus, lemon, peach, apricot, and red or dark berries",
    image: imgCostaRicaTarrazu,
  },
  {
    id: "sulawesi-toraja",
    name: "Sulawesi Toraja",
    origin: "Indonesia",
    price: "$16.99",
    roast: "Medium-Dark",
    notes: "Apricot, cocoa, caramel, nutty",
    image: imgSulawesiToraja,
  },
  {
    id: "sumatra-mandheling",
    name: "Sumatra Mandheling",
    origin: "Indonesia",
    price: "$19.99",
    roast: "Medium",
    notes: "Toffee, lemongrass, dried fruits, almond",
    image: imgSumatraMandheling,
  },
  {
    id: "brazilian-santos",
    name: "Brazilian Santos",
    origin: "Brazil",
    price: "$14.99",
    roast: "Medium",
    notes: "Honey, chocolate, Brazil nut, fruity",
    image: imgBrazilianSantos,
  },
];

export const products = [...featuredProducts, ...additionalProducts];
