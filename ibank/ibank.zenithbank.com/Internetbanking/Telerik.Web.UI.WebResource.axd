/* START  */
.RadGrid .rgHeader, .RadGrid .rgHeader a {
  /* color: ghostwhite; */
  background-color: #F3565D #e74c3c;
}



.RadGrid .rgRow a:link, .RadGrid .rgAltRow a:link, .RadGrid tr.rgEditRow a:link, .RadGrid .rgFooter a:link, .RadGrid .rgEditForm a:link {
  color: #F3565D ;
}


.RadGrid {
    border: 0px;
}

.RadGrid .rgRow a:link, 
.RadGrid .rgAltRow  a:link, 
.RadGrid tr.rgEditRow  a:link, 
.RadGrid .rgFooter  a:link, 
.RadGrid .rgEditForm  a:link{
    color: #F3565D ;
}


.RadGrid .rgHeader,.RadGrid   th.rgResizeCol,.RadGrid   .rgHeaderWrapper, .RadGrid  .rgMultiHeaderRow th.rgHeader,.RadGrid  .rgMultiHeaderRow th.rgResizeCol {
  /*font-size: 1.05em;*/
  font-weight: 600 ;
  /*border-bottom: 1px solid #F3565D ;*/
  border-left: 0px ;
  border-right: 0px ;
  vertical-align : bottom ;
  background-color:white ;
  font-size: 12px ;
}

.RadGrid_MetroTouch .rgHeader:first-child, .RadGrid_MetroTouch th.rgResizeCol:first-child, .RadGrid_MetroTouch .rgFilterRow > td:first-child, .RadGrid_MetroTouch .rgRow > td:first-child, .RadGrid_MetroTouch .rgAltRow > td:first-child {
  border-left-width: 1px;
}
.RadGrid .rgRow a:link, .RadGrid .rgAltRow a:link, .RadGrid tr.rgEditRow a:link, .RadGrid .rgFooter a:link, .RadGrid .rgEditForm a:link {
  color: #e74c3c ;
}


.RadGrid .rgRow .rgAltRow{
        border-top: 0;
        padding:12px 0px 12px 0px ;
        /*line-height: 1 ;*/
       
    }





 .RadGrid .rgRow>td,
 .RadGrid .rgAltRow>td {
  font-size:90% ;
  /*background-image: url('assets/../images/dash.gif');*/
  background-position: bottom left ;
  background-repeat: repeat-x ;
}


 .RadGrid .rgRow > td, .RadGrid .rgAltRow > td, .RadGrid  .balanceInfo > td{
  padding:12px 7px 12px 7px ;
  line-height: 1 ;/*1.42857143*/
  vertical-align: top ;
   /*border: 1px solid #ddd;*/
  border-left: 0 ;
  border-right: 0 ;
  color: #000 ;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px ;
  font-weight: 400 ;
  border-bottom:0 ;
 
}

  .RadGrid .inforow>td {
        padding-left: 5px ;
    }

.RadGrid .rgHeader, .RadGrid .rgHeader a {
  /* color: ghostwhite; */
  background-color: #fcf8e3 ;
  color: #000 ;
  font-size: 13px ;
}

.RadGrid_MetroTouch th.rgSorted, .RadGrid_MetroTouch th.rgSorted a {
  /*color: #ef6053 ;*/
}
.RadGrid_MetroTouch th.rgSorted {
  /*background-color: #FCF8E3 ;*/
}

.RadGrid_Metro th.rgSorted {
  /*background-color: #ef6053 ;*/
}

.RadGrid .rgHeader, .RadGrid .rgHeader a {
  /* color: ghostwhite; */
  /* background-color: #fcf8e3; */
  color: #fff ;
  font-size: 13px ;
   background-color: #e74c3c ;
   
}

.RadGrid_MetroTouch .rgNumPart a.rgCurrentPage, .RadGrid_MetroTouch .rgNumPart a.rgCurrentPage:hover {
  background-color: #e74c3c ;
  /*border: 1px solid #e74c3c;*/
  
  color: #fff ;
}


/*.RadGrid_MetroTouch>table {
    border: 0px;
	
}*/

.RadGrid_MetroTouch, .RadGrid_MetroTouch 
 .rgMasterTable, .RadGrid_MetroTouch 
 .rgDetailTable, .RadGrid_MetroTouch 
 .rgGroupPanel table, .RadGrid_MetroTouch 
 .rgCommandRow table, .RadGrid_MetroTouch 
 .rgEditForm table, .RadGrid_MetroTouch 
 .rgPager table {
    font-size: 13px !important;
    /*overflow-x: scroll;*/
    width: 100% !important;
    line-height: 34px !important;
}

.rgHeader {
    line-height: 34px !important;
}


 .RadGrid .rgAltRow>td {
  background: #fcf3f2;
}
/*--------Others -------------*/
.glyphicon-refresh-animate {
   -webkit-animation-name: rotateThis;
   -webkit-animation-duration: 2s;
   -webkit-animation-iteration-count: infinite;
   -webkit-animation-timing-function: linear;
    color:red;
}


@-webkit-keyframes "rotateThis" {
 from { 
        -webkit-transform: rotate( 0deg );  
    }
 to  { 
        -webkit-transform: rotate( 360deg ); 
    }
}
 

.RadPicker .rcCalPopup, .RadPicker .rcTimePopup {
  display: block;
  overflow: hidden;
  width: 22px;
  height: 22px;
  background-color: transparent;
  background-repeat: no-repeat;
  text-indent: -2222px;
  text-align: center;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.RadPicker_MetroTouch .rcCalPopup, .RadPicker_MetroTouch .rcTimePopup {
  /*border: 1px solid ;*/
  background-color: #f9f9f9;
  width: 34px;
  height: 34px;
}




/*************Panels****************/


.page-head {
    padding-bottom:0px;
}

.MContent_LeftZone {

   padding-right:9px;
   padding-left:12px;
}
.MContent_RightZone {
   padding-right:12px;
    padding-left:9px;
}
.MContent_TopZone {
     padding-right:11px;
      padding-left:11px;
}

.MSpecialContent_TopZone {
    padding-right: 0px;
    padding-left: 0px;
}

.panel-default
{
    border-color:#FC021A;
}

.panel-default>.panel-body {
    padding: 10px;
}

.panel-default-grid>.panel-body {
    padding: 0px;
}

.panel-default-grid>.panel-heading {
    background-color:#F1F1F1;
   
}
.panel-default>.panel-heading {
    /*background-color:#F1F1F1;*/
    background-color:#FC021A;
    
}

.panel-default-grid>.panel-heading {
    /*border-bottom: 0;*/
    padding: 0 0px;
    margin-bottom: 0;
    color: #000;
}

.panel-default>.panel-heading {
    /*border-bottom: 0;*/
    padding: 0 0px;
    margin-bottom: 0;
    color: #fff;
}


.panel-default-grid>.panel-heading>.panel-title {
    font-size: 15px;
    color:#000; /*#EF0000;*/
    /*border-bottom: 1px solid #EF0000;*/
    padding: 10px;
    margin-top: 0px;
}

.panel-default>.panel-heading>.panel-title {
    font-size: 15px;
    color:#fff; /*#EF0000;*/
    /*border-bottom: 1px solid #EF0000;*/
    padding: 10px;
    margin-top: 0px;
}


.page-header.navbar .menu-toggler {
    background-image: url('assets/../assets/pages/img/sidebar_toggler_icon_grey.png');
}

 .form-horizontal .has-feedback .form-control-feedback {
    right: 40px !important;
}

[class*=" fa-"]:not(.fa-stack), [class*=" glyphicon-"], [class*=" icon-"], [class^=fa-]:not(.fa-stack), [class^=glyphicon-], [class^=icon-] {
    line-height: 34px !important ;
    
}

.input-group-addon {
    padding: 0px 15px;
}

 


 html body .has-error .RadInput_MetroTouch .riTextBox, html body .has-error  .RadInputMgr_MetroTouch{
     border-color:#a94442;

 }

  html body .has-success .RadInput_MetroTouch .riTextBox, html body .has-success  .RadInputMgr_MetroTouch{
     border-color:#3c763d;

 }




.has-error .RadComboBox_MetroTouch .rcbFocused .rcbInputCell {
     border-color:#a94442;
}


.has-error .RadComboBox_MetroTouch  .rcbInputCell {
     border-color:#a94442;
}

.has-success .RadComboBox_MetroTouch .rcbFocused .rcbInputCell {
     border-color:#3c763d;
}

.has-success .RadComboBox_MetroTouch  .rcbInputCell {
     border-color:#3c763d;
}

.has-error .RadComboBox_MetroTouch .rcbFocused .rcbArrowCell {
    border-color:#a94442;
    background-color:#f2dede;
}

.has-error .RadComboBox_MetroTouch .rcbArrowCell {
    border-color:#a94442;
    background-color:#f2dede;
}

.has-success .RadComboBox_MetroTouch .rcbFocused .rcbArrowCell {
    border-color:#3c763d;
    background-color:#dff0d8;
}

.has-success .RadComboBox_MetroTouch .rcbArrowCell {
    border-color:#3c763d;
    background-color:#dff0d8;
}

.RadGrid .rgHeader, .RadGrid th.rgResizeCol {
     padding-top: 0px;
     padding-bottom: 0px; 

}

.row-grid{
    margin-top: 25px;
}

.mtop9 {
     margin-top: 9px;
}
.mtop5 {
     margin-top: 5px;
}

image62 {
    width:62px;
    height:62px;
    margin-left:13px;
}

.table-responsive {
    overflow-x: inherit;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    .dropdown-menu {
        position: inherit;
    }

    
}

@media screen 
  and (device-width: 320px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 2) {
    .dropdown-menu {
        position: inherit;
    }

}
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 3) {
    .dropdown-menu {
        position: inherit;
    }
}

.form-controloff {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}



.RadGrid .rgHeader, .RadGrid .rgHeader a {
    /* color: ghostwhite; */
    /* background-color: #fcf8e3; */
    color: #fff;
    font-size: 13px;
    background-color: #ff0000;
}

.btn-primary {
    color: #fff;
    background-color: #D42F2D;
    border-color: #FC021A;
}

.btn-primary:hover { 
    background-color: #FC021A;
}

.btn-primary:active {
     color: #fff;
    background-color: #D42F2D;
    border-color: #FC021A;
}

.btn-primary:visited {
     color: #fff;
    background-color: #D42F2D;
    border-color: #FC021A;
}

    .btn-primary.disabled, .btn-primary[disabled], fieldset[disabled] .btn-primary, .btn-primary.disabled:hover, .btn-primary[disabled]:hover, fieldset[disabled] .btn-primary:hover, .btn-primary.disabled:focus, .btn-primary[disabled]:focus, fieldset[disabled] .btn-primary:focus, .btn-primary.disabled.focus, .btn-primary[disabled].focus, fieldset[disabled] .btn-primary.focus, .btn-primary.disabled:active, .btn-primary[disabled]:active, fieldset[disabled] .btn-primary:active, .btn-primary.disabled.active, .btn-primary[disabled].active, fieldset[disabled] .btn-primary.active {
       background-color: #D42F2D;
        border-color: #FC021A;
     }


    .RadCalendarMonthView_MetroTouch #rcMView_Today {
    margin: 0;
    background: #FF0000;
    border-color: #FF0000;
    width: 100px;
    text-transform: lowercase;
}

.RadCalendarMonthView_MetroTouch .rcSelected a {
    background: #FF0000;
    color: #fff;
    padding: 0;
    border: 0;
}

		
/*.input-group .form-control:last-child, .input-group-addon:last-child, .input-group-btn:last-child>.btn, .input-group-btn:last-child>.btn-group>.btn, .input-group-btn:last-child>.dropdown-toggle, .input-group-btn:first-child>.btn:not(:first-child), .input-group-btn:first-child>.btn-group:not(:first-child)>.btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 20px;
}*/	



.RadComboBox_MetroTouch .rcbFocused .rcbReadOnly .rcbInput {
     color: #000;
}

.RadComboBox_MetroTouch .rcbFocused .rcbReadOnly .rcbInputCell {
    /* border-color: #25a0da; */
    color: #fff;
    background-color: #FFFFFF;
}

.RadComboBox_MetroTouch .rcbHovered .rcbReadOnly .rcbInputCell {
    /* border-color: #25a0da; */
    color: #fff;
    background-color: #FFFFFF;
}

.RadComboBox_MetroTouch .rcbReadOnly .rcbInputCell {
    border-color: #cdcdcd;
     background-color: #FFFFFF; 
    color: #000;
}

.RadComboBox_MetroTouch .rcbFocused .rcbArrowCell {
    border-color: #FF0000 ;
    color: #fff;
    background-color: #FF0000;
}


.RadComboBox_MetroTouch .rcbHovered .rcbArrowCell {
    color: #fff;
    background-color: #FF0000;
}

.RadGrid .rgRow a:link, .RadGrid .rgAltRow a:link, .RadGrid tr.rgEditRow a:link, .RadGrid .rgFooter a:link, .RadGrid .rgEditForm a:link {
    color: #FF0000;
    text-decoration:underline;
}

.RadGrid_Bootstrap .rgPagerCell .rgNumPart a.rgCurrentPage {
    background-color: #FF0000;
    border: 1px solid #FF0000;
    color: #fff;
}

.rcbSlide {

z-index: 60000 !important;

}

.benesearch {

        margin-top: 23px;
}

.RadGrid_MetroTouch th.rgSorted {
    background-color: #fc021a;
}



html body .RadInput_MetroTouch .riTextBox, html body .RadInputMgr_MetroTouch {
    border-color: #cdcdcd;
    background: white;
    color: black;
    font: 100 14px "Helvetica Neue",Helvetica,Arial,sans-serif !important; 
}
html body .riSingle .riTextBox {
    /* padding-right: 5px; */
    padding-left: 17px;
    margin: 0;
    width: 100%;
}


.RadComboBoxDropDown_MetroTouch {
    border-color: #cdcdcd;
    color: black;
    background-color: #fff;
    font-size: 14px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important; 
    line-height: 1.5;
}

.RadComboBox_MetroTouch .rcbInput {
    margin: 0;
    color: black;
    font-size: 14px !important;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important; 
    font-weight: normal;
}

label {
    font-weight: 500 !important;
    font-size: 14px
}

.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
   color: black !important;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

.grey-bar {
    background-color: #d3d3d3;
    padding: 1px 1px;
    overflow: hidden;
    display: block;
    margin-bottom: 20px;
}

/*Dashboard Grid Loading*/

#fountainG{
	position:relative;
	width:234px;
	height:28px;
	margin:auto;
}

.fountainG{
	position:absolute;
	top:0;
	background-color:rgb(0,0,0);
	width:28px;
	height:28px;
	animation-name:bounce_fountainG;
		-o-animation-name:bounce_fountainG;
		-ms-animation-name:bounce_fountainG;
		-webkit-animation-name:bounce_fountainG;
		-moz-animation-name:bounce_fountainG;
	animation-duration:1.5s;
		-o-animation-duration:1.5s;
		-ms-animation-duration:1.5s;
		-webkit-animation-duration:1.5s;
		-moz-animation-duration:1.5s;
	animation-iteration-count:infinite;
		-o-animation-iteration-count:infinite;
		-ms-animation-iteration-count:infinite;
		-webkit-animation-iteration-count:infinite;
		-moz-animation-iteration-count:infinite;
	animation-direction:normal;
		-o-animation-direction:normal;
		-ms-animation-direction:normal;
		-webkit-animation-direction:normal;
		-moz-animation-direction:normal;
	transform:scale(.3);
		-o-transform:scale(.3);
		-ms-transform:scale(.3);
		-webkit-transform:scale(.3);
		-moz-transform:scale(.3);
	border-radius:19px;
		-o-border-radius:19px;
		-ms-border-radius:19px;
		-webkit-border-radius:19px;
		-moz-border-radius:19px;
}

#fountainG_1{
	left:0;
	animation-delay:0.6s;
		-o-animation-delay:0.6s;
		-ms-animation-delay:0.6s;
		-webkit-animation-delay:0.6s;
		-moz-animation-delay:0.6s;
}

#fountainG_2{
	left:29px;
	animation-delay:0.75s;
		-o-animation-delay:0.75s;
		-ms-animation-delay:0.75s;
		-webkit-animation-delay:0.75s;
		-moz-animation-delay:0.75s;
}

#fountainG_3{
	left:58px;
	animation-delay:0.9s;
		-o-animation-delay:0.9s;
		-ms-animation-delay:0.9s;
		-webkit-animation-delay:0.9s;
		-moz-animation-delay:0.9s;
}

#fountainG_4{
	left:88px;
	animation-delay:1.05s;
		-o-animation-delay:1.05s;
		-ms-animation-delay:1.05s;
		-webkit-animation-delay:1.05s;
		-moz-animation-delay:1.05s;
}

#fountainG_5{
	left:117px;
	animation-delay:1.2s;
		-o-animation-delay:1.2s;
		-ms-animation-delay:1.2s;
		-webkit-animation-delay:1.2s;
		-moz-animation-delay:1.2s;
}

#fountainG_6{
	left:146px;
	animation-delay:1.35s;
		-o-animation-delay:1.35s;
		-ms-animation-delay:1.35s;
		-webkit-animation-delay:1.35s;
		-moz-animation-delay:1.35s;
}

#fountainG_7{
	left:175px;
	animation-delay:1.5s;
		-o-animation-delay:1.5s;
		-ms-animation-delay:1.5s;
		-webkit-animation-delay:1.5s;
		-moz-animation-delay:1.5s;
}

#fountainG_8{
	left:205px;
	animation-delay:1.64s;
		-o-animation-delay:1.64s;
		-ms-animation-delay:1.64s;
		-webkit-animation-delay:1.64s;
		-moz-animation-delay:1.64s;
}



@keyframes bounce_fountainG{
	0%{
	transform:scale(1);
		background-color:rgb(0,0,0);
	}

	100%{
	transform:scale(.3);
		background-color:rgb(255,255,255);
	}
}

@-o-keyframes bounce_fountainG{
	0%{
	-o-transform:scale(1);
		background-color:rgb(0,0,0);
	}

	100%{
	-o-transform:scale(.3);
		background-color:rgb(255,255,255);
	}
}

@-ms-keyframes bounce_fountainG{
	0%{
	-ms-transform:scale(1);
		background-color:rgb(0,0,0);
	}

	100%{
	-ms-transform:scale(.3);
		background-color:rgb(255,255,255);
	}
}

@-webkit-keyframes bounce_fountainG{
	0%{
	-webkit-transform:scale(1);
		background-color:rgb(0,0,0);
	}

	100%{
	-webkit-transform:scale(.3);
		background-color:rgb(255,255,255);
	}
}

@-moz-keyframes bounce_fountainG{
	0%{
	-moz-transform:scale(1);
		background-color:rgb(0,0,0);
	}

	100%{
	-moz-transform:scale(.3);
		background-color:rgb(255,255,255);
	}
}

/*legend dashboard Grid Loading*/

.hidegrid 
{
    display: none;
    visibility:hidden;
}

.RadCalendar_MetroTouch .rcMain .rcRow .rcSelected a {
    border-color: #fc021a;
    background:#fc021a;
    color: white;
}
.mleft10 {
    display:normal
}

@media only screen and (max-width: 1026px) {
.carousel{ display:none;}.support{ display:none}
}

@media only screen and (max-width: 1200px) {
.carousel{ display:none;}.mleft10 { margin-left: 10px;}
}

.RadComboBox .rcbEmptyMessage {
    font-style:normal;
}

.RadComboBox_MetroTouch .rcbInput {
    margin: 0;
    color: black;
    font-size: 14px !important;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
    font-weight: normal;
}
tablespecial th {
    width: 10% !important;
}

.Alink {
    color: #ff0000 !important;
    font-size: 13px !important;
    text-decoration:underline !important;
}

.billeriframe{
     height:500px;
     width:100%; 
     border:none;
     overflow:hidden;
}
 /* Vertical Offset Top */
.vert-offset-top-12{
    margin-top: 12em;
}
.vert-offset-top-11{
    margin-top: 11em;
}
.vert-offset-top-10{
    margin-top: 10em;
}
.vert-offset-top-9{
    margin-top: 9em;
}
.vert-offset-top-8{
    margin-top: 8em;
}
.vert-offset-top-7 {
    margin-top: 7em;
}
.vert-offset-top-6{
    margin-top: 6em;
}
.vert-offset-top-5{
    margin-top: 5em;
}
.vert-offset-top-4{
    margin-top: 4em;
}
.vert-offset-top-3{
    margin-top: 3em;   
}
.vert-offset-top-2{
    margin-top: 2em;
}
.vert-offset-top-1{
    margin-top: 1em;
}
.vert-offset-top-0{
    margin-top: 0em;
}
/* Vertical Offset Bottom */
.vert-offset-bottom-12{
    margin-bottom: 12em;
}
.vert-offset-bottom-11{
    margin-bottom: 11em;
}
.vert-offset-bottom-10{
    margin-bottom: 10em;
}
.vert-offset-bottom-9{
    margin-bottom: 9em;
}
.vert-offset-bottom-8{
    margin-bottom: 8em;
}
.vert-offset-bottom-7{
    margin-bottom: 7em;
}
.vert-offset-bottom-6{
    margin-bottom: 6em;
}
.vert-offset-bottom-5{
    margin-bottom: 5em;
}
.vert-offset-bottom-4{
    margin-bottom: 4em;
}
.vert-offset-bottom-3{
    margin-bottom: 3em;
}
.vert-offset-bottom-2{
    margin-bottom: 2em;
}
.vert-offset-bottom-1{
    margin-bottom: 1em;
}
.vert-offset-bottom-0{
    margin-bottom: 0em;
}

.hr-sect {
	display: flex;
	flex-basis: 100%;
	align-items: center;
	/*color: rgba(0, 0, 0, 0.35);*/
	margin: 8px 0px;
    color: black;
    background-color: #fff;
    font-size: 14px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important; 
    line-height: 1.5;
}
.hr-sect::before,
.hr-sect::after {
	content: "";
	flex-grow: 1;
	background: rgba(0, 0, 0, 0.35);
	height: 1px;
	font-size: 0px;
	line-height: 0px;
	margin: 0px 8px;

}

.form-control-feedback {
    position: absolute;
    top: 0;
    right: 0;
    left: 87% !important; /*please this is to fix the button icon icon*/
    z-index: 2;
    display: block;
    width: 10px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    pointer-events: none;
}

/*this very important*/
@media (min-width: 768px) {
    .navbar-nav > li > a {
        padding-top: 8px !important;
        padding-bottom:unset !important;
    }
}

.not-active {
    pointer-events: none;
    cursor: default;
    background-color: #f36a5a;
    border-color: #f36a5a;
}
/* END  */
