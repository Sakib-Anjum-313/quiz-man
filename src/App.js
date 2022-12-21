
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import QuizDefault from './Components/QuizDefault/QuizDefault';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layouts/Main';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch(`https://openapi.programming-hero.com/api/quiz`);
            },
          element: <Home></Home>
           
        },
        {
          path: '/quiz',
          element:<QuizDefault></QuizDefault>
        },
        {
          path: '/quiz/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }  
      ]
      
    },
    {
      path: '*',
      element:<p>This route not found</p>
    }
  ])
  return (
      <div>
      <RouterProvider router = {router}></RouterProvider>
      </div> 
  );
}

export default App;
