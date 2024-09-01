The frontend application is built using React and is designed to provide a user-friendly interface for generating comedy scripts. Users can input a theme, and the application will display a generated script.
Features

    User input form for entering a theme.
    Script generation based on the theme.
    Display of the generated comedy script.

Deployment

The frontend is deployed on Vercel. You can access it via your Vercel deployment URL.
Setup

To run the frontend locally:

    Clone the repository:

    bash

git clone https://github.com/your-repo/frontend.git
cd frontend

Install dependencies:

bash

npm install

Start the development server:

bash

    npm start

Known Issues

    When clicking "Generate Script," you might see the message "Failed to generate script. Please try again." This issue is due to the GPT-4 model being a premium feature, which requires an appropriate API plan. To resolve this, ensure you have a valid OpenAI API key with sufficient quota.