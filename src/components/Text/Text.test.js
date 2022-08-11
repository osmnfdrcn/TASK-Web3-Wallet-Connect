import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Text from './Text';

test("should render if a text props passed", () => {
  render(<Text text={"text"} />)
  const pElement = screen.getByText("text")
  expect(pElement).toBeInTheDocument()
})
