import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { LocalizeDirective } from './directives/localize.directive';
import { DictionaryLocalizeDirective } from './directives/dictionary-localize.directive';
import { TypeMapperPipe } from './pipes/type-mapper.pipe';
import { MediaLocalizeDirective } from './directives/media-localize.directive';
import { ToastNotificationComponent } from './components/toast-notification/toast-notification.component';



@NgModule({
  declarations: [
    FilterPipe,
    SortPipe,
    LocalizeDirective,
    DictionaryLocalizeDirective,
    TypeMapperPipe,
    MediaLocalizeDirective,
    ToastNotificationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LocalizeDirective,
    DictionaryLocalizeDirective,
    MediaLocalizeDirective,
    TypeMapperPipe,
    FilterPipe,
    SortPipe,
    ToastNotificationComponent
  ]
})
export class SharedModule { }
