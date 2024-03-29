import { Component, Input } from '@angular/core';
import { mock_list_2 } from './mock_list_2';

@Component({
  selector: 'app-cards2',
  templateUrl: './cards2.component.html',
  styleUrls: ['./cards2.component.css']
})
export class Cards2Component {
  @Input() title: string;
  @Input() imgDescription: string;
  @Input() description: string;
  @Input() img: string;

  constructor() {
    this.img ="No img found";
    this.imgDescription = "No description found"
    this.title = "N/Atest"
    this.description = "No information found"
   }

  ngOnInit(): void {
  }
  getItems(){
    return mock_list_2;
  }

}

