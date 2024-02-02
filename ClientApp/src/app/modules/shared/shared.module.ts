import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { LocalizeDirective } from './directives/localize.directive';
import { DictionaryLocalizeDirective } from './directives/dictionary-localize.directive';
import { TypeMapperPipe } from './pipes/type-mapper.pipe';



@NgModule({
  declarations: [
    FilterPipe,
    SortPipe,
    LocalizeDirective,
    DictionaryLocalizeDirective,
    TypeMapperPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LocalizeDirective,
    DictionaryLocalizeDirective,
    TypeMapperPipe
  ]
})
export class SharedModule { }
