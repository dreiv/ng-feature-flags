import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: '[featureFlag]'
})
export class FeatureFlagDirective implements OnInit {
  @Input() featureFlag: string | string[];
  @Input() featureFlagOr: string = '';

  constructor(
    private vcr: ViewContainerRef,
    private tpl: TemplateRef<any>,
    private userQuery: any
  ) {
  }

  ngOnInit(): void {
    if (this.userQuery.hasFlags(this.featureFlag) ||
        this.userQuery.hasFlags(this.featureFlagOr)
     ) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }

}
