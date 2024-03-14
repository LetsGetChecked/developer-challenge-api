import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Language } from './core/language/enums/language.enum';
import { LanguageService } from './core/language/services/language.service';

export const languageServiceStub = {
  initialize: jest.fn(),
  setLanguage: jest.fn(),
};

describe('AppComponent', () => {
  let languageService: LanguageService;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: LanguageService, useValue: languageServiceStub }],
    }).overrideTemplate(AppComponent, '');

    languageService = TestBed.inject(LanguageService);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change language', () => {
    jest.spyOn(languageService, 'setLanguage');

    component.changeLanguage(Language.pt);

    expect(languageService.setLanguage).toHaveBeenCalledWith(Language.pt);
  });
});
