import { member } from './member.model';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MemberService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private testService: MemberService) {}

  member: member = { memberName: '', memberPassword: '', memeberPhone: '' };

  str:String='';
  num:number=5;

  test() {
    this.testService.registerMember(this.member).subscribe(data => {this.str = data ; console.log(this.str);});
  }
}
