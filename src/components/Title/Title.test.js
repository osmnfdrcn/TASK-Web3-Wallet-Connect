import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Title from './Title';

test("should render if a text props passed", () => {
  render(<Title text={"title"} />)
  const titleElement = screen.getByText("title")
  expect(titleElement).toBeVisible()
})

