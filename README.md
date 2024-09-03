# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Aprendizado

### React Router Dom

No arquivo `/routes/routes.js` ficam as rotas da aplicação:

```js
<BrowserRouter>
  <Routes>
    {/* Caminho para a rota da raíz da App, ou seja, após o endereço (http://localhost:3000) roteia o caminho passado em path
     * O atributo exact deixa a rota como sendo o único acesso a ela
     */}
    <Route exact path="/" element={<Login />} />
    {/* Path='*' define que qualquer outra rota no endereço será redirecionada para a página Page404 */}
    <Route path="*" element={<Page404 />} />
  </Routes>
</BrowserRouter>
```

### Redux

Redux é uma biblioteca para manipular os estados da aplicação globalmente, permitindo que uma variável fique visivel para quais páginas ou componentes sejam necessários, sem a necessidade da passagem via parâmetros.

O método `createStore()` nessa aplicação está depreciado, o mais indicado é usar o `configStore()` do _Redux Toolkit_, mas para fins de aprendizado será utilizado o createStore();

- useDispatch()

  Hook para disparar ações para o redux, essas ações são simplesmente o que vai descrever para o redux o que vai ser disparado.

  ```js
  dispatch({
    type: 'BOTAO_CLICADO',
  });
  ```
