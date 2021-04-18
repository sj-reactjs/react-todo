import { render, screen } from '@testing-library/react';
import App, { TodoApp } from './App';

describe('App component test', () => {
  it(`initaial render`, () => {
    render(<App />);
    const linkElement = screen.getByText(/loading.../i);
    expect(linkElement).toBeInTheDocument();
  });

  it(`suspense test`, async () => {
    const { asFragment } = render(<App />)

    const delayDom = await asFragment(<App />)
    expect(delayDom).toMatchSnapshot()

  })
})
