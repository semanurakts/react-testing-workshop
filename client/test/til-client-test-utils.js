<<<<<<< HEAD
import React from 'react'
import {Router} from 'react-router-dom'
import {render, wait} from 'react-testing-library'
import {createMemoryHistory} from 'history'
import 'jest-dom/extend-expect'
import * as generate from 'til-shared/generate'

function renderWithRouter(ui, {route = '/', ...renderOptions} = {}) {
  const history = createMemoryHistory({initialEntries: [route]})
  const utils = render(<Router history={history}>{ui}</Router>, renderOptions)
  const finishLoading = () =>
    wait(() => expect(utils.queryByText('Loading')).toBeNull())
  return {
    ...utils,
    finishLoading,
    history,
  }
}

export {
  Simulate,
  wait,
  render,
  cleanup,
  renderIntoDocument,
  fireEvent,
} from 'react-testing-library'
=======
import React from 'react'
import {Router} from 'react-router-dom'
import {render, wait} from 'react-testing-library'
import {createMemoryHistory} from 'history'
import 'jest-dom/extend-expect'
import * as generate from 'til-shared/generate'

function renderWithRouter(ui, {route = '/', ...renderOptions} = {}) {
  const history = createMemoryHistory({initialEntries: [route]})
  const utils = render(<Router history={history}>{ui}</Router>, renderOptions)
  const finishLoading = () =>
    wait(() => expect(utils.queryByText('Loading')).toBeNull())
  return {
    ...utils,
    finishLoading,
    history,
  }
}

export {
  Simulate,
  wait,
  render,
  cleanup,
  renderIntoDocument,
  fireEvent,
} from 'react-testing-library'
>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
export {renderWithRouter, generate}