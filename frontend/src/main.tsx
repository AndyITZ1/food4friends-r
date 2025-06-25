import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { NotFound } from './pages/NotFound.tsx'
import { ThemeProvider } from './components/context/ThemeProvider.tsx'
import { RootLayout } from './layouts/RootLayout.tsx'
import { RecipeNew } from './pages/Recipes/RecipeNew.tsx'
import { RecipePage } from './pages/Recipes/RecipePage.tsx'

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, element: <Home /> },
      { path: "recipes",
        children: [
          { path: "new", element: <RecipeNew />},
          { path: ":rid", element: <RecipePage />}
        ]
      },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>,
)
