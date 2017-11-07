
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="Author" content="Kinyua Jason Muriki">
		 <meta name="description" content="Crazy Startups">
        <meta name="keywords" content="Kenya, DeKUT, GEGIS, Geo-Developer, Geomatics, GIS, Kinyua Jason Muriki">
        <title>GIS Applications</title>
        <link href="pool/css/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="pool/css/bootstrap/css/bootstrap-social.css" rel="stylesheet">
        <link href="pool/css/bootstrap/css/font-awesome.css" rel="stylesheet">
        <link href="pool/css/style.css" rel="stylesheet">
        <link href="pool/css/site.css" rel="stylesheet" >
		<link rel="stylesheet" type="text/css" href="pool/css/page.css">

		<link rel="stylesheet" href="pool/libs/leaflet/leaflet.css" />
		<link rel="stylesheet" href="pool/libs/leaflet/leaflet.label.css" />
		<link rel="stylesheet" href="pool/plugs/css/counties.css" />
		<script  src="data/nyeri.geojson"></script>
		<script  src="pool/libs/leaflet/leaflet-src.js"></script>
		<script  src="pool/libs/leaflet/leaflet.label-src.js"></script>
    </head>
    <body>


        <header class="navbar navbar-default navbar-static-top" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="http://jasonmury.com/Projects/gis-applications/" target="_blank"><span class="fa fa-home"></span>GIS for Population and Census Visualization</a>
                </div>


                <div class="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1" >
                    <ul class="nav navbar-nav">
					  <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"  aria-expanded="false"><div class="make-round">startups</div></a>
                            <ul class="dropdown-menu">
                                <li><a href="./studentMothers/">Data capture</a></li>
                                <li><a href="https://jasonmurikikinyua.bitballoon.com" >Visualization Website</a></li>
                                <li><a href="https://jasonmurikikinyua.bitballoon.com" >GDEv DeKUT</a></li>
                                <li><a href="https://jasonmurikikinyua.bitballoon.com">Github Repository</a></li>
                            </ul>
                        </li>
						<li><a class="cd-signin make-round" href="#0">Sign in</a></li>
						<li><a class="cd-signup make-round" href="#0">Sign up</a></li>
						<li class="dropdown" id="github">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"  aria-expanded="false"><div class="make-round">Github</div></a>
                            <ul class="dropdown-menu">
                               <li><a href="http://kinyuajasonmuriki.github.io" >.io Web Page</a></li>
							<li><a href="http://kinyuajasonmuriki.github.io/kinyuajasonmuriki.git" >.git Repository</a></li>
                            </ul>
                        </li>
						<li><a class="make-round" id="modal_about"  href="#about" ><div>About</div></a></li>
                    </ul>

                </div>



            </div>

        </header>
		 <?php require_once('register.php'); require_once('about.php'); ?>

        <div class="container-fluid mainbody">

            <div class="clearfix"></div>
            <div class="clearfix"></div>
