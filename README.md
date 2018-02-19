# Roulette.js
Have you ever thought to yourself..
 
 _"I haven't seen a new javascript library in a while. 
I wish I could be learning a new JS framework."_,
 
_"Why aren't there more packages on NPM? Is javascript a dying language?"_
 
_"My Todo app is going to make the world a better place, but I can't find a Frontend Framework
that is going to satisfy the demands of my application"_

**ENTER ROULETTE.JS** 🔥

A progressive, concise, approachable, scalable, extensible, versatile, performant, simple, 
real-time, distributed, blockchain, battle-tested, opinianated & un-opinionated new javascript framework.

Quickly identify the latest new technology in JS.

### Bootstrapped 💪
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)


### Optimized
- Production build 
    - Brunch (uglify-js-brunch)
    <!-- If you use npm -->
    `npm install --save-dev uglify-js-brunch`
    `brunch build -p`


- lazy() loaded components

- Single File Builds
<!-- 
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script> -->
- "Windowing" long lists (not necessary)
    react-virtualized

- React Best Practices
<!-- https://calibreapp.com/blog/react-performance-profiling-optimization/ -->
<!-- https://developer.mozilla.org/en-US/docs/Web/API/User_Timing_API -->

### Typescript
Local Declarations Sometimes the package that you want to use doesn’t bundle declarations nor is it available on DefinitelyTyped. In that case, we can have a local declaration file. To do this, create a `declarations.d.ts` file in the root of your source directory. A simple declaration could look like this:
`declare module 'querystring' {
  export function stringify(val: object): string
  export function parse(val: string): object
}`
