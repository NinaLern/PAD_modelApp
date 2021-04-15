import { ModalPage } from './../modal/modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  item={
    name:'工作事項',
    due:new DatePipe('en-US').transform(new Date(), 'MM-dd-yyyy'),
    notes:'備註'
  };

  // 設定一個變數名為 mCtrl 用 外部服務 ModalController
  constructor(public mCtrl: ModalController) {}
   
  async present(){
    // 宣告一個常數變數（新增後不會改變的用const） 
    // 建立新畫面於記憶體
    const modal = await this.mCtrl.create({
      component: ModalPage,
      componentProps:{
        // 名稱：值
        name: this.item.name,
        due: this.item.due,
        notes: this.item.notes
      }
    });

    // call back function
    modal.onDidDismiss()
     // .then() 正常回來的時候要怎麼處理
    .then(result=>{
      // " !== " 不等於
      if(result.data !== undefined){
        this.item = result.data;
        this.item.due=new DatePipe('en-US').transform(this.item.due, 'MM-dd-yyyy');
      }
    })
     // .catch() 異常回來的時候要怎麼處理
    .catch( e => {
      console.log(e);
    });
    
    // 呈現畫面
    return await modal.present();
  }

}
