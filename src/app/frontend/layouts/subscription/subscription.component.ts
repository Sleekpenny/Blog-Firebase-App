import { Component, OnInit } from '@angular/core';
import { FrontendService } from '../../service/frontend.service';
import { CategoryServiceService } from 'src/app/backend/service/category-service.service';

 interface subsData{
  name:string,
  email:string
}

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  constructor(private subService: FrontendService, private notification: CategoryServiceService){}

  ngOnInit(): void {
    
  }

  onSubmit(form){
    const subInput:subsData = {
      name: form.value.name,
      email: form.value.email
    }

   
    this.subService.checkSub(subInput.email).subscribe({
      next: (data) => {
        if (data.empty){
          this.subService.subscriptionData(subInput)
        } else {
          this.notification.show('Already Registered with this email')
        }
      }
    })
    form.reset()

  }

}
