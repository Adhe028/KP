import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TagihanPage } from './tagihan.page';

describe('TagihanPage', () => {
  let component: TagihanPage;
  let fixture: ComponentFixture<TagihanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagihanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TagihanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
