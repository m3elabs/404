import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

interface animationProps {
	animation?: string;
	duration?: string;
	anchorPlacement?: string;
	offset?: string;

	children?: JSX.Element | JSX.Element[];
}

export const ScrollAnimation = ({
	animation,
	children,
	anchorPlacement,
	offset,
	...props
}: animationProps) => {
	useEffect(() => {
		Aos.init({ duration: 800, easing: 'ease' });
	});

	return (
		<div
			data-aos={animation}
			data-aos-anchor-placement={anchorPlacement}
			data-aos-offset={offset}
			{...props}
		>
			{children}
		</div>
	);
};

ScrollAnimation.defaultProps = {
	animation: 'fade-up',
	anchorPlacement: 'bottom-bottom',
	offset: '-50',
};