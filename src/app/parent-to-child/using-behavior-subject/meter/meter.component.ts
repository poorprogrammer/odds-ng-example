import { Component, OnInit } from '@angular/core';
import { ProgressService } from 'src/app/parent-to-child/using-behavior-subject/services/progress.service';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css']
})
export class MeterComponent implements OnInit {

  progressValue: number;

  constructor(private progressService: ProgressService) { }

  ngOnInit() {
    this.progressService.getProgress().subscribe(v => this.progressValue = v);
  }

}
