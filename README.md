# Chef Gemini 🧑‍🍳

A smart recipe generator powered by Google's Gemini AI that creates personalized recipes based on the ingredients you have on hand.

![Chef Gemini](./public/images/chef.jpg)

## 🌟 Overview

Chef Gemini is a React-based web application that helps you make the most of your available ingredients. Simply input what you have in your kitchen, and let the AI-powered chef create delicious recipes tailored to your ingredients.

## ✨ Features

- **Intelligent Recipe Generation**: Utilizes Google's Gemini 2.5 Flash model to create custom recipes
- **Ingredient Management**: Easy-to-use interface for adding and tracking ingredients
- **Markdown-Formatted Recipes**: Clean, readable recipe output with structured sections
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Real-Time Updates**: Dynamic UI that responds to your ingredient additions
- **Minimum Ingredient Requirement**: Ensures you have at least 4 ingredients before generating recipes

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gemini-chef.git
   cd gemini-chef
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

   **Important**: Never commit your API key to version control. The `.env` file should be listed in `.gitignore`.

   To get a Gemini API key:
   - Visit the [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Enable the Generative Language API in your Google Cloud Console

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎯 Usage

1. **Add Ingredients**: Type in the ingredients you have available (e.g., "tomatoes", "garlic", "pasta")
2. **Build Your List**: Click "Add ingredient" to add each item to your list
3. **Generate Recipe**: Once you have at least 4 ingredients, click "Get a recipe"
4. **Enjoy**: The AI will generate a custom recipe with instructions and notes

## 🏗️ Project Structure

```
gemini-chef/
├── components/
│   ├── HeaderFile.jsx      # Application header with branding
│   ├── MainBody.jsx         # Main application logic and state management
│   ├── Form.jsx             # Ingredient input form
│   ├── Recipe.jsx           # Recipe display component
│   └── gemini.js            # Gemini API integration
├── src/
│   ├── main.jsx             # Application entry point
│   ├── App.jsx              # Root component (placeholder)
│   └── index.css            # Global styles
├── public/
│   └── images/              # Static assets
├── package.json             # Project dependencies
└── vite.config.js           # Vite configuration
```

## 🛠️ Technologies Used

- **React 19.2.0**: UI framework
- **Vite 7.2.2**: Build tool and development server
- **Google Gemini AI**: Recipe generation
- **react-markdown**: Markdown rendering
- **ESLint**: Code linting and quality

## ⚠️ Error Handling

### 503 Service Unavailable

If you encounter an error like:
```
ApiError: {"error":{"code":503,"message":"The model is overloaded. Please try again later.","status":"UNAVAILABLE"}}
```

This means the Gemini API is temporarily experiencing high traffic. To handle this:

- **Wait and Retry**: The issue is usually temporary. Wait a few moments and try again.
- **Implement Retry Logic**: For production use, consider adding exponential backoff retry logic.
- **Check API Status**: Monitor the [Google Cloud Status Dashboard](https://status.cloud.google.com/) for service updates.

### 404 Errors

If you see 404 errors related to the API endpoint, verify that:
- Your API key is correctly set in the `.env` file
- The `VITE_` prefix is included in the environment variable name
- You've restarted the development server after adding the `.env` file

## 🔒 Security Best Practices

- **Never hardcode API keys** in your source code
- Always use environment variables for sensitive data
- Add `.env` to your `.gitignore` file
- For production deployments, use secure environment variable management provided by your hosting platform

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

To preview the production build locally:
```bash
npm run preview
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powering the recipe generation
- React team for the amazing framework
- Vite for the blazing-fast development experience

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Happy Cooking! 🍳**