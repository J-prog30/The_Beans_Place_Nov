import imgColombianSupremo from "../assets/Colombian-Supremo-Bag.png";
import imgEthiopianHarrar from "../assets/Ethiopian-Harrar-Bag.png";
import imgGuatemalaAntigua from "../assets/Guatemala-Antigua-Bag.png";
import imgKenyaAA from "../assets/Kenya-AA-Bag.png";
import imgKona from "../assets/Kona-Bag.png";
import imgPanamaGeisha from "../assets/Panama-Geisha.png";

export const products = [
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
