function initModel() {
	var sUrl = "/OData_Hana/dashboard/dashboard.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}