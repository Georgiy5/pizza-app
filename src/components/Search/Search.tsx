import { forwardRef } from 'react';
import type { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';


const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, ...props }, ref) {
	return <>
		<div className={styles['input-wrapper']}>
			<input ref={ref} className={cn(styles['search'], className, {
				[styles['invalid']] : isValid
			})} {...props} />
			<img className={styles.icon} src="./search-icon.svg" alt="Лупа" />
		</div>
	</>;
});

export default Search;