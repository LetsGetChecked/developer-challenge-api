import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../enums/language.enum';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private readonly translateService: TranslateService) {}

  initialize(): void {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  setLanguage(language: Language): void {
    this.translateService.use(language);
  }
}
