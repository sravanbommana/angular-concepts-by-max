import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './input/parent/user.component';
import { UserListComponent } from './input/child/user-list.component';
import { ParentComponent } from './output/parent/parent.component';
import { ChildComponent } from './output/child/child.component';
import { ViewChildOneComponent } from './view-child/scenario1/view-child-one.component';
import { ViewChildTwoComponent } from './view-child/scenario2/view-child-two.component';
import { ChildComponent2 } from './view-child/scenario1/child.component';
import { TemplateReference } from './template-reference/template-reference.component';
import { ChildTemplateReference } from './template-reference/child/child-template-refrence.component';
import { TeacherComponent } from './using-service/parent/teacher.component';
import { StudentComponent } from './using-service/child/student.component';
import { InteractionService } from './using-service/service/interaction.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    ParentComponent,
    ChildComponent,
    ViewChildOneComponent,
    ViewChildTwoComponent,
    TemplateReference,
    ChildComponent2,
    ChildTemplateReference, TeacherComponent, StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
