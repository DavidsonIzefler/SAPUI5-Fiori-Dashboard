sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("br.com.dashboard.SalesDashboard.controller.Dashboard", {
		onInit: function () {

		},
		
		onPressOpenPopover:function(oEvent) {
			if(!this._oPopover){
				this._oPopover = sap.ui.xmlfragment("br.com.dashboard.SalesDashboard.view.Card", this);
				this.getView().addDependent(this._oPopover);
			}
			
			this._oPopover.openBy(oEvent.getSource());
			
			var oCard = sap.ui.getCore().byId("cardRevenue");
			var oView = this.getView();
			
			oCard.bindElement({
				path: "/SalesQuarter('PRI')",
				events: {
					dataRequested: function(){
						oView.setBusy(true);
					},
					dataReceived: function(){
						oView.setBusy(false);
					}
				}
			});
		}
	});
});