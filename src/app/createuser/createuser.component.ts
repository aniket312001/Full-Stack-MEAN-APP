import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})


export class CreateuserComponent implements OnInit {
  formValue !: FormGroup
  constructor(private fb:FormBuilder,private service:ApiService,private route:ActivatedRoute) { }

  mydata = {}
  
  id!:number
  ngOnInit(): void {
    this.formValue = this.fb.group({
      name:"",
      email:"",
      mobile:""
    })

  
    if(this.route.snapshot.paramMap.get('id')){

      console.log(this.route.snapshot.paramMap.get('id'))
      this.id = Number(this.route.snapshot.paramMap.get('id'))
      this.mydata = this.service.getUserById(this.id).subscribe(data=>{
        this.formValue.patchValue({
          name:data.data[0].name,
          email:data.data[0].email,
          mobile:data.data[0].mobile

        })
      })
        console.log(this.mydata)
        this.formValue.controls['name'].setValue(this.mydata)
        
    }

  }
  onSubmit(){
    // console.log(JSON.stringify(this.formValue.value))
    this.service.createUser(this.formValue.value).subscribe(data=>{
      console.log("data has been successfully add")
      this.formValue.reset()
    })
  }

  onUpdate(){
    this.service.updateUser(this.id,this.formValue.value).subscribe(data=>{
      alert("Data has been Updated")
      this.formValue.reset()
    })
  }
}
