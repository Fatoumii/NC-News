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
    });
    it("Top Articles component contains articles which sends you to the correct article page", () => {
      cy.get("[data-cy=33]")
        .click()
        .url()
        .should("equal", "http://localhost:3000/articles/33");
    });
    it("contains the author and date in the article card", () => {
      cy.get("[data-cy=33]")
        .children()
        .contains("Author")
        .contains("-")
        .contains(":");
    });
    it("contains a sort by option which sorts articles depending on a query", () => {
      cy.get(".sortby").children();
    });
    it("renders the footer with a link to the relevant page", () => {
      cy.get("footer").children();
      cy.get("footer > a");
    });
  });
  describe("singleArticlePage", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/articles/1");
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
    it("allows users to add comments and post them", () => {
      cy.get("textarea").type("Great article!");
      cy.get("button")
        .contains("Submit")
        .click();
    });
    it("allows users to delete a comment by a specific user", () => {
      cy.get("[data-cy=deleteButton]")
        .contains("DELETE")
        .click();
    });
    it("allows users to vote which increments the number", () => {
      cy.get("[data-cy=votes]").contains("Votes");
      cy.get("[data-cy=voteButton]").click({ multiple: true });
    });
    it("renders the footer with a link to the relevant page", () => {
      cy.get("footer").children();
      cy.get("footer > a");
    });
  });
});
