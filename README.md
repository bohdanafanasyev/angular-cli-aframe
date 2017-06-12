# Angular-CLI-Aframe
The actions above are already implemented inside the project, feel free to clone and install dependencies.
```
npm i
ng serve 
```
<br>


**1. Edit ```Polyfills.ts```**

```import 'aframe';```

**Note:** current line should be inserted before ```import 'zone.js/dist/zone';``` 
<br><br><br>
**2. Modify**  ```app.module.ts```  **with CUSTOM_ELEMENTS_SCHEMA**

```
import { ...CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [ ... ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

```
