<?php
require_once './inc/d2.union.func.php';
header('Content-Type:text/html;charset=utf-8');

$PayNum=$_REQUEST['PayNum'];
$PayToUserId=$_REQUEST['PayToUserId'];
$PayToUser=$_REQUEST['PayToUser'];
$PayMoney=$_REQUEST['PayMoney'];

$PayGold=$_REQUEST['PayGold'];
$PayTime=$_REQUEST['PayTime'];
$Server=$_REQUEST['Server'];
$flag=$_REQUEST['flag'];

$ret=deposit($PayNum,$PayToUserId,$PayToUser,$PayMoney,$PayGold,$PayTime,$Server,$flag);
echo $ret;

?>