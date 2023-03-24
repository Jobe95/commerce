describe('Home Page', () => {
  it('displays all 4 products on the home page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="product-tag"]')
      .eq(0)
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'Señor Shirt')
        cy.get('[data-test="product-price"]').should('contain', '250.00 SEK')
      })

    cy.get('[data-test="product-tag"]')
      .eq(1)
      .within(() => {
        cy.get('[data-test="product-name"]').should(
          'contain',
          'Developer Shirt'
        )
        cy.get('[data-test="product-price"]').should('contain', '300.00 SEK')
      })

    cy.get('[data-test="product-tag"]')
      .eq(2)
      .within(() => {
        cy.get('[data-test="product-name"]').should(
          'contain',
          'Fullsnack Shirt'
        )
        cy.get('[data-test="product-price"]').should('contain', '225.00 SEK')
      })
  })
})

export {}
