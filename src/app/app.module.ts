import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [AppComponent, PeopleListComponent, EditPersonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PersonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
