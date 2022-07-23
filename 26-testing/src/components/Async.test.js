import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    render(<Async/>);
    
    // get ruft direkt auf - geht nicht weil in component erst geladen werden muss
    // const listItemElements = screen.getAllByRole('li'); // getByRole expects to find only one
    const listItemElements = await screen.findAllByRole('listitem'); // default 1s
    
    expect(listItemElements).not.toHaveLength(0);
  });
});
