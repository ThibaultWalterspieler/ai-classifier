import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectionIaComponent } from './containers/detection-ia/detection-ia.component';
import { RouterModule, Routes } from '@angular/router';
import { PosDetectComponent } from './containers/pos-detect/pos-detect.component';



const routes: Routes = [{ path: '', component: DetectionIaComponent }];

@NgModule({
  declarations: [DetectionIaComponent, PosDetectComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ClassifierModule { }
