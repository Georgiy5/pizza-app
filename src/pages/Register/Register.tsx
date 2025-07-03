import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from '../Login/Login.module.css';
import Headling from '../../components/Headling/Headling';
import { useEffect, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispath, RootState } from '../../store/store';
import { register, userActions } from '../../store/user.slice';

export type Register = {
	email: {
		value: string
	},
	password: {
		value: string
	}
	name:
	{
		value: string
	}
}

export function Register () {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const { jwt, registerErrorMessage } = useSelector((s: RootState) => s.user);

	useEffect(() => {
		if (jwt) {
			navigate('/');
		}
	}, [jwt, navigate]);

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(userActions.clearRegisterError());
		const target = e.target as typeof e.target & Register;
		const {email, password, name} = target;
		await sendLogin(email.value, password.value, name.value);
	};

	const sendLogin = async (email: string, password:string, name:string) => {
		dispatch(register({email, password, name}));
	};

	return (
		<div className={styles.wrapper} >
			<Headling className={styles.title}>
			Регистрация
			</Headling>
			{registerErrorMessage && <>{registerErrorMessage}</>}
			<form  onSubmit={submit}>
				<div className={styles['input']}>
					<label htmlFor='email'>Ваш email</label>
					<Input name='email' placeholder='Email' id='email'/>
				</div>
			
				<div className={styles['input']}>
					<label htmlFor='pass'>Ваш пароль</label>
					<Input name='password' placeholder='Пароль' id='pass' type='password'/>
				</div>

				<div className={styles['input']}>
					<label htmlFor='name'>Ваше имя</label>
					<Input name='name' placeholder='имя' id='name'/>
				</div>
			
				<div className={styles['button-wrapper']}>
					<Button className={styles.button} appearance='big'>Вход</Button>
				</div>
			</form>

			<div className={styles.footer}>
				<div className={styles.footer1}>Есть аккаунт?</div>
				<Link to={'/auth/login'} className={styles.footer2}>Войти</Link>
			</div>
		</div>
	);
	
}