import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      surname: new FormControl(),
      email: new FormControl(null, [
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      age: new FormControl(null, [
        this.ageValidator
      ]),
      password: new FormControl(),
      repeat_password: new FormControl()
    }, [this.passwordValidator]);
  }

  ngOnInit() {
    this.formulario.get('email')?.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(value => {
        console.log(value);
      });
  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  ageValidator(control: AbstractControl) {
    const value = control.value;

    if (!value) return null;

    if (value >= 18 && value <= 65) {
      return null;
    } else {
      return { agevalidator: { min: 18, max: 65 } };
    }
  }

  passwordValidator(form: AbstractControl) {
    const passwordValue = form.get('password')?.value;
    const repeatPasswordValue = form.get('repeat_password')?.value;

    if (passwordValue !== repeatPasswordValue) {
      form.get('repeat_password')?.setErrors({ passwordvalidator: true });
      return { passwordvalidator: true };
    }
    form.get('repeat_password')?.setErrors(null);
    return null;
  }

  checkError(controlName: string, errorName: string) {
    return this.formulario.get(controlName)?.hasError(errorName) && this.formulario.get(controlName)?.touched;
  }

}
