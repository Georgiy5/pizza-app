import { Outlet, NavLink } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

export function Layout () {


	return <div className={styles['layout']}>
		<div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img className={styles['avatar']} src="/Intersect.svg" alt="Аватар" />
				<div className={styles['name']}>Георгий Щербинин</div>
				<div className={styles['email']}>Scherbinin.zhora2017@yandex.ru</div>
			</div>
			<div className={styles['links']}>
				<NavLink className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})} to='/'>
					<img src="/menu-icon.svg" alt="menu-icon" />
				Меню
				</NavLink>
				<NavLink className={({ isActive }) => cn(styles['link'], {
					[styles.active]: isActive
				})} to='/cart'>
					<img src="/cart-icon.svg" alt="cart-icon" />
				Корзина
				</NavLink>
			</div>
			<Button className={styles['exit']}>
				<img src="/exit.svg" alt="" />
				Выйти
			</Button>
		</div>

		<div className={styles.content}>
			<Outlet/>
		</div>
	</div>;
}