# language: fr

Fonctionnalité: Formulaire de contact
  En tant que client potentiel
  Je veux envoyer ma demande de traduction depuis le site
  Afin d'être recontacté au sujet de ma soumission, sans que les coordonnées directes soient affichées

  Contexte:
    Étant donné que je visite la page d'accueil

  Scénario: Le formulaire affiche les champs attendus
    Alors le formulaire de contact est visible
    Et les champs "Nom", "Courriel", "Type de service", "Combinaison de langues", "Message" sont présents

  Scénario: Le message est limité à 2000 caractères
    Quand je saisis un message de 2001 caractères
    Alors le champ message contient 2000 caractères

  Scénario: Un compteur affiche le nombre de caractères utilisés
    Quand je saisis un message de 150 caractères
    Alors le compteur affiche "150 / 2000"

  Scénario: Un formulaire vide n'est pas envoyé
    Quand j'envoie le formulaire sans le remplir
    Alors une erreur est affichée pour le champ "Nom"
    Et une erreur est affichée pour le champ "Courriel"
    Et une erreur est affichée pour le champ "Message"
    Et aucune demande n'est envoyée

  Plan du scénario: Un champ obligatoire manquant est signalé
    Quand je remplis le formulaire sauf le champ "<champ>"
    Et j'envoie le formulaire
    Alors une erreur est affichée pour le champ "<champ>"
    Et aucune demande n'est envoyée

    Exemples:
      | champ    |
      | Nom      |
      | Courriel |
      | Message  |

  Scénario: Un message composé seulement d'espaces est refusé
    Quand je remplis le formulaire avec un message composé seulement d'espaces
    Et j'envoie le formulaire
    Alors une erreur est affichée pour le champ "Message"
    Et aucune demande n'est envoyée

  Scénario: Un courriel invalide est refusé
    Quand je remplis le formulaire avec le courriel "pas-un-courriel"
    Et j'envoie le formulaire
    Alors une erreur est affichée pour le champ "Courriel"
    Et aucune demande n'est envoyée

  Scénario: Un envoi réussi affiche une confirmation
    Étant donné que le service d'envoi répond avec succès
    Quand je remplis le formulaire avec des données valides
    Et j'envoie le formulaire
    Alors un message de confirmation est affiché
    Et la demande est envoyée par une connexion sécurisée

  Scénario: Une erreur du service affiche un message d'erreur et conserve le texte saisi
    Étant donné que le service d'envoi est indisponible
    Quand je remplis le formulaire avec des données valides
    Et j'envoie le formulaire
    Alors un message d'erreur est affiché
    Et le message saisi est conservé

  Plan du scénario: Les libellés du formulaire et la mention de confidentialité correspondent à la langue active
    Quand je change la langue pour "<langue>"
    Alors les libellés du formulaire correspondent à la langue "<langue>"
    Et la mention de confidentialité correspond à la langue "<langue>"

    Exemples:
      | langue |
      | fr     |
      | es     |
      | de     |
      | en     |

  Scénario: La mention de confidentialité est affichée près du formulaire
    Alors la mention de confidentialité est visible

  Scénario: Le formulaire explique comment transmettre les documents
    Alors une consigne sur la transmission des documents est visible

  Scénario: Les coordonnées directes ne sont plus affichées
    Alors aucun lien mailto vers une adresse autre que "info@tradumyre.de" n'est affiché
    Et aucun lien tel n'est affiché

  Scénario: Le bouton de demande de soumission mène au formulaire
    Quand je clique sur le bouton de demande de soumission
    Alors le formulaire de contact est visible
