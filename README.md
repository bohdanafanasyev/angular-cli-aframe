# Angular-CLI-Aframe

**Edit ```Polyfills.ts```**

```import 'aframe';```

**Note:** current line should be inserted before ```import 'zone.js/dist/zone';``` 

<br />
**Modify ```app.module.ts``` with CUSTOM_ELEMENTS_SCHEMA**

```import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

```
