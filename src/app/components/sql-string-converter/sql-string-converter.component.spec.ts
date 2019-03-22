import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlStringConverterComponent } from './sql-string-converter.component';

describe('SqlStringConverterComponent', () => {
  let component: SqlStringConverterComponent;
  let fixture: ComponentFixture<SqlStringConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlStringConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlStringConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
