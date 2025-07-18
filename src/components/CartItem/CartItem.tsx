import styles from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import type { AppDispath } from '../../store/store';
import { cartActions } from '../../store/cart.slice';
import type { CartItemProps } from './CartItem.props';

export function CartItem(props: CartItemProps) {
	const dispatch = useDispatch<AppDispath>();

	const increase = () => {
		dispatch(cartActions.add(props.id));
	};

	const descrease = () => {
		dispatch(cartActions.remove(props.id));
	};

	const remove = () => {
		dispatch(cartActions.delete(props.id));
	};


	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={descrease}>
					<span>-</span>
				</button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					<span>+</span>
				</button>
				<button className={styles['remove']} onClick={remove}>
					<span>X</span>
				</button>
			</div>
		</div>
	);
}

export default CartItem;