import { Component, OnInit, Type } from '@angular/core';
import { CreateProjectDropzoneComponent } from '../../components/create-project-dropzone/create-project-dropzone.component';

interface IStep {
  title: string;
  active: boolean;
  complete: boolean;
  warning: boolean;
  ready: boolean;
  stepComponentType: StepComponentType;
}

export enum StepComponentType {
  PRE_UPLOAD = 'PRE_UPLOAD',
  UPLOAD = 'UPLOAD',
  DATA = 'DATA',
}

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  private static readonly FIRST_STEP = 0;

  private files: File[] = [];

  private StepComponentTypes = StepComponentType;
  private activeStepComponent: IStep;
  private steps: IStep[] = [
    {
      title: 'Bestand toevoegen',
      active: true,
      complete: false,
      warning: false,
      ready: false,
      stepComponentType: StepComponentType.PRE_UPLOAD
    },
    {
      title: 'Info & Taggen',
      active: false,
      complete: false,
      warning: false,
      ready: false,
      stepComponentType: StepComponentType.DATA,
    },
    {
      title: 'Uploaden!',
      active: false,
      complete: false,
      warning: false,
      ready: false,
      stepComponentType: StepComponentType.UPLOAD
    }
  ];

  constructor() { }

  ngOnInit() {
    this.activeStepComponent = this.steps[CreateProjectComponent.FIRST_STEP];
  }

  validatePreUpload($files: File[]): void {
    this.files = $files;

    if (this.files.length < 1) {
      this.setStepReady(this.getCurrentIndex(), false);
      return;
    }

    this.setStepReady(this.getCurrentIndex(), true);
  }

  onPreviousStepClick() {
    const currentStepIndex = this.getCurrentIndex();

    if (!this.isFirstStep(currentStepIndex)) {
      const previousStepIndex = currentStepIndex - 1;

      this.setStepWarning(currentStepIndex, true);
      this.setStepActive(currentStepIndex, false);

      this.setStepActive(previousStepIndex, true);

      this.activeStepComponent = this.steps[previousStepIndex];
    }
  }

  onNextStepClick() {
    const currentStepIndex = this.getCurrentIndex();

    if (!this.steps[currentStepIndex].ready) {
      console.log(`Cant go next because -> ${this.steps[currentStepIndex].stepComponentType} == ${this.steps[currentStepIndex].ready}`);
      return;
    }

    if (!this.isLastStep(currentStepIndex)) {
      const nextStepIndex = currentStepIndex + 1;

      this.setStepComplete(currentStepIndex, true);
      this.setStepActive(currentStepIndex, false);

      this.setStepActive(nextStepIndex, true);

      this.activeStepComponent = this.steps[nextStepIndex];

      return;
    }
  }

  setStepComplete(stepIndex: number, toggle: boolean): void {
    this.steps[stepIndex].complete = toggle;
    this.steps[stepIndex].warning = !toggle;
  }

  setStepWarning(stepIndex: number, toggle: boolean): void {
    this.steps[stepIndex].complete = false;
    this.steps[stepIndex].warning = toggle;
    this.steps[stepIndex].ready = !toggle;
  }

  setStepReady(stepIndex: number, toggle: boolean): void {
    this.steps[stepIndex].warning = !toggle;
    this.steps[stepIndex].ready = toggle;
  }

  setStepActive(stepIndex: number, toggle: boolean): void {
    this.steps[stepIndex].active = toggle;
  }

  getCurrentIndex = (): number => this.steps.findIndex(
    (step: IStep) => step.stepComponentType === this.activeStepComponent.stepComponentType
  )

  isFirstStep = (stepIndex: number): boolean => stepIndex === 0;
  isLastStep = (stepIndex: number): boolean => this.steps[stepIndex + 1] === undefined;
}
