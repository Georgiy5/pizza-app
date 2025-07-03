import type { ProductCardProps } from './ProductCard.props';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart.slice';
import type { AppDispath } from '../../store/store';
import type { MouseEvent } from 'react';


function ProductCard ({...props}: ProductCardProps) {
	const dispatch = useDispatch<AppDispath>();

	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(props.id));
	};
	return (
		
		<div className={styles.card}>
			<Link to={`/product/${props.id}`} className={styles.link}>
				<div className={styles.head} style={{backgroundImage: `url('${props.image}')`}}>

					<div className={styles.price}>
						{props.price}&nbsp;
						<span className={styles.currency}>₽</span>
					</div>
					<div className={styles.rating}>
						{props.rating}&nbsp;
						<img src="/star-icon.svg" alt="Звездочка" />
					</div>
					<button className={styles['add-to-cart']} onClick={add}>
						<img className={styles.icon} src="/button-icon.svg" alt="Добавить в корзину" />
					</button>

				</div>

				<div className={styles.footer}>
					<div className={styles.title}>
						{props.name}
					</div>
					<div className={styles.description}>
						{props.description}
					</div>
				</div>
			</Link>
		</div>
		
	);
}

export default ProductCard;