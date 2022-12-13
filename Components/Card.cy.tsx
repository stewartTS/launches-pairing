import Card from './Card';
import { object } from './cardObject';

describe('Card', () => {
  const data = object;

  it('Check that the component mounds correctly', () => {
    cy.mount(<Card data={data} />);
  });

  it('Check that the component mounds correctly with button when details are available', () => {
    cy.mount(<Card data={data} />);
    cy.get('button').contains('Details');
  });

  it('Check that the correct messsage is shown', () => {
    cy.mount(<Card data={data} />);
    cy.get('p').contains('Unsuccesful flight!');
  });
});
