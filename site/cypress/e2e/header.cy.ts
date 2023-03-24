describe('Header', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('links to the correct pages', () => {
    cy.dataTest('logo').click()
    cy.location('pathname').should('eq', '/')

    cy.dataTest('nav-link-search').click()
    cy.location('pathname').should('eq', '/search')

    cy.dataTest('nav-link-home-page').click()
    cy.location('pathname').should('eq', '/search/frontpage')
  })

  it('the search bar return the correct search results', () => {
    cy.dataTest('search-input').eq(0).type('Developer{enter}')

    cy.location().should((loc) => {
      expect(loc.search).to.eq('?q=Developer')
      expect(loc.pathname).to.eq('/search')
    })
    cy.dataTest('product-card')
      .eq(0)
      .within(() => {
        cy.dataTest('product-card-name').should('contain', 'Developer Shirt')
        cy.dataTest('product-card-price').should('contain', '300.00 SEK')
      })
  })
})

export {}
