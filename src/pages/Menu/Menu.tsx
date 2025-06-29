import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

export function Menu () {
	return <>
		<div className={styles['head']}>
			<Headling>Меню</Headling>
			<Search className={styles.search} placeholder='Введите блюдо или состав'/>
		</div>
		<ProductCard 
			image='./pizza.png'
			id={1}
			title='Наслаждение'
			description='Салями, руккола, помидоры, оливки'
			price={300}
			rating={4.5}
		/>

	</>;
	
}