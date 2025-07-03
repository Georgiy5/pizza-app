import { useLoaderData, useNavigate } from 'react-router-dom';
import type { Product } from '../../interfaces/product.interface';
import styles from './Product.module.css';
import Headling from '../../components/Headling/Headling';

export function Product () {
	const navigate = useNavigate();
	const data = useLoaderData() as Product;

	return <>
		<div className={styles.header}>
			<button className={styles.button} onClick={() => navigate('/')}><img  className={styles.buttonImg} src='/back.svg'/></button>
			<Headling className={styles.title}>{data.name}</Headling>
		</div>
		<div className={styles.content}>

			<div className={styles.img}>
				<img className={styles.img} src={`${data.image}`} alt="Изображение продукта" />
			</div>

			<div className={styles.description}>
				<div className={styles.price}>
					<div>Цена</div>
					<div>{data.price}<span className={styles.currency}> ₽</span></div>
				</div>
				<div className={styles.rating}>
					<div>Рейтинг</div>
					<div className={styles['cloud']}>{data.rating} <img src="/star-icon.svg" alt="Звездочка" /></div>
				</div>
				<div className={styles.ingredients}>
					<div>Состав:</div>
					<div>{data.ingredients.join(', ')}</div>
				</div>
			</div>
		</div>
	</>;
}