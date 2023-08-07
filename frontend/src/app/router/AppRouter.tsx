import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage } from "pages";

const AppRouter: FC = () => {
  const isAuth = true;

  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path="*" Component={MainPage} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" Component={MainPage} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
