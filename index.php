<html>

<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width">
<title>Roulette Advisor</title>
<link rel="stylesheet" href="css/demo.css" />
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="/css/bootstrap.css">
<!-- Latest compiled and minified JavaScript -->
<script src="/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="css/roulette.css" />
<?php include('compute.php');?>
</head>

<body>
<div class="container">

<h1> Roulette Heatmap</h1>
<h2> Click on a tile to <bold>start</bold></h2>

<div class="board">
<div class="row">
<div class="col-md-99">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<a onClick="count(0)"><div class="col-md-1" id="zero"><p>&nbsp;</p></div></a>
<div class="col-md-99">&nbsp;</div>
<a onClick="count(3)"><div class="col-md-1" id="t3"><p>3<sup>0</sup></p></div></a>
<a onClick="count(6)"><div class="col-md-1" id="t6"><p>6<sup>0</sup></p></div></a>
<a onClick="count(9)"><div class="col-md-1" id="t9"><p>9<sup>0</sup></p></div></a>
<a onClick="count(12)"><div class="col-md-1" id="t12"><p>12<sup>0</sup></p></div></a>
<div class="col-md-99">&nbsp;</div>
<a onClick="count(15)"><div class="col-md-1" id="t15"><p>15<sup>0</sup></p></div></a>
<a onClick="count(18)"><div class="col-md-1" id="t18"><p>18<sup>0</sup></p></div></a>
<a onClick="count(21)"><div class="col-md-1" id="t21"><p>21<sup>0</sup></p></div></a>
<a onClick="count(24)"><div class="col-md-1" id="t24"><p>24<sup>0</sup></p></div></a>
<div class="col-md-99">&nbsp;</div>
<a onClick="count(27)"><div class="col-md-1" id="t27"><p>27<sup>0</sup></p></div></a>
<a onClick="count(30)"><div class="col-md-1" id="t30"><p>30<sup>0</sup></p></div></a>
<a onClick="count(33)"><div class="col-md-1" id="t33"><p>33<sup>0</sup></p></div></a>
<a onClick="count(36)"><div class="col-md-1" id="t36"><p>36<sup>0</sup></p></div></a>

<div class="col-md-2" id="thirdRow"><p>3rd Row<sup>0</sup></p></div>
</div>

<!-----------------------------Row 2 -->

<div class="row">
<div class="col-md-99">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<a onClick="count(0)"><div class="col-md-1" id="t0"><p>Zero<sup>0</sup></p></div></a>
<div class="col-md-99">&nbsp;</div>
<a onClick="count(2)"><div class="col-md-1" id="t2"><p>2<sup>0</sup></p></div></a>
<a onClick="count(5)"><div class="col-md-1" id="t5"><p>5<sup>0</sup></p></div></a>
<a onClick="count(8)"><div class="col-md-1" id="t8"><p>8<sup>0</sup></p></div></a>
<a onClick="count(11)"><div class="col-md-1" id="t11"><p>11<sup>0</sup></p></div></a>
<div class="col-md-99">&nbsp;</div>
<a onClick="count(14)"><div class="col-md-1" id="t14"><p>14<sup>0</sup></p></div></a>
<a onClick="count(17)"><div class="col-md-1" id="t17"><p>17<sup>0</sup></p></div></a>
<a onClick="count(20)"><div class="col-md-1" id="t20"><p>20<sup>0</sup></p></div></a>
<a onClick="count(23)"><div class="col-md-1" id="t23"><p>23<sup>0</sup></p></div></a>
<div class="col-md-99">&nbsp;</div>
<a onClick="count(26)"><div class="col-md-1" id="t26"><p>26<sup>0</sup></p></div></a>
<a onClick="count(29)"><div class="col-md-1" id="t29"><p>29<sup>0</sup></p></div></a>
<a onClick="count(32)"><div class="col-md-1" id="t32"><p>32<sup>0</sup></p></div></a>
<a onClick="count(35)"><div class="col-md-1" id="t35"><p>35<sup>0</sup></p></div></a>

<div class="col-md-2" id="secondRow"><p>2nd Row<sup>0</sup></p></div>
</div>
  
<!----------------------------Row 3 -->

<div class="row">
<div class="col-md-99">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<a onClick="count(0)"><div class="col-md-1" id="zero"><p><sup></sup></p></div></a>
<div class="col-md-99">&nbsp;</div>
<a onClick="count(1)"><div class="col-md-1" id="t1"><p>1<sup>0</sup></p></div></a>
<a onClick="count(4)"><div class="col-md-1" id="t4"><p>4<sup>0</sup></p></div></a>
<a onClick="count(7)"><div class="col-md-1" id="t7"><p>7<sup>0</sup></p></div></a>
<a onClick="count(10)"><div class="col-md-1" id="t10"><p>10<sup>0</sup></p></div></a>
<div class="col-md-99">&nbsp;</div>
<a onClick="count(13)"><div class="col-md-1" id="t13"><p>13<sup>0</sup></p></div></a>
<a onClick="count(16)"><div class="col-md-1" id="t16"><p>16<sup>0</sup></p></div></a>
<a onClick="count(19)"><div class="col-md-1" id="t19"><p>19<sup>0</sup></p></div></a>
<a onClick="count(22)"><div class="col-md-1" id="t22"><p>22<sup>0</sup></p></div></a>
<div class="col-md-99">&nbsp;</div>
<a onClick="count(25)"><div class="col-md-1" id="t25"><p>25<sup>0</sup></p></div></a>
<a onClick="count(28)"><div class="col-md-1" id="t28"><p>28<sup>0</sup></p></div></a>
<a onClick="count(31)"><div class="col-md-1" id="t31"><p>31<sup>0</sup></p></div></a>
<a onClick="count(34)"><div class="col-md-1" id="t34"><p>34<sup>0</sup></p></div></a>

<div class="col-md-2" id="firstRow"><p>1st Row<sup>0</sup></p></div>
</div>

<!----------------------------Row 4-->

<div class="row">
<div class="col-md-99">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<div class="col-md-3" id="first12"><p>1st 12<sup>0</sup></p></div>
<div class="col-md-99">&nbsp;</div>
<div class="col-md-3" id="second12"><p>2nd 12<sup>0</sup></p></div>
<div class="col-md-99">&nbsp;</div>
<div class="col-md-3" id="third12"><p>3rd 12<sup>0</sup></p></div>

</div>
  
<!--------------------------- Row 5-->
<div class="row">
<div class="col-md-99">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
<div class="col-md-2" id="low-n"><p>1 - 18<sup>0</sup></p></div>
<div class="col-md-2" id="evens"><p>EVENS<sup>0</sup></p></div>
<div class="col-md-2" id="red"><p>RED<sup>0</sup></p></div>
<div class="col-md-2" id="black"><p>BLACK<sup>0</sup></p></div>
<div class="col-md-2" id="odds"><p>ODD<sup>0</sup></p></div>
<div class="col-md-2" id="high-n"><p>19 - 36<sup>0</sup></p></div>
</div>
</div>
</div>

<h2 id="topten">hello</h2>
<h3 id="numberSelection">Random Number</h3>
</body>

<footer>
    <script>
    </script>
    <script src="js/main.js"></script>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
</footer>

</html>