import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';
import { Adoption } from '../models/adoption.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css']
})
export class AdoptionsComponent implements OnInit {

  id:number = 0;
  pet: Pet = new Pet();
  newAdd: Adoption = new Adoption();
  formGroupaa: FormGroup;

  constructor(private route: ActivatedRoute, private service: PetService, private formBuilder: FormBuilder, private router: Router) {
    this.formGroupaa = formBuilder.group({
      name: ["",Validators.required],
      contact: ["",Validators.required]
    });
   }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.getOne();
    });
  }

  getOne():void{
    this.service.getOne(this.id).subscribe((data: Pet) => {
      this.pet = data;
    });
  }

  adoptPet():void{
    this.newAdd = new Adoption(this.formGroupaa.value);
    this.newAdd.petId = this.pet._id;
    this.newAdd.petName = this.pet.name;

    if(!this.formGroupaa.valid){
      alert("Forma nije ispravno popunjena!");
      return;
    }
    
    this.service.postRequest(this.newAdd).subscribe(data => {
      this.router.navigate(['/adoptioninfo']);
      this.formGroupaa.reset();
    });
  }

}
