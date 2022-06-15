import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact renders', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
    });

    it('renders contact me', () => {
        render(<Contact />)
        expect(screen.getByTestId('h1tag')).toHaveTextContent('Contact Me')
      })
       
      it('renders button', () => {
        render(<Contact />)
        expect(screen.getByTestId('button')).toHaveTextContent('Submit')
      })
})