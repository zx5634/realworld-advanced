import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('',
     [Validators.required, Validators.minLength(10)]
    ),
    tags: new FormArray([
      new FormControl('Angular'),
      new FormControl('Html'),
      new FormControl('Css'),
    ], Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  get tags() {
    return this.postForm.get('tags') as FormArray;
  }

  get title() {
    return this.postForm.get('title');
  }

  get content() {
    return this.postForm.get('content');
  }

  addTag(newTag) {
    if (newTag) {
      this.tags.push(new FormControl(newTag));
    }
  }

  removeTag(idx) {
    this.tags.removeAt(idx);
  }

  onSubmit() {
    console.log(this.postForm.value);
  }
}
