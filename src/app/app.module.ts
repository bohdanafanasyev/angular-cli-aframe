//our root app component
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { Routes,RouterModule} from'@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';





@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {}
