import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  OnInit
} from '@angular/core';
import { UserStoreService } from './user-store.service';

@Directive({
  selector: '[featureFlag]'
})
export class FeatureFlagDirective implements OnInit {
  @Input() featureFlag: string | string[];

  constructor(
    private vcr: ViewContainerRef,
    private tpl: TemplateRef<any>,
    private store: UserStoreService
  ) {}

  ngOnInit(): void {
    if (this.store.hasFlags(this.featureFlag)) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
