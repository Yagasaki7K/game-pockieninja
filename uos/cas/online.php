<?php
require_once './inc/d2.union.func.php';

$game=$_REQUEST['game'];
$server=$_REQUEST['server'];
$time=$_REQUEST['time'];
$sign=$_REQUEST['sign'];

$ret=getPlayerCount($game,$server,$time,$sign);
echo $ret;

?>

