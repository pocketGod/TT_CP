import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { LocalizeDirective } from './directives/localize.directive';



@NgModule({
  declarations: [
    FilterPipe,
    SortPipe,
    LocalizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LocalizeDirective
  ]
})
export class SharedModule { }
