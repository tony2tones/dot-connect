import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dot-block',
  templateUrl: './dot-block.component.html',
  styleUrls: ['./dot-block.component.sass']
})
export class DotBlockComponent {
  @Input() id!: number;
  counter: number = 0;
  one: boolean = false;
  two: boolean = false;
  three: boolean = false;
  four: boolean = false;

  incrementor() {
    if (this.counter === null) {
      this.counter = 0;
      // this.counter ++;
    } else {
      this.counter++;
      if (this.counter === 1) this.one = true;
      if (this.counter === 2) this.two = true;
      if (this.counter === 3) this.three = true;
      if (this.counter === 4) this.four = true;

      console.log('this is heppening', this.counter);
      console.log('this is the toggle ', this.one);

    }

  }


}
