# React Product Store

A React application that fetches products from DummyJSON API via Axios, displays them in a grid, and uses Redux Toolkit to manage a shopping cart.

## Features

- **Product Listing**: Fetches products from DummyJSON API and displays them in a 3-column grid
- **Shopping Cart**: Add products to cart, remove products, and adjust quantities
- **State Management**: Redux Toolkit with createSlice, useSelector, and useDispatch
- **Real-time Updates**: Cart total and item count update automatically

## Tech Stack

- React 18
- Redux Toolkit
- Axios
- Vite (build tool)

## Getting Started

### Prerequisites

- Node.js installed (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open  http://localhost:5173 in your browser

## Project Structure

```
src/
├── components/
│   └── CartPanel.jsx      # Cart panel component
├── features/
│   └── cart/
│       └── cartSlice.js   # Redux cart slice
├── store/
│   └── index.js           # Redux store configuration
├── App.jsx               # Main application component
├── main.jsx              # React entry point
└── style.css             # Styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API

- Products data from: https://dummyjson.com/products

## License

MIT

