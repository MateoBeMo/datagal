import { Observable } from 'rxjs/Observable';
import { Injectable, ComponentRef, ElementRef } from '@angular/core';
import { Overlay, OverlayRef, OverlayConfig, ConnectedPositionStrategy } from '@angular/cdk/overlay';
import { EventModalComponent } from './eventModal/eventModal.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { DialogPosition } from '@angular/material';

@Injectable()
export class DialogService {
    private portal: ComponentPortal<EventModalComponent>;
    private overlayRef: OverlayRef;
    private el: ElementRef;

    constructor(private overlay: Overlay) { }
    open( el: ElementRef ): Observable<String> {
        
        this.el = el;

        if (!this.createOverlay().hasAttached()) {
            console.log('entra a no has attached');
            const componentRef: ComponentRef<EventModalComponent> = this.createOverlay().attach(this.portal);
            return componentRef.instance.close;
        }
    }

    createOverlay() {
        if (!this.overlayRef) {
            console.log('entra a no hay overlay');
            // a PortalHost as a placeholder for a component or template
            // This will return an OverlayRef instance which is basically a remote control for the overlay
            this.portal = new ComponentPortal(EventModalComponent);
            // OverlayConfig
            const overlayState = new OverlayConfig();
            console.log(this.getPosition());
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
            console.log('entra a close dialog');
            this.overlayRef.detach();
            this.overlayRef = null;
        }
    }
}
