// Récupération des éléments HTML nécessaires
const nationalityInput = document.querySelector('#nationality');
const gouvernoratsDiv = document.querySelector('#gouvernorats');
const paysDiv = document.querySelector('#pays');

// Fonction pour afficher/masquer les options en fonction de la nationalité sélectionnée
function toggleOptions() {
  if (nationalityInput.value === 'Tunisien') {
    // Affichage des options pour le choix du gouvernorat et masquage de l'option pour le pays
    gouvernoratsDiv.style.display = 'block';
    paysDiv.style.display = 'none';
  } else if (nationalityInput.value === 'Etranger') {
    // Affichage de l'option pour le pays et masquage des options pour le choix du gouvernorat
    gouvernoratsDiv.style.display = 'none';
    paysDiv.style.display = 'block';
  } else {
    // Si aucune nationalité n'est sélectionnée, on masque toutes les options
    gouvernoratsDiv.style.display = 'none';
    paysDiv.style.display = 'none';
  }
}

// Ajout d'un événement pour détecter le changement de sélection dans le menu déroulant
nationalityInput.addEventListener('change', toggleOptions);

// Appel initial de la fonction pour afficher/masquer les options en fonction de la nationalité sélectionnée
toggleOptions();
