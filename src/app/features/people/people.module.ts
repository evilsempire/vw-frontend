import {NgModule} from '@angular/core';
import {PeopleComponent} from './people.component';
import {PeopleRoutesModule} from './people.routes.module';
import {PersonComponent} from './person/person.component';

@NgModule({
  imports: [
    PeopleRoutesModule,
  ],
  declarations: [
    PeopleComponent,
    PersonComponent
  ],
  providers: []
})

export class PeopleModule {}
