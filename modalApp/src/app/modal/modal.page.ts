import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  item ={
    name: '',
    due:'',
    notes:''
  };
  // 呼叫NavParams接收參數
  constructor(private params: NavParams,
     private mCtrl: ModalController) {
      }

  ngOnInit() {
    this.item={
      name: this.params.get('name'),
      due: this.params.get('due'),
      notes: this.params.get('notes')
    };
  }

  // 關閉頁面-取消
  close(){
    this.mCtrl.dismiss();
  }

  // 關閉頁面-儲存
  save(){
    this.mCtrl.dismiss(this.item);
  }

}
