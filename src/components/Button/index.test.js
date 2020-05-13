import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'


import Button from './index'

test("Should not allowed click button if isDisabled is present", () => {
  // kalo misalkan buttonnya dikasih props isDisabled sudah pasti tidak bisa di click (karena disabled)
  const { container } = render (<Button isDisabled></Button>)
  // toBeInTheDocument ada di dalam document
  expect(container.querySelector("span.disabled")).toBeInTheDocument()
}) 


test("Should render loading/spinner", () => {
  const { container, getByText } = render (<Button isLoading></Button>)

  // regex i ak peduli huruf Captialize atau lowercase dalam hal ini text loading
  expect(getByText(/loading/i)).toBeInTheDocument()
  expect(container.querySelector("span")).toBeInTheDocument()
}) 

// buat testing memastikan sebuah tag a
test("Should render <a> tag", () => {
  const { container } = render (<Button type="link" isExternal></Button>)

  expect(container.querySelector("a")).toBeInTheDocument()
}) 

// buat testing memastikan sebuah link
test("Should render <Link> tag", () => {
  const { container } = render (
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument()
})