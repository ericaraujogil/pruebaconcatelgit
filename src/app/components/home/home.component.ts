import { Component, OnInit, Input } from '@angular/core';
import { FizzbuzzService } from '../../services/fizzbuzz.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  display: string[];
  @Input() lastNumber: number;
  constructor(private fizzservice:FizzbuzzService) {
    
   }

  ngOnInit() {
  }

}
