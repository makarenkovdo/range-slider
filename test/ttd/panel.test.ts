/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import {
  getByTestId, screen, waitFor, getByText, getByLabelText, queryByTestId,
} from '@testing-library/dom';
import SliderPresenter from '../../src/presenter/SliderPresenter';
import SliderView from '../../src/view/SliderView';
import createScale from '../../src/view/viewModules/createScale';

function getExampleDOM() {
  // This is just a raw example of setting up some DOM
  // that we can interact with. Swap this with your UI
  // framework of choice 😉
  const div = document.createElement('div');
  div.innerHTML = `
      <label for="username">Username</label>
      <input id="username" />
      <button>Print Username</button>
    `;
  const button = div.querySelector('button');
  const input = div.querySelector('input');
  button.addEventListener('click', () => {
    // let's pretend this is making a server request, so it's async
    // (you'd want to mock this imaginary request in your unit tests)...
    setTimeout(() => {
      const printedUsernameContainer = document.createElement('div');
      printedUsernameContainer.innerHTML = `
          <div data-testid="printed-username">${input.value}</div>
        `;
      div.appendChild(printedUsernameContainer);
    }, Math.floor(Math.random() * 200));
  });
  return div;
}

test('examples of some things', async () => {
  const famousProgrammerInHistory = 'Ada Lovelace';
  const container = getExampleDOM();

  // Get form elements by their label text.
  // An error will be thrown if one cannot be found (accessibility FTW!)
  const input = getByLabelText(container, 'Username');
  input.value = famousProgrammerInHistory;

  // Get elements by their text, just like a real user does.
  getByText(container, 'Print Username').click();

  await waitFor(() => expect(queryByTestId(container, 'printed-username')).toBeTruthy());

  // getByTestId and queryByTestId are an escape hatch to get elements
  // by a test id (could also attempt to get this element by its text)
  expect(getByTestId(container, 'printed-username')).toHaveTextContent(
    famousProgrammerInHistory,
  );
  // jest snapshots work great with regular DOM nodes!
  expect(container).toMatchSnapshot();
});
