document.addEventListener("DOMContentLoaded", () => {

  const descriptions = {
    "droit.jpg": "Installée dans des bâtiments modernes sur le campus de Tohannic, la Faculté Droit & Science Politique de Vannes offre aux étudiants, depuis 50 ans, une formation de qualité, aux débouchés variés.",
    "lettres.jpg": "La Faculté, située sur le campus de Lorient, accueille chaque année environ 2000 étudiant·es. Nous proposons des formations de la licence au doctorat dans les domaines des lettres & langues et sciences humaines & sociales.",
    "sciences.jpg": "À la rentrée universitaire de septembre 2023, nous avons augmenté nos effectifs, essentiellement au niveau Licence (L1, L2 et L3), de plus de 15% pour atteindre près de 3000 étudiants, en Licence et Master, dont 500 hors les murs.",
    "ensibs_lorient.jpg": "Implantée au sein de l'Université de Bretagne-Sud, l’École Nationale Supérieure d’Ingénieurs de Bretagne-Sud (ENSIBS) propose six spécialités",
    "iut vannes.jpg": "L’IUT Lorient - Pontivy, c'est : 2 sites, 6 Bachelors Universitaires de Technologie (B.U.T.), 3 licences professionnelles et 650 étudiants.",
    "pontivy.jpg": "L’IUT Lorient - Pontivy, c'est : 2 sites, 6 Bachelors Universitaires de Technologie (B.U.T.), 3 licences professionnelles et 650 étudiants.",
    "iae.jpeg": "L'IAE Bretagne Sud propose une offre de formation diversifiée, allant de la 1ère année de Licence au Doctorat, en adéquation avec les besoins des entreprises, pour préparer les managers de demain."
  };
  const zone = document.getElementById("description-text");
 document.addEventListener("click", (e) => {

    const nom = e.target.getAttribute("src"); 
    zone.textContent = descriptions[nom] || "Aucune description disponible.";
  });

});

