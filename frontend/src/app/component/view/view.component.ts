import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  data: any;
  id:string ="";

  constructor(private route: ActivatedRoute, private dataService: DataService){}

  ngOnInit(): void {

    this.route.params.subscribe((params)=>{
      this.id = params['id'];
      this.dataService.getDataById(this.id).subscribe(result => {
        this.data =result;
      });
    })


  }
}
