import { Component, OnInit, Input, ContentChild, HostBinding, ViewEncapsulation } from '@angular/core';
import { InputRefDirective } from '../common/InputRefDirective';

@Component({
  selector: 'au-fa-input',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit {
  @Input()
  icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.input)
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes(): object {
    const cssClasses = {
      'fa': true
    }
    if(this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }

}
