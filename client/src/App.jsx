// UTILITIES
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// ROUTES
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
	{ path: '/', element: <Root />, errorElement: <ErrorPage /> },
]);

function App() {
	return (
		<>
			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
