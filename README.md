# funda-demo


## The idea

This is my demo for the Funda interview. 
I've created a card which displayes information about a listing. This card could be used in the mobile or desktop overview.

### A better image carousel

When I'm browsing Funda, I'd like to browse through the pictures of any listing more quickly. That's why I've created an accessible image carousel which is displayed in the card. 

As opposed to Funda, where a popup opens with a carousel, the user can scroll through the images directly. Apart from touch, the user can also use their keyboard and scroll wheel to quickly flick through the images. 

### Splide 
I wanted to create the carousel myself first, but I realized quickly that that would be too time-consuming for the amount of time given. I did some research on a simple, reliable and small carousel library, and went for [splide](https://splidejs.com/).

## Project Setup

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Run Components Tests with [Cypress](https://docs.cypress.io/guides/component-testing/overview/)

```sh
npm run test:component
```
