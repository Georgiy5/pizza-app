import type { ButtonHTMLAttributes, ReactNode } from 'react';


export default interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    appearance?: 'small' | 'big';
// eslint-disable-next-line semi
}