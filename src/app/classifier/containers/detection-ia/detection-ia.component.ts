import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Prediction } from '../../../prediction';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-detection-ia',
  templateUrl: './detection-ia.component.html',
  styleUrls: ['./detection-ia.component.scss']
})
export class DetectionIaComponent implements OnInit, AfterViewInit {

  imageSrc: string;
  @ViewChild('img') img: ElementRef;
  @ViewChild('video') video: ElementRef;

  predictions: Prediction[];

  model: any;
  loading = true;


  constructor() { }



  async ngOnInit() {
    console.log('loading mobilenet model...');
    this.model = await mobilenet.load();
    console.log('Sucessfully loaded model');
    this.loading = false;


    setInterval(async () => {
      this.predictions = await this.model.classify(this.video.nativeElement);
      await tf.nextFrame();
    }, 3000);
  }

  async fileChangeEvent(event) {
    // if (event.target.files && event.target.files[0]) {
    //   const reader = new FileReader();

    //   reader.readAsDataURL(event.target.files[0]);

    //   reader.onload = (res: any) => {
    //     this.imageSrc = res.target.result;
    //     console.log(this.imageSrc);

    //     setTimeout(async () => {
    //       this.predictions = await this.model.classify(this.img.nativeElement);
    //     });
    //   };
    // }

  }

  async ngAfterViewInit() {
    const vid = this.video.nativeElement;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          vid.srcObject = stream;

        })
        .catch((err0r) => {
          console.log('Something went wrong!');
        });
    }
  }

}
