import { Component, OnInit } from '@angular/core';
import { AdoptionList } from '../models/adoption-list.model';
import { Adoption } from '../models/adoption.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-adoptioninfo',
  templateUrl: './adoptioninfo.component.html',
  styleUrls: ['./adoptioninfo.component.css']
})
export class AdoptioninfoComponent implements OnInit {

  table: AdoptionList = new AdoptionList();

  constructor(private service: PetService) { }

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests():void{
    this.service.getRequests().subscribe((data: AdoptionList) => {
      this.table = data;
    })
  }

  deleteRequest(id:number):void{
    this.service.deleteRequest(id).subscribe((data: Adoption) => {
      this.getRequests();
    })
  }

}
