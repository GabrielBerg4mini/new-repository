import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  AboutComponent,
  ContactComponent,
  EducationComponent,
  ExperienceComponent,
  HeroComponent,
  ProjectsComponent,
  SkillsComponent,
} from '@/app/shared/organisms/index';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ContactComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
