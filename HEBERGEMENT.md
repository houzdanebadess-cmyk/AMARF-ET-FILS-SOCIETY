# Héberger le site vous-même

## Prérequis
- Node.js 22 (https://nodejs.org)
- Un compte GitHub (https://github.com) et un compte Netlify (https://netlify.com)

## 1. Mettre le code sur GitHub
1. Créez un dépôt (repository) nommé par exemple `amarf-site`.
2. Uploadez **TOUS** les fichiers et dossiers du ZIP (package.json, src/, public/, etc.) — tout, sans exception.

## 2. Connecter Netlify
1. Sur Netlify : **Add new site → Import an existing project → GitHub**.
2. Choisissez le dépôt `amarf-site`.
3. Réglages de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
   - **NODE_VERSION** (dans Environment variables) : `22`
4. Cliquez **Deploy**. Patientez 3 à 5 minutes.

## 3. À chaque modification
Dites-moi ce que vous voulez changer → je vous donne un nouveau ZIP → vous remplacez les fichiers sur GitHub → Netlify redéploie tout seul.

## Alternative : serveur VPS (avancé)
- `npm install && npm run build`
- Avec Node : `NITRO_PRESET=node-server npm run build`, puis `node dist/server/index.mjs`
