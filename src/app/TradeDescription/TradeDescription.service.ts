import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { TradeDescription } from '../vtb.commod.biznet';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class TradeDescriptionService {

	
		private NAMESPACE: string = 'vtb.commod.biznet.TradeDescription';
	



    constructor(private dataService: DataService<TradeDescription>) {
    };

    public getAll(): Observable<TradeDescription[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<TradeDescription> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<TradeDescription> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<TradeDescription> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<TradeDescription> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
