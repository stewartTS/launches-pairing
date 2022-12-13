import Modal from './Modal';

describe('Modal', () => {
  const data = {
    mission_name: 'Test',
    details: 'Lorem Ipsum',
  };

  const toggleModal = () => {
    console.log(test);
  };

  it('Check that the component mounds correctly', () => {
    cy.mount(<Modal data={data} toggleModal={() => toggleModal()} />);
  });

  it('Check that button on component renders correctly', () => {
    cy.mount(<Modal data={data} toggleModal={() => toggleModal()} />);
    cy.get('button');
  });
});
