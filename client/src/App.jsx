// UTILITIES
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { threadsLoader } from './utilities/loaders';
import { threadActions } from './utilities/actions';
// ROUTES
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import LoginPage from './routes/LoginPage';
import MainPage from './routes/MainPage';
import SettingsPage from './routes/SettingsPage';
// ROUTER
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <LoginPage />,
			},
			{
				path: '/app',
				element: <MainPage />,
				loader: threadsLoader,
				action: threadActions,
			},
			{ path: '/app/settings', element: <SettingsPage /> },
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
