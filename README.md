# Projet JWT avec Symfony et React

Ce projet implémente une application fullstack avec Symfony pour le backend et React pour le frontend, utilisant JWT pour l'authentification sécurisée.

## 1. Schéma des données

### Tables principales

#### Table `users`
| Champ          | Type           | Description                                   |
|----------------|----------------|-----------------------------------------------|
| `id`           | `int`          | Identifiant unique de l'utilisateur          |
| `email`        | `string`       | Email unique de l'utilisateur                |
| `password`     | `string`       | Mot de passe hashé                           |
| `roles`        | `json`         | Rôles attribués à l'utilisateur              |

#### Table `modules`
| Champ          | Type           | Description                                   |
|----------------|----------------|-----------------------------------------------|
| `id`           | `int`          | Identifiant unique du module                 |
| `title`        | `string`       | Titre du module                              |
| `content`      | `text`         | Contenu détaillé du module                   |
| `created_at`   | `datetime`     | Date de création                             |

### Relations
Aucune relation entre tables pour le moment.

## 2. Schéma de l'authentification avec JWT

### Processus d'authentification
1. **Inscription** :
   - L'utilisateur envoie son email et mot de passe à l'API.
   - Le mot de passe est hashé avant d'être stocké.

2. **Connexion** :
   - Après vérification des informations, un JWT est généré et envoyé au client.

3. **Accès aux routes protégées** :
   - Le client utilise le JWT pour accéder aux routes sécurisées.
   - Le serveur valide le JWT avant de fournir l'accès.

### Flux d'authentification
```plaintext
[Frontend] -- (email/password) --> [API - /login]
              <-- (JWT token) --
[Frontend] -- (Authorization: Bearer <token>) --> [API - Protected Routes]
              <-- (Data) --
