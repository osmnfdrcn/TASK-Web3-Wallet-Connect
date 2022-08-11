import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Button from './Button';

describe("Button", () => {
  test("should render ", () => {
    render(<Button />)
    const btnElement = screen.getByText(/connect/i)
    expect(btnElement).toBeInTheDocument()
  })
})
