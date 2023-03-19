import { Component, OnInit } from '@angular/core';
import { NgxDropzoneChangeEvent, NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  files: File[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: NgxDropzoneChangeEvent) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}


