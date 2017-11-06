import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgxOrderByPipe} from './ngx-order-by/ngx-order-by.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NgxOrderByPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [NgxOrderByPipe]
})
export class AppModule {
}
