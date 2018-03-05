import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { GecDocService } from './GecDoc.service';

import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-GecDoc',
	templateUrl: './GecDoc.component.html',
	styleUrls: ['./GecDoc.component.css'],
  providers: [GecDocService]
})
export class GecDocComponent implements OnInit {

	myForm: FormGroup;
	model;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;






          projectName = new FormControl("", Validators.required);



          submissionDate = new FormControl("", Validators.required);



          gecMeetingDate = new FormControl("", Validators.required);



          tradeExecutionDate = new FormControl("", Validators.required);



          owner = new FormControl("", Validators.required);



          contractingEntity = new FormControl("", Validators.required);



          countryIncorporated = new FormControl("", Validators.required);



          submitterBusiness = new FormControl("", Validators.required);



          vtbContractingEntity = new FormControl("", Validators.required);



          approvers = new FormControl("", Validators.required);



          traders = new FormControl("", Validators.required);



          productName = new FormControl("", Validators.required);



          tradeDetail = new FormControl("", Validators.required);




  constructor(private serviceGecDoc:GecDocService, fb: FormBuilder) {
    this.myForm = fb.group({


          projectName:this.projectName,



          submissionDate:this.submissionDate,



          gecMeetingDate:this.gecMeetingDate,



          tradeExecutionDate:this.tradeExecutionDate,



          owner:this.owner,



          contractingEntity:this.contractingEntity,



          countryIncorporated:this.countryIncorporated,



          submitterBusiness:this.submitterBusiness,



          vtbContractingEntity:this.vtbContractingEntity,



          approvers:this.approvers,



          traders:this.traders,



          productName:this.productName,



          tradeDetail:this.tradeDetail


    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceGecDoc.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "vtb.commod.biznet.GecDoc",


          "projectName":this.projectName.value,



          "submissionDate":this.submissionDate.value,



          "gecMeetingDate":this.gecMeetingDate.value,



          "tradeExecutionDate":this.tradeExecutionDate.value,



          "owner":this.owner.value,



          "contractingEntity":this.contractingEntity.value,



          "countryIncorporated":this.countryIncorporated.value,



          "submitterBusiness":this.submitterBusiness.value,



          "vtbContractingEntity":this.vtbContractingEntity.value,



          "approvers":this.approvers.value,



          "traders":this.traders.value,



          "productName":this.productName.value,



          "tradeDetail":this.tradeDetail.value


    };

    this.myForm.setValue({


          "projectName":null,



          "submissionDate":null,



          "gecMeetingDate":null,



          "tradeExecutionDate":null,



          "owner":null,



          "contractingEntity":null,



          "countryIncorporated":null,



          "submitterBusiness":null,



          "vtbContractingEntity":null,



          "approvers":null,



          "traders":null,



          "productName":null,



          "tradeDetail":null


    });

    return this.serviceGecDoc.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({


          "projectName":null,



          "submissionDate":null,



          "gecMeetingDate":null,



          "tradeExecutionDate":null,



          "owner":null,



          "contractingEntity":null,



          "countryIncorporated":null,



          "submitterBusiness":null,



          "vtbContractingEntity":null,



          "approvers":null,



          "traders":null,



          "productName":null,



          "tradeDetail":null


      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "vtb.commod.biznet.GecDoc",







            "submissionDate":this.submissionDate.value,





            "gecMeetingDate":this.gecMeetingDate.value,





            "tradeExecutionDate":this.tradeExecutionDate.value,





            "owner":this.owner.value,





            "contractingEntity":this.contractingEntity.value,





            "countryIncorporated":this.countryIncorporated.value,





            "submitterBusiness":this.submitterBusiness.value,





            "vtbContractingEntity":this.vtbContractingEntity.value,





            "approvers":this.approvers.value,





            "traders":this.traders.value,





            "productName":this.productName.value,





            "tradeDetail":this.tradeDetail.value



    };

    return this.serviceGecDoc.updateAsset(form.get("projectName").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {

    return this.serviceGecDoc.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceGecDoc.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {


            "projectName":null,



            "submissionDate":null,



            "gecMeetingDate":null,



            "tradeExecutionDate":null,



            "owner":null,



            "contractingEntity":null,



            "countryIncorporated":null,



            "submitterBusiness":null,



            "vtbContractingEntity":null,



            "approvers":null,



            "traders":null,



            "productName":null,



            "tradeDetail":null


      };




        if(result.projectName){

            formObject.projectName = result.projectName;

        }else{
          formObject.projectName = null;
        }

        if(result.submissionDate){

            formObject.submissionDate = result.submissionDate;

        }else{
          formObject.submissionDate = null;
        }

        if(result.gecMeetingDate){

            formObject.gecMeetingDate = result.gecMeetingDate;

        }else{
          formObject.gecMeetingDate = null;
        }

        if(result.tradeExecutionDate){

            formObject.tradeExecutionDate = result.tradeExecutionDate;

        }else{
          formObject.tradeExecutionDate = null;
        }

        if(result.owner){

            formObject.owner = result.owner;

        }else{
          formObject.owner = null;
        }

        if(result.contractingEntity){

            formObject.contractingEntity = result.contractingEntity;

        }else{
          formObject.contractingEntity = null;
        }

        if(result.countryIncorporated){

            formObject.countryIncorporated = result.countryIncorporated;

        }else{
          formObject.countryIncorporated = null;
        }

        if(result.submitterBusiness){

            formObject.submitterBusiness = result.submitterBusiness;

        }else{
          formObject.submitterBusiness = null;
        }

        if(result.vtbContractingEntity){

            formObject.vtbContractingEntity = result.vtbContractingEntity;

        }else{
          formObject.vtbContractingEntity = null;
        }

        if(result.approvers){

            formObject.approvers = result.approvers;

        }else{
          formObject.approvers = null;
        }

        if(result.traders){

            formObject.traders = result.traders;

        }else{
          formObject.traders = null;
        }

        if(result.productName){

            formObject.productName = result.productName;

        }else{
          formObject.productName = null;
        }

        if(result.tradeDetail){

            formObject.tradeDetail = result.tradeDetail;

        }else{
          formObject.tradeDetail = null;
        }


      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({


          "projectName":null,



          "submissionDate":null,



          "gecMeetingDate":null,



          "tradeExecutionDate":null,



          "owner":null,



          "contractingEntity":null,



          "countryIncorporated":null,



          "submitterBusiness":null,



          "vtbContractingEntity":null,



          "approvers":null,



          "traders":null,



          "productName":null,



          "tradeDetail":null


      });
  }

}
