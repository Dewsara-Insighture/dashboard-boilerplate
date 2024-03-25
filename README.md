# POC Dashboard Template

This template provides a minimal setup to build a eye catching dashboard in limited time. This template contains multiple components that is useful to build a custom dashboard in no time. 

### Included Components

- Amplify In build UI for User Login. (Only Google Login is Supported atm)
- Protected Routes(only signed in users can access the dashboard)
- Custom Modal
- Custom Container
- Custom Header
- Custom Tables

## Tech Stack

- **React:** [Frontend JS Library](https://react.dev/) 
- **pnpm:** [Package Manager](https://pnpm.io/)
- **viteJs:** [Build Tool](https://vitejs.dev/)
- **Next UI:** [Design Framework](https://nextui.org/)
- **Tailwind Css:** [CSS Styling](https://tailwindcss.com/)
- **AWS Amplify:** [User Authentication](https://docs.amplify.aws/start/q/integration/react/)
- **Typescript:** High level programming Language
- **Icons:** [Icons](https://iconer.app/feather/) used in the application. 

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_GATEWAY`

`VITE_USER_POOL_ID`

`VITE_REGION`

`VITE_USER_POOL_WEB_CLIENT_ID`

`VITE_DOMAIN`

`VITE_REDIRECT_SIGN_IN`

`VITE_REDIRECT_SIGN_OUT`

## Additional Instructions

- If this application needs to be run without a user login, they can remove the <Authenticator> on the App.tsx file. 
- If we were to connect a third party api to this application, you can use the app.ts file and define the axios creation. 
- Modal contains two types, which is a default Modal and a Form Modal with two inputs. 

## Installation

In order to run this application you should install the pnpm globally. In order to do that, follow the below link

[Install pnpm](https://pnpm.io/installation#using-npm)

After installing pnpm follow these steps to run the application 

```bash
  pnpm install
  pnpm run dev
```

Application will run on port 5173  

## Authors

<p align='center'>
<a href="https://www.insighture.com/" target="_blank">
<img src="https://www.insighture.com/images/logo_dark.svg" alt="insighture-logo" width="300px" height="auto">
</a>
</p>

