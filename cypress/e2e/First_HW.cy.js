//Цє не треба перевіряти
//Цє не треба перевіряти
//Цє не треба перевіряти


beforeEach(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  cy.get('[src="assets/images/material-light-theme.jpg"]').click();
  cy.get('[title="Forms"]').click();
  cy.get('[href="/pages/forms/layouts"]').click();
})


describe('param_test', () => {
  const testCases = [
    {testData: '[placeholder="Jane Doe"]', expectedResult: 'Makc'},
    {testData: '[placeholder="Jane Doe"] + input', expectedResult: 'Makc@gmail.com'}
  ];


  testCases.forEach(({testData, expectedResult}) => {

    it(`Enter "${testData}" in search field and expect "${expectedResult}"`, () => {

      cy.get(`${testData}`).type(`${expectedResult}`);

    })
  })
})

describe('parametrized 2', () => {

  const testCases = [
    {testData: {
        position: 'top-right',
        title: 'test title',
        content: 'test content',
        time: '10000',
        type: 'primary'
      },
      expectedResult: {
        icon: 'email',
        title: 'test title',
        content: 'test content',
        color: 'red ',
        position: 'erwr'
      }
    }
  ];

  testCases.forEach(({testData, expectedResult}) => {
    it(`1111`, ()=>{
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.get('[alt="Material Light Theme"]').click();
      cy.get('[title="Modal & Overlays"]').click();
      cy.get('[href="/pages/modal-overlays/toastr"]').click();
      cy.get('[class="row"] [class="form-group"] [class="select-button"]').first().click();
      cy.get(`[class="option-list"] [ng-reflect-value=${testData.position}]`).click(); // 1
      cy.get('[name="title"]').clear().type(`${testData.title}`);
      cy.get('[name="content"]').clear().type(`${testData.content}`);
      cy.get('[name="timeout"]').clear().type(`${testData.time}`);
      cy.get('[class="form-group"] button').last().click();
      cy.get(`nb-option-list [ng-reflect-value=${testData.type}]`).click();
      cy.get('nb-card-body + nb-card-footer').children().first().click();

      cy.get(`nb-toast [data-name=${expectedResult.icon}]`).then (element => {
        expect(element.attr('data-name')).to.contain(`${expectedResult.icon}`)
      })
    })
  })

})