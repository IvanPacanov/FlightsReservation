import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfirmFlightService } from 'src/app/services/confirm-flight.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  destroySubject$ = new Subject<void>();
  countOfFlight: number;

  constructor(
    private confirmFlightService: ConfirmFlightService) { }

  ngOnInit(): void {
    this.confirmFlightService.currentCountOfFlight.pipe(
      takeUntil(this.destroySubject$)).subscribe(data => this.countOfFlight = data);
  }

  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

}
