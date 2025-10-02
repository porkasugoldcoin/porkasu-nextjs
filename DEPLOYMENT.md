# Deployment Setup

## GitHub Actions Deployment to Vercel

This repository is configured with GitHub Actions to automatically deploy to Vercel when changes are pushed to the main branch.

### Required GitHub Secrets

To enable automatic deployment, you need to add the following secrets to your GitHub repository:

1. Go to your GitHub repository
2. Click on "Settings" tab
3. Click on "Secrets and variables" → "Actions"
4. Click "New repository secret" and add each of the following:

#### VERCEL_TOKEN
- **Name**: `VERCEL_TOKEN`
- **Value**: `bRUxqUt1aLzt2TuoM0s7xR9`

#### VERCEL_ORG_ID
- **Name**: `VERCEL_ORG_ID`
- **Value**: `3DpD4cqikicuSIydlXYRJ4BZ`

#### VERCEL_PROJECT_ID
- **Name**: `VERCEL_PROJECT_ID`
- **Value**: `prj_tdOnLF0XH8CqBl8gnTtN0LFAoonE`

### How it works

1. **Automatic Trigger**: The workflow runs automatically when:
   - Code is pushed to the `main` branch
   - Pull requests are created targeting the `main` branch

2. **Build Process**:
   - Checks out the code
   - Sets up Node.js 18
   - Installs dependencies with `npm ci`
   - Builds the project with `npm run build`
   - Deploys to Vercel using the provided credentials

3. **Deployment**: The site will be automatically deployed to Vercel production environment

### Manual Deployment

If you need to trigger a manual deployment, you can:
1. Go to the "Actions" tab in your GitHub repository
2. Select the "Deploy to Vercel" workflow
3. Click "Run workflow"

### Troubleshooting

- Ensure all secrets are correctly set in GitHub repository settings
- Check the Actions tab for any deployment errors
- Verify that the Vercel project ID and organization ID are correct
- Make sure the Vercel token has the necessary permissions
