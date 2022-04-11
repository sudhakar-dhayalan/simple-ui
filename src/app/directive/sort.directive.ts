import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Sort } from '../util/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  @Input() appSort: any = [];

  constructor(private renderer: Renderer2, private targetElement: ElementRef) { }

  @HostListener("click")
  sortData() {

    const sort = new Sort();

    const elem = this.targetElement.nativeElement;

    const order = elem.getAttribute("data-order");

    const type = elem.getAttribute("data-type");

    const property = elem.innerText.toLowerCase();

    if (order === "desc") {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "asc");
    } else {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "desc");
    }
    this.removeOtherArrowAndHighlight(elem);
  }

  private removeOtherArrowAndHighlight(elem: any) {
    const isAsc = elem.getAttribute("data-order") === 'asc';
    const upArrow = elem.childNodes[1];
    const downArrow = elem.childNodes[2];

    const NOT_SHOW = 'not-show';
    const HIGHLIGHT = 'highlight';
    if(isAsc) {
      downArrow?.classList.contains(HIGHLIGHT) && downArrow?.classList.remove(HIGHLIGHT);
      upArrow?.classList.contains(NOT_SHOW) && upArrow?.classList.remove(NOT_SHOW);
      downArrow?.classList.add(NOT_SHOW);
      upArrow?.classList.add(HIGHLIGHT);
    } else {
      upArrow?.classList.contains(HIGHLIGHT) && upArrow?.classList.remove(HIGHLIGHT);
      downArrow?.classList.contains(NOT_SHOW) && downArrow?.classList.remove(NOT_SHOW);
      downArrow?.classList.add(HIGHLIGHT);
      upArrow?.classList.add(NOT_SHOW);
    }
  }
}
