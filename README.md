# Angular TODO Items by Star
## Requirements
- Use jsonplaceholder API to fetch todo items
- Render checkbox with completed status near each of the todo item
- Use a separate Angular service to fetch data from API
-  Replace the initial markup with the app markup

## API usage example
```
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json => console.log(json))
```

## Hints
- You can use Angular schematics in Stackblitz. Right click on a folder, choose Angular Generator.

## Stackblitz Troubleshooting
- If the component's template is not rendered or updated, try removing the component tag i.e. <component></component> from the application template and then add it again
Neither Stackblitz nor Codesandbox do not allow to use Typescript Intellisense in *.hmtl files. If a TS error occurs only during application build, read the error patiently to understand if it's related to *.html templates.
