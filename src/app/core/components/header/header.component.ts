import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideBarSignal } from '../../../shared/signals/sidebar.signal';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../states/app.state';
import { selectCount } from '../../../states/counter/counter.selector';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../../shared/models/product.interface';
import { selectCartProducts } from '../../../states/cart/cart.selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, AsyncPipe,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  count$: Observable<number>
  product$:Observable<IProduct[]>
  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount)
    this.product$ = this.store.select(selectCartProducts)
  }
  
  public readonly sidebarSignal = inject(SideBarSignal);
  toggle() {
    this.sidebarSignal.sidebarOpen.update(val => !val);
  }
}
