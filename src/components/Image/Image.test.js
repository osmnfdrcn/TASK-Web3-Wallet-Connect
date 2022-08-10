import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Image from './Image'


test('image should be render', () => {
  render(<Image />)

  const imgElement = screen.getByRole("img")
  expect(imgElement).toBeInTheDocument()
})

test('image should be visible', () => {
  render(<Image />)
  const imgElement = screen.getByRole("img")
  expect(imgElement).toBeVisible()
})

test('should render same text passed as alt prop', () => {
  render(<Image alt={"alt text"} />)

  const imgElement = screen.getByAltText("alt text")
  expect(imgElement).toBeInTheDocument()
})