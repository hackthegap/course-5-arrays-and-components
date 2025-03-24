# Banking App with User Transactions 🏦💳

**- Created by: Fabricio Braga**
**- Last update: March, 24th**

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.0.0-orange)

A simple React banking application that demonstrates component composition, state management, and data flow between parent and child components. The app displays users and their financial transactions in a clean 3-column grid layout.

## Features ✨

- View multiple users with their transaction histories
- Add deposit or withdrawal transactions to any user
- Color-coded transaction types (green for deposits, red for withdrawals)
- Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Clean, modern UI with intuitive controls

## Screenshot 🖼️

![Banking App Screenshot](./public/screenshot.png)

## Installation ⚙️

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/bank-app.git
   cd bank-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in your browser**:
   The app will automatically open at [http://localhost:5173](http://localhost:5173)

## Project Structure 📁

```
bank-app/
├── public/
├── src/
│   ├── components/
│   │   ├── User.jsx
│   │   └── TransactionList.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
└── README.md
```

## Available Scripts 🛠️

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run lint`: Runs ESLint
- `npm run preview`: Previews the production build

## Dependencies 📦

- React 18
- Vite 4
- React DOM

## Customization 🎨

You can easily customize this app by:

1. Adding more users in `App.jsx`
2. Modifying transaction amounts in the action buttons
3. Changing the color scheme in `App.css`
4. Adding new transaction types

## Contributing 🤝

Contributions are welcome! Please open an issue or submit a pull request.
