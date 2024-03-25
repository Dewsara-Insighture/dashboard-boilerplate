import './App.css';
import Header from './components/layout/Header';

import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './utils/aws-configure';

import AppRoutes from './routes/Routes';

Amplify.configure(awsExports);

export default function App() {
  return (
    <>

      <Authenticator
        socialProviders={['google']}
        signUpAttributes={['email']}
        hideSignUp
      >
        <Header />
        <AppRoutes />
      </Authenticator>

    </>
  );
}
