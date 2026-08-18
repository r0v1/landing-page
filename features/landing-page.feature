# language: fr

Fonctionnalité: Structure et contenu de la page d'accueil
  En tant que visiteur de villalva.ca
  Je veux que chaque section soit présente avec un titre clair, dans la bonne langue
  Afin de trouver les services, les tarifs et les coordonnées

  Contexte:
    Étant donné que je visite la page d'accueil

  Scénario: La langue par défaut est le français
    Alors le titre de la page est "Roberto Villalva – Traducteur agréé OTTIAQ"
    Et le bouton de langue "FR" est actif

  Scénario: Les cinq liens de navigation et les boutons de langue sont présents
    Alors la navigation contient des liens vers les sections "Accueil", "À propos", "Services", "Tarification", "Contact"
    Et les boutons de langue "FR", "ES", "DE", "EN" sont présents

  Plan du scénario: Les libellés de navigation, les titres de section et les titres de tuiles correspondent à la langue active
    Quand je change la langue pour "<langue>"
    Alors les libellés de navigation correspondent à la langue "<langue>"
    Et le titre de chaque section correspond à la langue "<langue>"
    Et le titre de chaque tuile de service correspond à la langue "<langue>"

    Exemples:
      | langue |
      | fr     |
      | es     |
      | de     |
      | en     |

  Scénario: La section de référence de ma collègue est présente
    Alors la section collègue a un titre
    Et un lien vers le site de Josianne Myre est présent
    Et un lien mailto vers "info@tradumyre.de" est présent

  Plan du scénario: Le lien vers ma collègue correspond à la version linguistique de son site
    Quand je change la langue pour "<langue>"
    Alors le lien vers ma collègue pointe vers "<url>"

    Exemples:
      | langue | url                      |
      | fr     | https://tradumyre.de/fr/ |
      | de     | https://tradumyre.de/de/ |
      | en     | https://tradumyre.de/en/ |
      | es     | https://tradumyre.de/en/ |

  Scénario: Les liens de contact sont utilisables
    Alors un lien mailto vers "roberto@villalva.ca" est présent
    Et un lien tel vers "5145006472" est présent

  Plan du scénario: Le site reste utilisable à différentes tailles d'écran
    Quand j'affiche le site en format "<taille>"
    Alors le logo est visible
    Et les 5 liens de navigation sont visibles
    Et la section héros est visible
    Et chaque section principale est visible

    Exemples:
      | taille   |
      | mobile   |
      | tablette |
      | desktop  |