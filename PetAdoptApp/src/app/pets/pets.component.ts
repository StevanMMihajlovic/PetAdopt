import { Component, OnInit } from '@angular/core';
import { PetList } from '../models/petlist.mode';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets:PetList = new PetList();

  params = {
    sort: "",
    sortDirection: "acs",
    filter: {sex: "", category: ""}
  }

  constructor(private service :PetService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets():void{
    this.service.getPets(this.params).subscribe((data: PetList) => {
      this.pets = data;
    })
  }

}
