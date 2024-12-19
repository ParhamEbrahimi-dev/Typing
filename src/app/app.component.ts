import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker'

@Component({
  selector: 'app-root',
  imports: [NgIf,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText : string = faker.lorem.sentence();
  inputText : string ="";
  
  onChangeInput(value:string){
    this.inputText=value;
  }
  compare(randomLetter:string,inputLetter:string):string{
    if(!inputLetter)
      return "pending";
    return randomLetter==inputLetter?"correct":"incorrect";
  }
}

