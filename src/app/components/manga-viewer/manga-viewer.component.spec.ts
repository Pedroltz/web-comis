import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaViewerComponent } from './manga-viewer.component';

describe('MangaViewerComponent', () => {
  let component: MangaViewerComponent;
  let fixture: ComponentFixture<MangaViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangaViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
