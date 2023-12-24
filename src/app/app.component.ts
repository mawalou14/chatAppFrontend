import { Observable } from 'rxjs';
import { Test, TestService } from './Services/test/test.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private testSrv: TestService) { }

  title = 'chatAppFrontend';

  testValue: Observable<Test> = this.testSrv.getTest();
}
