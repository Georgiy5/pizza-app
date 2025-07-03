import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import Headling from '../../components/Headling/Headling';
import { useEffect, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispath, RootState } from '../../store/store';
import { login, userActions } from '../../store/user.slice';

export type LoginForm = {
	email: {
		value: string
	},
	password: {
		value: string
	}
}

export function Login () {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt, navigate]);

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearLoginError());
		const target = e.target as typeof e.target & LoginForm;
		const {email, password} = target;
		await sendLogin(email.value, password.value);
	};

	const sendLogin = async (email: string, password:string) => {
		dispatch(login({email, password}));
	};

	return (
		<div className={styles.wrapper} >
			<Headling className={styles.title}>
			Вход
			</Headling>
			{loginErrorMessage && <>{loginErrorMessage}</>}
			<form  onSubmit={submit}>
				<div className={styles['input']}>
					<label htmlFor='email'>Ваш email</label>
					<Input name='email' placeholder='Email' id='email'/>
				</div>
			
				<div className={styles['input']}>
					<label htmlFor='pass'>Ваш пароль</label>
					<Input name='password' placeholder='Пароль' id='pass' type='password'/>
				</div>
			
				<div className={styles['button-wrapper']}>
					<Button className={styles.button} appearance='big'>Вход</Button>
				</div>
			</form>

			<div className={styles.footer}>
				<div className={styles.footer1}>Нет Аккаунта?</div>
				<Link to={'/auth/register'} className={styles.footer2}>Зарегистрироваться</Link>
			</div>
		</div>
	);
	
}