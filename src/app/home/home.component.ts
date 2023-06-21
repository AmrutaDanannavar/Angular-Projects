import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { datamodel } from '../datamodel';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm!: FormGroup;
  data!: datamodel[];

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      date: ['', Validators.required],
      sub: ['', Validators.required],
      des: ['', Validators.required],
      feel: ['', Validators.required],
      

    })
    this.getnote();
  }

  addnote(data: datamodel) {
    //console.log(data)//
    this.api.addnote(data).subscribe((res => {
      this.userForm.reset();
    }))
    this.getnote();

  }

  getnote() {
    this.api.getnote().subscribe(res => {
      this.data = res;
    })
  }


}
