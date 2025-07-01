import ProductCard from '../../../components/ProductCard/ProductCard';
import type { MenuListProps } from './MenuList.props';

export function MenuList ({ products } : MenuListProps) {
	return products.map((p) => (
		<ProductCard 
			key={p.id}
			image={p.image}
			id={p.id}
			name={p.name}
			description={p.ingredients.join(', ')}
			price={p.price}
			rating={p.rating}
		/>
	    )
	);
}