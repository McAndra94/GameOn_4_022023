![Logo](https://user-images.githubusercontent.com/91855591/216376898-20c7a73d-815d-4892-8af2-0576fcd077ff.png)

Créez une landing page avec Javascript

- [x] TODO : fermer la modale <br />
Ajouter la fonctionnalité au bouton (x)

- [x] Implémenter entrées du formulaire <br />
 (1) Lier les labels aux entrées dans le HTML en utilisant les attributs "for" et "id" dans le code existant. Corriger le code HTML quand nécessaire. <br />
 (2) Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire : 
* Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
* Les données doivent être saisies correctement :<br />
  (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide. <br />
  (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide. <br />
  (3) L'adresse électronique est valide. <br />
  (4) Pour le nombre de concours, une valeur numérique est saisie. <br />
  (5) Un bouton radio est sélectionné. <br />
  (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.<br />
 * Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

- [x] Ajouter validation ou messages d'erreur <br />
Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé. Exemples :
* "Veuillez entrer 2 caractères ou plus pour le champ du nom."
* "Vous devez choisir une option."
* "Vous devez vérifier que vous acceptez les termes et conditions."
* "Vous devez entrer votre date de naissance."

- [x] Ajouter confirmation quand envoi réussi <br />
Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. "Merci ! Votre réservation a été reçue.")

- [x] Tests manuels <br />
* Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.
* Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)
