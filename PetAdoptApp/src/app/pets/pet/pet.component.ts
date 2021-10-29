import { Component, Input, OnInit } from '@angular/core';
import { PetList } from 'src/app/models/petlist.mode';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  @Input() pets: PetList = new PetList();

  constructor() { }

  ngOnInit(): void {
  }

}
