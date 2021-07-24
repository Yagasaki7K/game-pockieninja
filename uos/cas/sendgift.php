<?php
require_once './inc/d2.union.func.php';

$loginName=urldecode($_REQUEST['loginName']);
$ip=$_REQUEST['ip'];
$code=$_REQUEST['code'];
$server=$_REQUEST['server'];

$ret=sendGift($loginName,$ip,$code,$server);
echo $ret;

?>