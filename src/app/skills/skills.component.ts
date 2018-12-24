import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as skillDetails from '../data/skills.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillDetails: Object;
  readonly progress: Observable<number>;

  constructor() {
    this.progress = this.emulateProgress();
  }

  ngOnInit() {
    this.skillDetails = skillDetails;
  }

  emulateProgress() {
    return new Observable<number>(observer => {
      let val = 0;
      const interval = setInterval(() => {
        if (val < 100) {
          val++;
        } else {
          val = 0;
        }

        observer.next(val);
      }, 100);

      return () => {
        clearInterval(interval);
      };
    });
  }

}
