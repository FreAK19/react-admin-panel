import React from 'react'
import Logo from '../components/Logo'

test('Logo should render correctly', () => {
	const component = shallow(<Logo />);
	expect(component).toMatchSnapshot();
});
