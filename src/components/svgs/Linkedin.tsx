import { colors } from '../../styles';
import styled from 'styled-components';

const SvgContainer = styled.div`
	width: 32px;
	height: 32px;
	--stroke-color: ${colors.opaqueBrown};
`;

const Linkedin = () => {
	return (
		<SvgContainer>
			<svg
				width='32'
				height='32'
				viewBox='0 0 32 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
        style={{ color: 'var(--stroke-color)' }}
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M28.8 0H3.2C1.43269 0 0 1.43269 0 3.2V28.8C0 30.5673 1.43269 32 3.2 32H28.8C30.5673 32 32 30.5673 32 28.8V3.2C32 1.43269 30.5673 0 28.8 0ZM6.4 7.30246C6.4 8.68399 7.5205 9.80638 8.9062 9.80638C10.2875 9.80638 11.4109 8.68399 11.4109 7.30246C11.4109 5.9224 10.2875 4.8 8.9062 4.8C7.52196 4.8 6.4 5.92094 6.4 7.30246ZM6.8007 25.6H11.0991V11.7819H6.8007V25.6ZM27.2 25.6H22.9045V18.8802C22.9045 17.2774 22.8753 15.216 20.6708 15.216C18.4341 15.216 18.0903 16.9615 18.0903 18.7637V25.6H13.7947V11.7819H17.9183V13.67H17.9766C18.5507 12.584 19.9524 11.4383 22.0433 11.4383C26.3957 11.4383 27.2 14.3003 27.2 18.0213V25.6Z'
					fill='currentColor'
					fill-opacity='0.9'
				/>
			</svg>
		</SvgContainer>
	);
};

export default Linkedin;
