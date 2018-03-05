import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { ProductType } from '../vtb.commod.biznet';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ProductTypeService {

	
		private NAMESPACE: string = 'vtb.commod.biznet.ProductType';
	



    constructor(private dataService: DataService<ProductType>) {
    };

    public getAll(): Observable<ProductType[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ProductType> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ProductType> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ProductType> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ProductType> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
