import React from 'react';
import ReactDOM from 'react-dom'
import {
  render
} from '@testing-library/react';
import App from './App';

test('renders Hi there link', () => {
  const {
    getByText
  } = render( < App / > );
  const linkElement = getByText(/Hi there/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render( < App / > , div)
  ReactDOM.unmountComponentAtNode(div)
});