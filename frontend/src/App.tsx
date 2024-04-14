//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import { ScriptsList, ScriptsCreate, ScriptsEdit } from './resources/Scripts';
import { BooksList, BooksCreate, BooksEdit } from './resources/Books';
import { UsersList, UsersCreate, UsersEdit } from './resources/Users';
import {
  PaymentsList,
  PaymentsCreate,
  PaymentsEdit,
} from './resources/Payments';
import { GenresList, GenresCreate, GenresEdit } from './resources/Genres';
import ScriptsIcon from '@mui/icons-material/SubscriptOutlined';
import BooksIcon from '@mui/icons-material/BookOutlined';
import UsersIcon from '@mui/icons-material/PersonOutline';
import PaymentsIcon from '@mui/icons-material/Payment';
import GenresIcon from '@mui/icons-material/Category';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/ae9dc137e">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="Scripts"
          options={{ label: 'Scripts' }}
          list={ScriptsList}
          create={ScriptsCreate}
          edit={ScriptsEdit}
          recordRepresentation="title"
          icon={ScriptsIcon}
        />
        <Resource
          name="Books"
          options={{ label: 'Books' }}
          list={BooksList}
          create={BooksCreate}
          edit={BooksEdit}
          recordRepresentation="title"
          icon={BooksIcon}
        />
        <Resource
          name="Users"
          options={{ label: 'Users' }}
          list={UsersList}
          create={UsersCreate}
          edit={UsersEdit}
          recordRepresentation="username"
          icon={UsersIcon}
        />
        <Resource
          name="Payments"
          options={{ label: 'Payments' }}
          list={PaymentsList}
          create={PaymentsCreate}
          edit={PaymentsEdit}
          recordRepresentation="amount"
          icon={PaymentsIcon}
        />
        <Resource
          name="Genres"
          options={{ label: 'Genres' }}
          list={GenresList}
          create={GenresCreate}
          edit={GenresEdit}
          recordRepresentation="genreName"
          icon={GenresIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
