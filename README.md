# Project Setup Guide

## Step 1: Clone the Repository
- Clone the desired repository from its source.
  
## Step 2: Switch to the Development Branch
- Change to the `dev` branch:
  - `git fetch`
  - `git checkout dev`

## Step 3: Install PNPM
- Install PNPM globally using npm:
  - `npm install -g pnpm`

## Step 4: Install Libraries
- Use PNPM to install necessary libraries:
  - `pnpm install`

## Step 5: Install gcloud CLI
- Follow the steps from the official Google Cloud documentation to install gcloud CLI:
  - Google Cloud SDK Installation: https://cloud.google.com/sdk/docs/install
- If auto-initialization was not selected during installation, refer to the following Google Cloud documentation to initialize manually:
  - Google Cloud SDK Initialization: https://cloud.google.com/sdk/docs/initializing
- Ensure you save the following initialization parameters, as they will be required for the configuration file:
  - PROJECT_LOCATION
  - PROJECT_ID
- Create local authentication credentials for your Google Account using this command:
  - `gcloud auth application-default login`

## Step 6: Configuration File
- Due to the use of third-party software and for security reasons, it is necessary to configure a `.env` file which will store all application information.
- To obtain this file, contact the following administrators of the repository:
  - jpcifuentes16
    - Email: josepablocif16@gmail.com
  - OJP98
    - Email: ojuarez_p@hotmail.com
  - LCEST
    - Email: lcesturban10@gmail.com
- The file should include the following parameters:
  - PROJECT_LOCATION = Google Cloud Compute Region
  - PROJECT_ID = Google Cloud Project ID
  - MODEL = Gemini model
  - SITE = Project host URL
  - MUX_TOKEN_ID = MUX ID for video
  - MUX_TOKEN_SECRET = Secret token for MUX
  - ENVIRONMENT = Testing or Production

## Step 7: Run the Project
- Start the project using PNPM:
  - `pnpm run dev`
