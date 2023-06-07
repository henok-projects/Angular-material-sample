import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  parentForm!: FormGroup;
  documentFormGroup = this.fb.group({
    fileName: ['', Validators.required],
    documentType: ['', Validators.required],
    fileDescription: ['', Validators.required],
    childArray: this.fb.array([]),
  });

  displayedColumns: string[] = ['fileName', 'documentType', 'fileDescription'];
  fileToUpload: File | null = null;
  fileFromDragDrop: string = '';
  acceptedExtensions = 'txt, pdf, scss,png, jpg, pkg, rar';
  fileTypeError = false;
  validFileType = true;
  data: any;
  childArray!: FormArray;
  tableDataSource!: MatTableDataSource<any>;
  //selection!: new SelectionModel<any>(true, []);
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private ctrContainer: FormGroupDirective
  ) {}

  ngOnInit(): void {
    this.parentForm = this.ctrContainer.form;
    this.documentFormGroup.patchValue({
      documentType: '(based on file selection)',
    });

    this.documentFormGroup.get('documentType')?.disable();

    this.childArray = this.documentFormGroup.get('childArray') as FormArray;
    this.tableDataSource = new MatTableDataSource(
      (this.documentFormGroup.get('childArray') as FormArray).controls
    );
  }

  isAllSelected() {}

  masterToggle() {}

  handleFileInput(event: any) {
    if (event instanceof File) {
      this.fileFromDragDrop = event.name;

      if (this.validateFile(event.name)) {
        this.documentFormGroup.get('fileName')?.setValue(event.name);
      }
    } else {
      if (event.target.files && event.target.files.length) {
        const file = event.target.files[0];
        this.fileToUpload = file.name;

        if (this.validateFile(file.name)) {
          this.documentFormGroup.get('fileName')?.setValue(file.name);
        }
      }
    }
  }

  validateFile(name: string) {
    // this.validFileType = true;
    var ext = name.substring(name.lastIndexOf('.') + 1);

    if (ext.toLocaleLowerCase() == 'pdf') {
      this.documentFormGroup.patchValue({
        documentType: 'pdf',
      });
      return true;
    } else if (ext.toLocaleLowerCase() == 'txt') {
      this.documentFormGroup.patchValue({
        documentType: 'text',
      });
      return true;
    } else if (ext.toLocaleLowerCase() == 'pkg') {
      this.documentFormGroup.patchValue({
        documentType: 'pkg',
      });
      return true;
    } else if (ext.toLocaleLowerCase() == 'rar') {
      this.documentFormGroup.patchValue({
        documentType: 'zip file',
      });
      return true;
    } else {
      this.documentFormGroup.patchValue({
        documentType: '(based on file selection)',
      });
      // this.validFileType = false;
      return false;
    }
  }

  addToTable() {
    let row = this.fb.group({
      fileName: this.documentFormGroup.get('fileName')?.value,
      documentType: this.documentFormGroup.get('documentType')?.value,
      fileDescription: this.documentFormGroup.get('fileDescription')?.value,
    });

    if (this.documentFormGroup.valid) {
      if (row.get('fileName')?.value) {
        this.childArray.push(row);
      }
    }

    this.tableDataSource = new MatTableDataSource(
      (this.documentFormGroup.get('childArray') as FormArray).controls
    );
    this.data = Object.assign(this.tableDataSource.data);
    this.resetForm();
  }

  resetForm() {
    this.fileToUpload = null;
    this.fileFromDragDrop = '';
    this.documentFormGroup.get('fileName')?.setValue('');
    this.documentFormGroup
      .get('documentType')
      ?.setValue('(based on file Upload)');
    this.documentFormGroup.get('fileDescription')?.setValue('');
  }
}
