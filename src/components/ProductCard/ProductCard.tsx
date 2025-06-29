import type { ProductCardProps } from './ProductCard.props';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';


function ProductCard ({...props}: ProductCardProps) {
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
					<button className={styles['add-to-cart']}>
						<img className={styles.icon} src="/button-icon.svg" alt="Добавить в корзину" />
					</button>

				</div>

				<div className={styles.footer}>
					<div className={styles.title}>
						{props.title}
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