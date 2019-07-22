describe("NC News Tests", () => {
  describe("home page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
    it("contains text", () => {
      cy.contains(
        "Welcome to NC News, where you can read about the latest trends and have your say!"
      );
    });
    it("contains enter which sends you to the relevant page", () => {
      cy.contains("Enter").click();
      cy.url().should("equal", "http://localhost:3000/articles");
    });
  });
  describe("articles page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/articles");
    });
    it("contains the heading compontent with the relevant text in it", () => {
      cy.get(".heading").contains("News");
    });
    it("nav bar component send gives you the relevant url", () => {
      cy.get("[data-cy=cooking]")
        .click()
        .url()
        .should("equal", "http://localhost:3000/topics/cooking");
    });
    it("contains the Top Articles compontent with links sending you to relevant articles", () => {
      cy.get("[data-cy=topArticlesHeader]").contains("TOP ARTICLES");
      cy.get("[data-cy=33]")
        .click()
        .url()
        .should("equal", "http://localhost:3000/articles/33");
    });
    it("contains a list of articles which send you to the relevant page", () => {
      cy.get("[data-cy=28]")
        .click()
        .url()
        .should("equal", "http://localhost:3000/articles/28");
    });
    //article card have author and date
    //sortby functionality
    //votes
  });
  describe("singleArticlePage", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/articles/6");
    });
    it("contains the heading compontent with the relevant text in it", () => {
      cy.get(".heading").contains("News");
    });
    it("nav bar component send gives you the relevant url", () => {
      cy.get("[data-cy=cooking]")
        .click()
        .url()
        .should("equal", "http://localhost:3000/topics/cooking");
    });
    it("contains the Top Articles compontent with links sending you to relevant articles", () => {
      cy.get("[data-cy=topArticlesHeader]").contains("TOP ARTICLES");
      cy.get("[data-cy=33]")
        .click()
        .url()
        .should("equal", "http://localhost:3000/articles/33");
    });
    //votes
    //add comment
    //delete comment
  });
});
