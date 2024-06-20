import { Component, OnInit, isDevMode } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'fcbweb';
  selectedLanguage = 'es';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    this.selectedLanguage = 'en';
    this.translateService.use(this.selectedLanguage);
  }

  ngOnInit() {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }

  onLanguageChange() {
    this.translateService.use(this.selectedLanguage);
  }
}
