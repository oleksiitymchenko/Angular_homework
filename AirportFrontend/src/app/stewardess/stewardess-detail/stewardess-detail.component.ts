import { Component, OnInit } from '@angular/core';
import { StewardessService } from '../stewardess.service';
import { ActivatedRoute } from '@angular/router';
import StewardessDto from '../../shared/stewardessDto';

@Component({
  selector: 'app-stewardess-detail',
  templateUrl: './stewardess-detail.component.html',
  styleUrls: ['./stewardess-detail.component.css'],
  providers: [StewardessService]
})
export class StewardessDetailComponent implements OnInit {
    
    stewardess:StewardessDto;
    id:number;
    allowchange:boolean;

  constructor(private service: StewardessService, private route: ActivatedRoute) {  
    this.stewardess = new StewardessDto(undefined,undefined,undefined,undefined);
    this.allowchange = false;
    this.route.params.subscribe(params=>this.id=params['id']);
    this.service.getOneStewardess(this.id)
        .subscribe((data:StewardessDto)=>{this.stewardess=data;console.log(this.stewardess)});
    console.log(this.stewardess);
  }

  stewardessSaveUpdates(id: number,stewardess) {
    console.log(stewardess);
    this.service.updateStewardess(id, stewardess).subscribe((res:Response)=>console.log(res));
  }
  onUpdateClick()
  {
    this.allowchange = true;
  }


  ngOnInit() {
    }
}
