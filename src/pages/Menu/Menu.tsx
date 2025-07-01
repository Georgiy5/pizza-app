import { useEffect, useState } from 'react';
import { PREFIX } from '../../API/API';
import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import type { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export function Menu () {

	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined> ();

	const getMenu = async () => {
		try {
			setIsLoading(true);
			const {data} = await axios.get<Product[]>(`${PREFIX}/products`);
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError){
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};

	useEffect (() => {
		getMenu();
	}, []);

	return <>
		<div className={styles['head']}>
			<Headling>Меню</Headling>
			<Search className={styles.search} placeholder='Введите блюдо или состав'/>
		</div>
		<div>
			{!isLoading && <MenuList products={products}/>}
			{isLoading && <>Загрузка..</>}
			{error && <>{error}</>}

		</div>
	</>;
	
}