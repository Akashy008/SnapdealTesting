const CategoryPage = {
  goToCategory() {
   
    cy.contains('.catText', "Men's Fashion")
      .trigger('mouseover'); 
    

    cy.contains('a', 'Casual Shoes').click({ force: true });
  }
};


export default CategoryPage

