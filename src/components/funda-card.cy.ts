import { mount } from "cypress/vue"
import FundaCard from "./funda-card.vue"

describe("pages/funda-demo", () => {
  function createWrapper() {
    console.log(
      `${import.meta.env.VITE_HEROKU_CORS_PROXY}${
        import.meta.env.VITE_FUNDA_API_URL
      }/*`
    )
    return mount(FundaCard, { id: "test-id" })
  }

  it("should show a loading placeholder when the component is loading", () => {
    const wrapper = createWrapper()

    wrapper
      .get("[data-test=loading-wrapper]", { timeout: 0 })
      .should("be.visible")
      .should("contain.text", "Laden...")

    wrapper.get("[data-test=error-wrapper]", { timeout: 0 }).should("not.exist")
    wrapper
      .get("[data-test=content-wrapper]", { timeout: 0 })
      .should("not.exist")
  })

  it("should show an error placeholder when the request has failed", () => {
    cy.intercept(`*`, { statusCode: 400 })

    const wrapper = createWrapper()

    wrapper
      .get("[data-test=error-wrapper]")
      .should("be.visible")
      .should("contain.text", "Er is iets misgegaan...")
    wrapper.get("[data-test=loading-wrapper]").should("not.exist")
    wrapper.get("[data-test=content-wrapper]").should("not.exist")
  })

  it("should not show an error placeholder or loading placeholder when the content has loaded", () => {
    cy.intercept(`*`, { fixture: "funda-resource" })

    const wrapper = createWrapper()

    wrapper.get("[data-test=error-wrapper]").should("not.exist")
    wrapper.get("[data-test=loading-wrapper]").should("not.exist")
    wrapper.get("[data-test=content-wrapper]").should("be.visible")
  })

  it("should display the address of the listing", () => {
    cy.intercept(`*`, { fixture: "funda-resource" })

    const wrapper = createWrapper()

    wrapper
      .get("[data-test=listing-address]")
      .should("have.text", "Tweede Schinkelstraat 144")
  })

  it("should display the price in euros", () => {
    cy.intercept(`*`, { fixture: "funda-resource" })

    const wrapper = createWrapper()

    wrapper
      .get("[data-test=listing-price]")
      .should("contain.text", "€\u00a0239.000,00")
  })

  it("should render a link to the funda listing", () => {
    cy.intercept(`*`, { fixture: "funda-resource" })

    const wrapper = createWrapper()

    wrapper
      .get("a[data-test=listing-button]")
      .should("have.attr", "href", "funda.nl/foo")
  })

  it("should render a carousel", () => {
    // @todo There is a lot to test on the carousel, touch events, keyboard events, preloaders etc.
    // I'll leave that out of the scope for now.
  })
})
