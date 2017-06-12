# Angular-CLI-Aframe

1. Edit ```Polyfills.ts``` 

```import 'aframe';```

Note: this line should be inserted before ```import 'zone.js/dist/zone';```


2. Modify ```app.module.ts``` with CUSTOM_ELEMENTS_SCHEMA

```import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

```
