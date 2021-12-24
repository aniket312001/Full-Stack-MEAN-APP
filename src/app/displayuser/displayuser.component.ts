import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styleUrls: ['./displayuser.component.css']
})
export class DisplayuserComponent implements OnInit {

  constructor(private service:ApiService,private route:Router) { }

  ngOnInit(): void {
    this.show()

  
  }
  
  user : any
  show(){
    this.service.getAllUser().subscribe(res=>{
      
      this.user = res.data
    })
  }

  onDelete(id:number){
    this.service.deleteUser(id).subscribe(res=>{
      alert("Data delete successfully")
      this.show()
    })
  }

  onEdit(id:number){
    this.route.navigate(['/create'])
    
  }

}
