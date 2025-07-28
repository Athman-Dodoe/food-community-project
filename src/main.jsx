import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import IndexPage from './pages/IndexPage.jsx';
import RecipeListPage from './pages/RecipeListPage.jsx';
import RecipePage from './pages/RecipePage.jsx';
import CommunityPage from './pages/CommunityPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/recipe',
    element: <RecipeListPage />
  },
  {
    path: '/recipe/:recipeId',
    element: <RecipePage />
  },
  {
    path: '/community',
    element: <CommunityPage />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
