// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CartScreen from './components/cart/CartScreen';
import HomeScreen from './components/home/HomeScreen';
import LoginScreen from './components/login/LoginScreen';
import ProductScreen from './components/products/ProductScreen';
import ProtectedRoutes from './components/ProtectedRoutes';
import PurchasesScreen from './components/purchases/PurchasesScreen';
import FooterScreen from './components/shared/FooterScreen';
import HeaderScreen from './components/shared/HeaderScreen';
import { getAllproducts } from './store/slices/products.slice';
// eslint-disable-next-line no-unused-vars
import getConfig from './utils/getConfig';

function App() {
	// useEffect(() => {
	// 	const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users';

	// 	const newUser = {
	// 		firstName: 'Miguel',
	// 		lastName: 'Vera',
	// 		email: 'veramig8888@gmail.com',
	// 		password: 'password1234',
	// 		phone: '1234567891',
	// 		role: 'admin',
	// 	};

	// 	axios
	// 		.post(URL, newUser)
	// 		.then(res => console.log(res.data))
	// 		.catch(err => console.log(err.data));
	// }, []);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllproducts());
	}, []);

	return (
		<div className='App'>
			<HeaderScreen />
			<main className='main'>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/login' element={<LoginScreen />} />

					<Route element={<ProtectedRoutes />}>
						<Route path='/cart' element={<CartScreen />} />
						<Route path='/purchases' element={<PurchasesScreen />} />
					</Route>
					<Route path='/product/:id' element={<ProductScreen />} />
				</Routes>
			</main>
			<FooterScreen />
		</div>
	);
}

export default App;
