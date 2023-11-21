import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../service/category-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{

  newNotifi:string

  constructor(private notifiService:CategoryServiceService){}

  ngOnInit(): void {
    this.notifiService.notifications.subscribe({
    next: (data)=>{
      this.newNotifi = data

      setTimeout(()=>{
        this.newNotifi = null
      }, 2000)
      }
    })
  }
}
