import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from '../../Page/HomePage/Home';
import News from '../../Page/News';
import Sports from '../../Page/Sports';
import Business from '../../Page/Business';
import Innovation from '../../Page/Innovation';
import Culture from '../../Page/Culture';
import Arts from '../../Page/Arts';
import Travel from '../../Page/Travel';
import Earth from '../../Page/Earth';
import Video from '../../Page/Video';
import Live from '../../Page/Live';
import Register from '../Register/Register';
import Sign from '../Register/Sign';
import ErrorPage from '../../Page/ErrorPage';
import Privacy from '../policy/Privacy';
import AboutBBC from '../policy/AboutBBC'

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='news' element={<News />} />
        <Route path='sports' element={<Sports />} />
        <Route path='business' element={<Business />} />
        <Route path='innovation' element={<Innovation />} />
        <Route path='culture' element={<Culture />} />
        <Route path='arts' element={<Arts />} />
        <Route path='travel' element={<Travel />} />
        <Route path='earth' element={<Earth />} />
        <Route path='video' element={<Video />} />
        <Route path='Live' element={<Live />} />
        <Route path='register' element={<Register />} />
        <Route path='sign' element={<Sign />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='aboutbbc' element={<AboutBBC />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
