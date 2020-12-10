import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import FrameRoutes from '../frame/routes';
import ContainersRoutes from '../containers/routes';

export default (
  <BrowserRouter basename="/react-web">
    <FrameRoutes>
      <ContainersRoutes />
    </FrameRoutes>
  </BrowserRouter>
);