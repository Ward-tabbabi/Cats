import "./App.css";
import Cards from "./Component/Cards";

function App() {
  const cats = [
    {
      race: "Angora turc",
      region: "Turquie",
      poids: "3 à 4 kg",
      tete: "Petite à moyenne, triangulaire",
      yeux: "Grands, en amande,yellow and green",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/Frane_du_clos_dame_Gilles.jpg",
      description:
        "Le chat Angora turc est une race pure et naturelle originaire de Turquie qui emprunte son nom à la capitale de la Sublime Porte, qui fut rebaptisée Ankara dans les années trente. L’Angora Turc est évoqué par Buffon dans sa monumentale Histoire Naturelle. C’est entre 1623 et 1630 qu’un Italien, Pietro Delle Valle, remarque ce chat à la fourrure blanche mi-longue, si différent des chats européens à poil court, et l’importe en occident. L’Angora turc devient vite le chat de la cour des rois de France et tout particulièrement Louis XV. Les nobles européens adoptent ce royal cadeau et le traitent avec grand respect.",
    },
    {
      race: "American wirehair",
      region: "États-Unis",
      poids: "5 à 6 kg ",

      tete: "Taille moyenne",
      yeux: "Arrondis, placés de biais",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/American_Wirehair_-_CFF_cat_show_Heinola_2008-05-04_IMG_8721.JPG/800px-American_Wirehair_-_CFF_cat_show_Heinola_2008-05-04_IMG_8721.JPG",
      description:
        "When settlers sailed from Europe to North America, they carried cats on board (ships' cats) to protect the stores from mice[3]—for instance, the cats that came over on the Mayflower with the Pilgrims to hunt rats on the ship and in the colony.[4] Many of these cats landed in the New World, interbred, and developed special characteristics to help them cope with their new life and climate. Early in the 20th century, a selective breeding program was established to develop the best qualities of these cats. The American Shorthair is a pedigree cat breed, with a strict conformation standard, as set by cat fanciers of the breed and the North American cat fancier associations such as The International Cat Association (TICA)[5] and the Cat Fanciers' Association. The breed is accepted by all North American cat registries. Originally known as the Domestic Shorthair, the breed was renamed in 1966 to the 'American Shorthair' to better represent its 'all-American' origins and to differentiate it from other shorthaired breeds. The name 'American Shorthair' also reinforces the fact that the breed is a pedigreed breed distinct from the random-bred non-pedigreed domestic short-haired cats in North America, which may nevertheless resemble the ASH. Both the American Shorthair breed and the random-bred cats from which the breed is derived are sometimes called working cats because they were used for controlling rodent populations, on ships and farms. American shorthair (then referred as Domestic shorthair) was among the first five breeds that were considered as registered cat breeds by CFA during 1906.[3][6]",
    },
    {
      race: "Abyssin",
      region: "Asie",
      poids: "3 à 5,5 kg",
      tete: "Triangulaire, front bombé",
      yeux: "Grands, en amande, de couleur green",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Valentino.jpg/800px-Valentino.jpg",
      description:
        "L’Abyssin est un chat intelligent, malin, indépendant et vif, mais qui demande beaucoup de tendresse. Il réclame d’être caressé très souvent et le fait savoir en se frottant contre son maître en ronronnant. L’Abyssin sait aussi se faire comprendre avec des miaulements insistants. Il s’attache principalement à une seule personne mais il lui plait de vivre dans une famille nombreuse. L’Abyssin est aussi très agile et il adore jouer avec son maître. Il a un grand besoin d’activité physique.",
    },
    {
      race: "Bengal",
      region: "États-Unis",
      poids: " 5 a 10 KG",
      tete: "Triangle aux contours arrondis",
      yeux: "Grands, ovales et bien espacés",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/9/9f/BengalCat_Stella.jpg",
      description:
        "Le chat Bengal est doté d’une grande sensibilité et est très attentif à l’humeur des gens qui l’entourent. Ces caractéristiques, faisant de lui un très bon animal de compagnie, lui permettent de s’adapter facilement à n’importe quel milieu domestique et de nouer des liens d’amitié avec des personnes de tout âge. Grâce à son tempérament très amical, il s’adaptera au maître qui l’appréciera et réussira à faire de lui un « petit léopard domestique ». Son besoin de mouvement et de liberté est la seule chose à respecter.",
    },
  ];
  return (
    <div className="App">
      {cats.map((el) => (
        <Cards cat={el} />
      ))}
    </div>
  );
}

export default App;
