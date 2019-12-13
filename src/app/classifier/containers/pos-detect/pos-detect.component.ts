import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';



@Component({
  selector: 'app-pos-detect',
  templateUrl: './pos-detect.component.html',
  styleUrls: ['./pos-detect.component.scss']
})
export class PosDetectComponent implements OnInit {

  model: any;
  loading = true;

  constructor() { }



  async ngOnInit() {
    console.log('loading mobilenet model...');
    this.model = await posenet.load();
    console.log('Sucessfully loaded model');
    this.loading = false;

    const net = await posenet.load({
      architecture: 'ResNet50',
      outputStride: 32,
      inputResolution: 257,
      quantBytes: 2
    });




  }

}
