import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {

  viewExperience: boolean = false;

  experienceList: Experience[] = [
    {
      companyName: "ABC Corp",
      jobTitle: "Retail Jedi",
      description: "Worked as a shopping assistant"
    },
    {
      companyName: "Flash Inc",
      jobTitle: "Light Bender",
      description: "Responsible for the high tech, precision job of making neon lights"
    },
    {
      companyName: "BNC Bank",
      jobTitle: "Legal Bank Robber",
      description: "Checking security vulnerabilities"
    }
  ];

  title: string = "My Work Experience";

  ngOnInit(): void {
    console.log(this.experienceList);
  }

  toggleExperience() {
    if (this.viewExperience) {
      this.viewExperience = false;
    }
    else {
      this.viewExperience = true;
    }
  }

}
