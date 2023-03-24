describe('Shopping Card', () => {
  it('users can add products to the cart', () => {
    cy.visit('/')
    cy.dataTest('product-tag').eq(1).click()
    cy.get('[aria-label="Add to Cart"]').click()
    cy.get('[aria-label="Cart items: 1"]').contains('1')
  })
})

export {}
