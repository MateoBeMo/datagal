import { CalendarModalComponent } from './calendarModal/calendarModal.component';
import { Observable } from 'rxjs/Observable';
import { Injectable, ComponentRef, ElementRef, Injector, InjectionToken } from '@angular/core';
import { Overlay, OverlayRef, OverlayConfig, ConnectedPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { DialogPosition } from '@angular/material';
import { CONTAINER_DATA } from './calendar-inyection.token';


@Injectable()
export class CalendarDialogService {
    private portal: ComponentPortal<CalendarModalComponent>;
    private overlayRef: OverlayRef;
    private el: ElementRef;

    constructor(private overlay: Overlay, private injector: Injector) { }
    open( el: ElementRef, date: any, events: any[] ): Observable<String> {
        this.el = el;
        if (!this.createOverlay(date, events).hasAttached()) {
            const componentRef: ComponentRef<CalendarModalComponent> = this.createOverlay(date, events).attach(this.portal);
            return componentRef.instance.close;
        }
    }

    createOverlay(date: any, events: any[]) {
        if (!this.overlayRef) {
            // a PortalHost as a placeholder for a component or template
            // This will return an OverlayRef instance which is basically a remote control for the overlay
            this.portal = new ComponentPortal(CalendarModalComponent, null, this.createInjector({'date': date, 'events': events}));
            // OverlayConfig
            const overlayState = new OverlayConfig();
            overlayState.positionStrategy = this.getPosition();
            overlayState.hasBackdrop = true;
            overlayState.scrollStrategy = this.overlay.scrollStrategies.reposition();
            // OverlayCreate
            this.overlayRef = this.overlay.create(overlayState);
            // Listen to backdropCLicks
            this.overlayRef.backdropClick().subscribe(() => this.closeDialog());
        }
        return this.overlayRef;
    }
    createInjector(data): PortalInjector {
        const injectorTokens = new WeakMap();
        injectorTokens.set(CONTAINER_DATA, data);
        return new PortalInjector(this.injector, injectorTokens);
    }
    private getPosition(): ConnectedPositionStrategy {
        return this.overlay.position().connectedTo(
            this.el,
            { originX: 'start', originY: 'bottom' },
            { overlayX: 'start', overlayY: 'top' })
            .withFallbackPosition(
                { originX: 'start', originY: 'top' },
                { overlayX: 'start', overlayY: 'bottom' })
            .withFallbackPosition(
                { originX: 'start', originY: 'center' },
                { overlayX: 'start', overlayY: 'center' })
            .withFallbackPosition(
                { originX: 'center', originY: 'bottom' },
                { overlayX: 'center', overlayY: 'top' })
            .withFallbackPosition(
                { originX: 'center', originY: 'top' },
                { overlayX: 'center', overlayY: 'bottom' })
            .withFallbackPosition(
                { originX: 'center', originY: 'center' },
                { overlayX: 'center', overlayY: 'center' })
            .withFallbackPosition(
                { originX: 'end', originY: 'bottom' },
                { overlayX: 'end', overlayY: 'top' })
            .withFallbackPosition(
                { originX: 'end', originY: 'top' },
                { overlayX: 'end', overlayY: 'bottom' })
            .withFallbackPosition(
                { originX: 'end', originY: 'center' },
                { overlayX: 'end', overlayY: 'center' });
    }
    closeDialog(): void {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef = null;
        }
    }
}
