# SAPUI5-Fiori-Dashboard
<h1 align="center">SAPUI5 - Fiori App - Dashboard 👋</h1>

<p align="center">
    <img alt="sapui5" src="https://img.shields.io/badge/SAP-UI5-brightgreen" />
    <img alt="fiori" src="https://img.shields.io/badge/SAP-Fiori-brightgreen" />
    <img alt="hana" src="https://img.shields.io/badge/onCloud-HANA-brightgreen" />
</p>

<p>
  <a href="https://twitter.com/Izefler" target="_blank">
    <img alt="Twitter: Izefler" src="https://img.shields.io/twitter/follow/Izefler.svg?style=social" />
  </a>
</p>

<p align="center">
  <a href="#computer-architecture">Architecture</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark_tabs-dependencies">Dependencies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>
</p>

## :computer: Architecture ✨ 
![](https://github.com/DavidsonIzefler/SAPUI5-Fiori-Dashboard/blob/master/images_README/app-arc.png)

## :wrench: Technologies

This project was developed at the **Master Class** by [Rievo](https://rievo.com.br//) using the following technologies:

*  [SAP Cloud Platform - Trial environment](https://account.hana.ondemand.com/#/home/welcome)
*  [SAP UI5 - Chart Components](https://sapui5.hana.ondemand.com/)
*  [SAP Web IDE](https://developers.sap.com/topics/sap-webide.html)
*  [SAP HANA Web-based Development Workbench](https://help.sap.com/viewer/b3d0daf2a98e49ada00bf31b7ca7a42e/2.0.04/en-US/2d6b7d4aafeb4165a235f94efdde673a.html)

## :bookmark_tabs: Dependencies

**Server (HANA Platform):**

<img alt="hana" src="https://img.shields.io/badge/HANA-NEO-brightgreen" /> <img alt="celebrate" src="https://img.shields.io/badge/celebrate-^12.1.1-brightgreen" /> <img alt="cors" src="https://img.shields.io/badge/cors-^2.8.5-brightgreen" /> <img alt="hana-db" src="https://img.shields.io/badge/HANA-DB-brightgreen" />

<br/>
<br/>

**Web (ReactJS):**
  
<img alt="axios" src="https://img.shields.io/badge/axios-^0.19.2-blue" /> <img alt="axios" src="https://img.shields.io/badge/leaflet-^1.6.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react-^16.13.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--dom-^16.13.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--dropzone-^11.0.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--icons-^3.10.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--leaflet-^2.7.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--router--dom-^5.2.0-blue" /> <img alt="axios" src="https://img.shields.io/badge/react--scripts-3.4.1-blue" /> <img alt="axios" src="https://img.shields.io/badge/typescript-^3.7.5-blue" />

<br/>
<br/>

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [HANA][SAPUI5][SAP Web IDE] on Cloud Trial environment via your computer to access. 
Create account in the [SAP Cloud Platform](https://account.hana.ondemand.com/#/home/welcome)

```bash
# Clone this repository
$ git clone https://github.com/DavidsonIzefler/SAPUI5-Fiori-Dashboard.git

# For folder @database 
Export all files for your local machine
After create HANA MDC Database
Run the scripts to 
-> Tabelas.txt to generate tables
-> Views.txt to generate views
-> Carga.txt to populate tables and views

Then add the profiles in the database at SYSTEM user
 - sap.hana.admin.roles::Administrator
 - sap.hana.ide.roles::CatalogDeveloper
 - sap.hana.ide.roles::SecurityAdmin
 - sap.hana.ide.roles::TraceViewer
 - sap.hana.xs.admin.roles::SQLCCAdministrator
 - sap.hana.xs.ide.roles::Developer
 - sap.hana.xs.ide.roles::EditorDeveloper

Then create three files in the Editor composer of "SAP HANA Web Based Development Wrokbeanch: Editor"
 - Create package Dashboard 
 - Import the file .xsapp
 - Import the file .xsaccess 
 - Import the file dashboard.xsodata

After all these task run the file dashboard.xsodata 

# For web project (SAP Web IDE)
  1) Go to services in the SAP Cloud Platform
  2) Start the service SAP Web IDE Full Stack
  3) Import the project that has been cloned from Git
```

## Author

👤 **Davidson Matos Izefler**

* Twitter: [@Izefler](https://twitter.com/Izefler)
* Github: [@DavidsonIzefler](https://github.com/DavidsonIzefler)
* LinkedIn: [@Davidson Izefler](https://linkedin.com/in/DavidsonIzefler)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by Davidson Izefler_ 

