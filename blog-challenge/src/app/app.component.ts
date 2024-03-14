import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Language } from './core/language/enums/language.enum';
import { LanguageService } from './core/language/services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly language = Language;

  selectedLanguage = Language.en;

  constructor(private readonly languageService: LanguageService) {
    this.languageService.initialize();
  }

  changeLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
}
