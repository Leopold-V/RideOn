import { render } from '@testing-library/react-native';
import App from './App';

const sum = (a, b) => {
    return a + b;
}

it('sum 2 numbers', () => {
    expect(sum(1, 2)).toBe(3);
})

test('render app', () => {
    const result = render(<App />);
    const title = result.getAllByText('RideOn');
    expect(title.length).toEqual(2);
});